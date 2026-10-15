"use client"

import { useMemo, useSyncExternalStore } from "react"

export type CartProduct = {
    id: number
    name: string
    category: string
    price: number
    image: string
}

export type CartItem = CartProduct & { quantity: number }

const STORAGE_KEY = "pet-shop-cart"
const CHANGE_EVENT = "pet-shop-cart-change"
let memorySnapshot = "[]"
let storageUnavailable = false

function getSnapshot() {
    if (storageUnavailable) return memorySnapshot
    try {
        memorySnapshot = window.localStorage.getItem(STORAGE_KEY) ?? "[]"
        return memorySnapshot
    } catch {
        return memorySnapshot
    }
}

function parseItems(snapshot: string): CartItem[] {
    try {
        const items: unknown = JSON.parse(snapshot)
        if (!Array.isArray(items)) return []
        return items.filter((item): item is CartItem =>
            item !== null && typeof item === "object" &&
            Number.isInteger(item.id) && typeof item.name === "string" &&
            typeof item.category === "string" && typeof item.image === "string" &&
            Number.isFinite(item.price) && item.price >= 0 &&
            Number.isInteger(item.quantity) && item.quantity > 0
        )
    } catch {
        return []
    }
}

function saveItems(items: CartItem[]) {
    memorySnapshot = JSON.stringify(items)
    try {
        window.localStorage.setItem(STORAGE_KEY, memorySnapshot)
    } catch {
        storageUnavailable = true
    }
    window.dispatchEvent(new Event(CHANGE_EVENT))
}

function subscribe(onChange: () => void) {
    const onStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY || event.key === null) onChange()
    }
    window.addEventListener(CHANGE_EVENT, onChange)
    window.addEventListener("storage", onStorage)
    return () => {
        window.removeEventListener(CHANGE_EVENT, onChange)
        window.removeEventListener("storage", onStorage)
    }
}

function addItem(product: CartProduct, quantity = 1) {
    if (!Number.isSafeInteger(quantity) || quantity < 1) return
    const items = parseItems(getSnapshot())
    const existing = items.find(item => item.id === product.id)
    saveItems(existing
        ? items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
        : [...items, { id: product.id, name: product.name, category: product.category, price: product.price, image: product.image, quantity }])
}

function changeQuantity(id: number, delta: number) {
    saveItems(parseItems(getSnapshot()).map(item => item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item))
}

function removeItem(id: number) {
    saveItems(parseItems(getSnapshot()).filter(item => item.id !== id))
}

function clearCart() {
    saveItems([])
}

const getServerSnapshot = () => "[]"

export function useCart() {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    const items = useMemo(() => parseItems(snapshot), [snapshot])
    return { items, addItem, changeQuantity, removeItem, clearCart }
}
