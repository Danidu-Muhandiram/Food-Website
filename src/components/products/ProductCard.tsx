"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import { productHref, type Product } from "@/lib/products"

export function ProductCard({ product, imageSizes = "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" }: { product: Product; imageSizes?: string }) {
    const { items, addItem } = useCart()
    const [cartMessage, setCartMessage] = useState("")
    const quantity = items.find(item => item.id === product.id)?.quantity ?? 0
    const originalPrice = product.originalPrice ?? product.price
    const hasDiscount = originalPrice > product.price
    const badge = hasDiscount
        ? `${Math.round((1 - product.price / originalPrice) * 100)}% OFF`
        : product.badge

    return (
        <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-3 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.16)] transition-[border-color,box-shadow,translate] duration-300 hover:border-primary/30 hover:shadow-[0_16px_40px_-16px_rgba(15,23,42,0.18)] motion-safe:hover:-translate-y-1 focus-within:border-primary/40">
            <Link href={productHref(product)} aria-label={`View ${product.name}`} className="relative mb-4 block aspect-[4/3] overflow-hidden rounded-2xl bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {badge && (
                    <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white ${hasDiscount ? "bg-red-500" : product.badgeColor ?? "bg-secondary"}`}>
                        {badge}
                    </span>
                )}
                <Image src={product.image} alt={product.name} fill sizes={imageSizes} className="object-contain p-5 transition-transform duration-500 motion-safe:group-hover:scale-105" />
            </Link>
            <div className="flex flex-1 flex-col px-1 pb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{product.category}</span>
                <h3 title={product.name} className="mt-2 line-clamp-2 min-h-12 text-base font-bold leading-6 text-secondary"><Link href={productHref(product)} className="rounded hover:text-[#B93800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{product.name}</Link></h3>
                <p className="mt-1 min-h-5 text-sm text-slate-500">{product.packSize ?? "Ask about pack sizes"}</p>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-600" aria-label={`Rated ${product.rating} out of 5`}>
                    <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-secondary">{product.rating.toFixed(1)}</span><span>/ 5</span>
                </div>
                <div className="mt-auto pt-4">
                    <div className="flex min-h-8 flex-wrap items-baseline gap-x-2">
                        <span className="text-2xl font-black tracking-tight text-secondary">${product.price.toFixed(2)}</span>
                        {hasDiscount && <span className="text-sm text-slate-400 line-through"><span className="sr-only">Previously </span>${originalPrice.toFixed(2)}</span>}
                    </div>
                    <Button
                        type="button"
                        disabled={product.availability === "out-of-stock"}
                        onClick={() => { addItem(product); setCartMessage(`${product.name} added to your cart. Quantity ${quantity + 1}.`) }}
                        aria-label={`Add ${product.name} to cart${quantity ? `, ${quantity} already in cart` : ""}`}
                        className="mt-3 h-11 w-full gap-2 rounded-xl bg-primary text-sm font-bold text-white hover:bg-secondary focus-visible:ring-primary"
                    >
                        {quantity ? <Check aria-hidden="true" className="h-4 w-4" /> : <ShoppingBag aria-hidden="true" className="h-4 w-4" />}
                        {product.availability === "out-of-stock" ? "Out of stock" : "Add to Cart"}
                        {quantity > 0 && <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-xs" aria-hidden="true">{quantity}</span>}
                    </Button>
                    <Link href={productHref(product)} aria-label={`View details for ${product.name}`} className="mt-2 flex min-h-11 items-center justify-center rounded-xl text-sm font-semibold text-[#B93800] hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">View details</Link>
                </div>
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{cartMessage}</p>
        </article>
    )
}
