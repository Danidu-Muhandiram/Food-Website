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
                        <h2 className="text-4xl md:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                    {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </div>

            </div>
        </section>
    )
}
