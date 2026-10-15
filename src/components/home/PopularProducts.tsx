"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/products/ProductCard"
import { PRODUCTS } from "@/lib/products"

// Keep the home-page filter order while sharing the shop's catalog and cards.
const CATEGORIES = ["All Food", "Dog Food", "Bird Food", "Rabbit Food", "Fish Food", "Cat Food"]

export function PopularProducts() {
    const [activeCategory, setActiveCategory] = useState("All Food")

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
                        <h2 id="popular-products-heading" className="text-[32px] md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
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
                                min-h-11 px-4 md:px-5 py-2 rounded-full border-2 font-bold text-xs md:text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary
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

                {filteredProducts.length > 1 && <p id="popular-products-swipe-hint" className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500 sm:hidden">Swipe to explore<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></p>}
                {/* Swipe through home-page highlights on phones; keep the desktop grid. */}
                <ul key={activeCategory} aria-labelledby="popular-products-heading" aria-describedby={filteredProducts.length > 1 ? "popular-products-swipe-hint" : undefined} tabIndex={0} className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain px-4 pt-1 pb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
                    {filteredProducts.map(product => (
                        <li key={product.id} className="w-[82vw] max-w-[320px] min-w-0 shrink-0 snap-start sm:w-auto sm:max-w-none">
                            <ProductCard product={product} imageSizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, (min-width: 390px) 320px, 82vw" />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
