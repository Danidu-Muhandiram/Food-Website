"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, ArrowRight } from "lucide-react"

// Product Data
const CATEGORIES = ["All Food", "Dog Food", "Bird Food", "Rabbit Food", "Fish Food", "Cat Food"]

const PRODUCTS = [
    {
        id: 1,
        name: "Whole Paws, Whole Paws, Dry Chicken And Oats Recipe",
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
        category: "Dog Food",
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
                        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Our <span className="text-primary">Most Popular</span> Products
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
                            Explore our top-rated selections, loved by pets and trusted by owners. From daily essentials to special treats, find exactly what your furry friend craves.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-10 md:h-12 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
                            See All Products
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                px-4 md:px-5 py-2 rounded-full border-2 font-bold text-xs md:text-sm transition-all duration-300
                                ${activeCategory === cat
                                    ? 'bg-[#E85C24] border-[#E85C24] text-white shadow-lg shadow-orange-200'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-[#E85C24] hover:text-[#E85C24]'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-[#F8F8F8] rounded-[1.5rem] p-3 border border-slate-100 hover:border-[#E85C24]/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col">

                            {/* Image Containe*/}
                            <div className="relative aspect-[4/3] bg-white rounded-[1.2rem] mb-3 overflow-hidden flex items-center justify-center">
                                {product.badge && (
                                    <div className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider`}>
                                        {product.badge}
                                    </div>
                                )}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-2 flex-1 flex flex-col px-1">
                                <div className="flex justify-between items-start">
                                    <span className="text-[#E85C24] text-[10px] font-bold uppercase tracking-wide bg-white/60 px-2 py-0.5 rounded-full">{product.category}</span>
                                    <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-700 text-base leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-[#E85C24] transition-colors">
                                    {product.name}
                                </h3>

                                <div className="pt-2 mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-black text-[#E85C24]">${product.price.toFixed(2)}</span>
                                            {product.originalPrice && (
                                                <span className="text-xs font-bold text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="w-9 h-9 rounded-full bg-white text-slate-900 border border-slate-200 flex items-center justify-center hover:bg-[#E85C24] hover:border-[#E85C24] hover:text-white hover:scale-110 transition-all duration-300 shadow-md">
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
