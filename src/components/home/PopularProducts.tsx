"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, ArrowRight, ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/lib/cart"

// Product Data
const CATEGORIES = ["All Food", "Dog Food", "Bird Food", "Rabbit Food", "Fish Food", "Cat Food"]

const PRODUCTS = [
    {
        id: 1,
        name: "Whole Paws Dry Chicken And Oats Recipe",
        category: "Cat Food",
        price: 36.99,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: "Best Seller",
        badgeColor: "bg-emerald-500"
    },
    {
        id: 2,
        name: "Meow Mix Tender Centers Dry Cat Food, Salmon",
        category: "Cat Food",
        price: 30.20,
        rating: 4.9,
        image: "/images/new-tin.png",
        badge: null
    },
    {
        id: 3,
        name: "Kaytee Wild Bird Food Nut & Fruit Seed Blend",
        category: "Bird Food",
        price: 12.00,
        originalPrice: 18.00,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: "20% OFF",
        badgeColor: "bg-red-500"
    },
    {
        id: 4,
        name: "Kaytee Food From The Wild Natural Snack For Pet Rabbits",
        category: "Rabbit Food",
        price: 27.00,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: null
    },
    {
        id: 5,
        name: "Goldfish Flakes 7.06 Ounces, Balanced Diet, With Algae",
        category: "Fish Food",
        price: 25.99,
        originalPrice: 50.99,
        rating: 4.9,
        image: "/images/new-tin.png",
        badge: "50% OFF",
        badgeColor: "bg-red-500"
    },
    {
        id: 6,
        name: "Nutrition Adult Dry Dog Food Roasted Chicken",
        category: "Dog Food",
        price: 26.99,
        rating: 4.8,
        image: "/images/new-bag.png",
        badge: null
    }
]

export function PopularProducts() {
    const [activeCategory, setActiveCategory] = useState("All Food")
    const [cartMessage, setCartMessage] = useState("")
    const { items, addItem } = useCart()

    const filteredProducts = activeCategory === "All Food"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory)

    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 md:mb-10">
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm">
                            Popular Products
                        </h2>
                        <h2 className="text-[40px] font-black text-slate-900 tracking-tight leading-tight">
                            Our <span className="text-primary">Most Popular</span> Products
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
                            Explore our top-rated selections, loved by pets and trusted by owners. From daily essentials to special treats, find exactly what your furry friend craves.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link href="/shop" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold h-10 md:h-12 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
                            See All Products
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            aria-pressed={activeCategory === cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                px-4 md:px-5 py-2 rounded-full border-2 font-bold text-xs md:text-sm transition-all duration-300
                                ${activeCategory === cat
                                    ? 'bg-primary border-primary text-white shadow-sm'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{cartMessage}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                    {filteredProducts.map((product) => {
                        const quantity = items.find(item => item.id === product.id)?.quantity ?? 0
                        return (
                            <article key={product.id} className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-3 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.16)] transition-[border-color,box-shadow,translate] duration-300 hover:border-primary/30 hover:shadow-[0_16px_40px_-16px_rgba(15,23,42,0.18)] motion-safe:hover:-translate-y-1 focus-within:border-primary/40">

                                {/* A consistent image stage keeps every card aligned. */}
                                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-[#F8F7F4]">
                                    {product.badge && (
                                        <div className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider`}>
                                            {product.badge}
                                        </div>
                                    )}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-contain p-5 transition-transform duration-500 motion-safe:group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col px-1 pb-1">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{product.category}</span>
                                    <h3 title={product.name} className="mt-2 line-clamp-2 min-h-12 text-base font-bold leading-6 text-secondary">
                                        {product.name}
                                    </h3>

                                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-600" aria-label={`Rated ${product.rating} out of 5`}>
                                        <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        <span className="font-bold text-secondary">{product.rating.toFixed(1)}</span><span>/ 5</span>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <div className="flex min-h-8 flex-wrap items-baseline gap-x-2">
                                            <span className="text-2xl font-black tracking-tight text-secondary">${product.price.toFixed(2)}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-slate-400 line-through"><span className="sr-only">Previously </span>${product.originalPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => { addItem(product); setCartMessage(`${product.name} added to your cart. Quantity ${quantity + 1}.`) }}
                                            aria-label={`Add ${product.name} to cart${quantity ? `, ${quantity} already in cart` : ""}`}
                                            className="mt-3 h-11 w-full gap-2 rounded-xl bg-primary text-sm font-bold text-white hover:bg-secondary focus-visible:ring-primary"
                                        >
                                            {quantity ? <Check aria-hidden="true" className="h-4 w-4" /> : <ShoppingBag aria-hidden="true" className="h-4 w-4" />}
                                            Add to Cart
                                            {quantity > 0 && <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-xs" aria-hidden="true">{quantity}</span>}
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
