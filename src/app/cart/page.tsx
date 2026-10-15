"use client"

import { useState, useSyncExternalStore } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight, HeartHandshake, Mail, Minus, Plus, ShoppingBag, Trash2, Undo2 } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { useCart, type CartItem } from "@/lib/cart"

const subscribeToHydration = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
const money = (cents: number) => currency.format(cents / 100)
const itemTotal = (item: CartItem) => Math.round(item.price * 100) * item.quantity
const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

function CartSkeleton() {
    return (
        <div role="status" aria-busy="true" className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
            <span className="sr-only">Loading your saved cart...</span>
            <div aria-hidden="true" className="space-y-4 rounded-3xl border border-stone-200 bg-white p-5 motion-safe:animate-pulse">
                <div className="h-6 w-32 rounded-lg bg-slate-100" />
                {[0, 1].map(index => <div key={index} className="flex gap-3 border-t border-slate-100 pt-5"><div className="h-20 w-20 shrink-0 rounded-2xl bg-slate-100" /><div className="flex-1 space-y-3"><div className="h-4 w-24 rounded bg-slate-100" /><div className="h-5 w-3/4 rounded bg-slate-100" /><div className="h-8 w-32 rounded-lg bg-slate-100" /></div></div>)}
            </div>
            <div aria-hidden="true" className="h-72 rounded-3xl border border-orange-100 bg-[#fffaf3] motion-safe:animate-pulse" />
        </div>
    )
}

export default function CartPage() {
    const { items: cartItems, changeQuantity, removeItem, addItem } = useCart()
    const isHydrated = useSyncExternalStore(subscribeToHydration, getClientSnapshot, getServerSnapshot)
    const [removedItem, setRemovedItem] = useState<CartItem | null>(null)
    const [announcement, setAnnouncement] = useState("")
    const [draftReady, setDraftReady] = useState(false)
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const subtotalCents = cartItems.reduce((total, item) => total + itemTotal(item), 0)

    const updateQuantity = (item: CartItem, delta: number) => {
        const nextQuantity = Math.max(1, item.quantity + delta)
        if (nextQuantity === item.quantity) return
        changeQuantity(item.id, delta)
        setDraftReady(false)
        setAnnouncement(`${item.name}: quantity ${nextQuantity}. Item total ${money(Math.round(item.price * 100) * nextQuantity)}.`)
    }
    const removeFromCart = (item: CartItem) => {
        removeItem(item.id)
        setRemovedItem({ ...item })
        setDraftReady(false)
        setAnnouncement(`${item.name} removed. Use Undo to restore it.`)
    }
    const undoRemove = () => {
        if (!removedItem) return
        addItem(removedItem, removedItem.quantity)
        setAnnouncement(`${removedItem.name} restored to your cart.`)
        setRemovedItem(null)
        setDraftReady(false)
    }
    const inquiryBody = [
        "Hello Pet Shop,",
        "I would like to ask about these items:",
        "",
        ...cartItems.map((item, index) => `${index + 1}. ${item.name}\n${item.category} | Quantity: ${item.quantity}\n${money(Math.round(item.price * 100))} each | Item total: ${money(itemTotal(item))}\n`),
        `Items subtotal: ${money(subtotalCents)}`,
        "",
        "Please confirm availability, delivery, and any applicable taxes before I place an order.",
        "Thank you!",
    ].join("\n")
    const inquiryHref = `mailto:hello@petshop.com?subject=${encodeURIComponent("Pet Shop order inquiry")}&body=${encodeURIComponent(inquiryBody)}`

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />
            <section aria-labelledby="cart-title" className="relative isolate overflow-hidden bg-primary pb-8 pt-28 text-white md:pb-10" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[32px] border-white/[0.04]" />
                <div className="container relative mx-auto px-4 text-center md:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/90 md:text-sm">
                        <Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Home</Link>
                        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                        <Link href="/shop" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Shop</Link>
                        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                        <span aria-current="page">Cart</span>
                    </nav>
                    <h1 id="cart-title" className="text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em]">Your shopping <span className="text-secondary">cart.</span></h1>
                    <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">A few good things for your best friend. Review your picks and make them just right.</p>
                </div>
            </section>

            <section aria-label="Shopping cart" className="flex-1 bg-[#fffaf3]/60 py-6 md:py-10">
                <div className="container mx-auto px-4 md:px-8">
                    <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{announcement}</p>
                    {removedItem && (
                        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-orange-200 bg-white p-3 text-secondary sm:px-4">
                            <Undo2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#B93800]" />
                            <p className="min-w-0 flex-1 text-sm"><span className="block truncate font-semibold">{removedItem.name}</span>Removed from your cart.</p>
                            <button type="button" onClick={undoRemove} className={`min-h-11 shrink-0 rounded-xl px-3 text-sm font-bold text-[#B93800] hover:bg-orange-50 ${focusClass}`}>Undo</button>
                        </div>
                    )}
                    {!isHydrated ? <CartSkeleton /> : cartItems.length === 0 ? (
                        <div className="mx-auto max-w-lg rounded-3xl border border-stone-200 bg-white p-6 text-center md:p-10">
                            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-secondary"><ShoppingBag aria-hidden="true" className="h-7 w-7" /></span>
                            <h2 className="mt-5 text-2xl font-black tracking-tight text-secondary md:text-3xl">A little empty, for now.</h2>
                            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base">Find food, treats, and everyday favorites for your best friend. Your picks will be waiting here.</p>
                            <Link href="/shop" className={`group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary md:text-base ${focusClass}`}>Explore the shop<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" /></Link>
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                                <Link href="/shop?category=Dog%20Food" className={`inline-flex min-h-11 items-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 hover:border-primary/40 hover:text-secondary ${focusClass}`}>Shop for dogs</Link>
                                <Link href="/shop?category=Cat%20Food" className={`inline-flex min-h-11 items-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 hover:border-primary/40 hover:text-secondary ${focusClass}`}>Shop for cats</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
                            <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-4 md:p-6">
                                <div className="mb-1 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                                    <h2 id="cart-items-title" className="flex items-center gap-2 text-xl font-bold tracking-tight text-secondary md:text-2xl">Your items<span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold tracking-normal text-[#B93800]">{cartCount} {cartCount === 1 ? "item" : "items"}</span></h2>
                                    <Link href="/shop" className={`inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-semibold text-[#B93800] hover:text-secondary ${focusClass}`}><ArrowLeft aria-hidden="true" className="h-4 w-4" />Keep shopping</Link>
                                </div>
                                <ul aria-labelledby="cart-items-title" className="divide-y divide-slate-100">
                                    {cartItems.map(item => (
                                        <li key={item.id} className="py-5 last:pb-0">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#F8F7F4] sm:h-24 sm:w-24"><Image src={item.image} alt={item.name} fill sizes="(min-width: 640px) 96px, 80px" className="object-contain p-2" /></div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs font-bold uppercase tracking-wider text-[#B93800]">{item.category}</p>
                                                    <h3 title={item.name} className="mt-1 line-clamp-2 text-base font-bold leading-6 text-secondary">{item.name}</h3>
                                                    <p className="mt-2 text-sm tabular-nums text-slate-500">{money(Math.round(item.price * 100))} each</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 sm:ml-28">
                                                <div className="flex items-center gap-1">
                                                    <div role="group" aria-label={`Quantity for ${item.name}`} className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50/60 p-0.5">
                                                        <button type="button" onClick={() => updateQuantity(item, -1)} disabled={item.quantity === 1} aria-label={`Decrease quantity of ${item.name}`} className={`flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-white hover:text-secondary disabled:cursor-not-allowed disabled:opacity-30 ${focusClass}`}><Minus aria-hidden="true" className="h-4 w-4" /></button>
                                                        <span className="min-w-8 text-center text-base font-bold tabular-nums text-secondary"><span className="sr-only">Quantity: </span>{item.quantity}</span>
                                                        <button type="button" onClick={() => updateQuantity(item, 1)} aria-label={`Increase quantity of ${item.name}`} className={`flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-white hover:text-secondary ${focusClass}`}><Plus aria-hidden="true" className="h-4 w-4" /></button>
                                                    </div>
                                                    <button type="button" onClick={() => removeFromCart(item)} aria-label={`Remove ${item.name} from cart`} title="Remove item" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600 ${focusClass}`}><Trash2 aria-hidden="true" className="h-4 w-4" /></button>
                                                </div>
                                                <p className="text-xl font-black tabular-nums tracking-tight text-secondary sm:text-2xl"><span className="sr-only">Item total: </span>{money(itemTotal(item))}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <aside aria-labelledby="cart-summary-title" className="min-w-0 rounded-3xl border border-orange-100 bg-[#fffaf3] p-5 lg:sticky lg:top-6">
                                <h2 id="cart-summary-title" className="text-xl font-bold tracking-tight text-secondary">Cart summary</h2>
                                <dl className="mt-5 space-y-3 text-sm text-slate-600">
                                    <div className="flex items-center justify-between gap-3"><dt>Items</dt><dd className="font-semibold tabular-nums text-secondary">{cartCount}</dd></div>
                                    <div className="flex items-center justify-between gap-3"><dt>Delivery &amp; tax</dt><dd className="text-right">To be confirmed</dd></div>
                                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-orange-100 pt-4 text-secondary"><dt className="font-bold">Items subtotal</dt><dd className="text-2xl font-black tabular-nums tracking-tight">{money(subtotalCents)}</dd></div>
                                </dl>
                                <p className="mt-3 text-xs leading-relaxed text-slate-500">Availability, delivery, and any applicable taxes are confirmed by our team before you place an order.</p>
                                <a href={inquiryHref} onClick={() => setDraftReady(true)} className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-white transition-colors hover:bg-secondary ${focusClass}`}><Mail aria-hidden="true" className="h-4 w-4" />Email order inquiry<ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
                                <p className="mt-2 text-xs leading-relaxed text-slate-500">Opens an email draft for you to review and send.</p>
                                {draftReady && <p role="status" className="mt-3 rounded-xl border border-orange-100 bg-white p-3 text-sm leading-relaxed text-secondary">Review and send the draft from your email app. Your cart stays here.</p>}
                                <Link href="/contact" className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#B93800] hover:text-secondary ${focusClass}`}><HeartHandshake aria-hidden="true" className="h-4 w-4" />Need a hand? Talk to us</Link>
                            </aside>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    )
}
