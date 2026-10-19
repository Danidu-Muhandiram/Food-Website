"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart"
import type { Product } from "@/lib/products"

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

export function ProductPurchase({ product }: { product: Product }) {
    const { addItem, items } = useCart()
    const [quantity, setQuantity] = useState(1)
    const [message, setMessage] = useState("")
    const inCart = items.find(item => item.id === product.id)?.quantity ?? 0
    const unavailable = product.availability === "out-of-stock"

    return (
        <div className="mt-6 border-t border-orange-100 pt-5">
            <div className="flex flex-wrap items-center gap-3">
                <div role="group" aria-label="Quantity to add" className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1">
                    <button type="button" onClick={() => setQuantity(value => Math.max(1, value - 1))} disabled={quantity === 1 || unavailable} aria-label="Decrease quantity" className={`flex h-11 w-11 items-center justify-center rounded-lg hover:bg-orange-50 disabled:opacity-30 ${focus}`}><Minus aria-hidden="true" className="h-4 w-4" /></button>
                    <span className="min-w-9 text-center font-bold tabular-nums"><span className="sr-only">Quantity: </span>{quantity}</span>
                    <button type="button" onClick={() => setQuantity(value => Math.min(99, value + 1))} disabled={quantity === 99 || unavailable} aria-label="Increase quantity" className={`flex h-11 w-11 items-center justify-center rounded-lg hover:bg-orange-50 disabled:opacity-30 ${focus}`}><Plus aria-hidden="true" className="h-4 w-4" /></button>
                </div>
                <button type="button" disabled={unavailable} onClick={() => {
                    addItem(product, quantity)
                    setMessage(`${quantity} ${quantity === 1 ? "pack" : "packs"} added. ${inCart + quantity} in your cart.`)
                }} className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 ${focus}`}><ShoppingBag aria-hidden="true" className="h-4 w-4" />{unavailable ? "Out of stock" : "Add to Cart"}</button>
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="mt-3 min-h-6 text-sm text-slate-600">{message && <span className="inline-flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B93800]" />{message}</span>}</p>
            {inCart > 0 && <Link href="/cart" className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#B93800] hover:underline ${focus}`}>View cart ({inCart} of this item)</Link>}
        </div>
    )
}
