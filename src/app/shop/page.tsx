"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, Filter, Search, ArrowRight } from "lucide-react"

const PRODUCTS = [
    {
        id: 1,
        name: "Whole Paws Dry Chicken And Oats Recipe",
        category: "Cat Food",
        price: 36.99,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: "Best Seller"
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
        badge: "20% OFF"
    },
    {
        id: 4,
        name: "Kaytee Food From The Wild Natural Snack",
        category: "Rabbit Food",
        price: 27.00,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: null
    },
    {
        id: 5,
        name: "Goldfish Flakes Balanced Diet With Algae",
        category: "Fish Food",
        price: 25.99,
        originalPrice: 50.99,
        rating: 4.9,
        image: "/images/new-tin.png",
        badge: "50% OFF"
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

const CATEGORIES = ["All", "Dog Food", "Cat Food", "Bird Food", "Rabbit Food", "Fish Food"]

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Hero */}
            <section className="relative bg-secondary text-white pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Our Pet <span className="text-primary">Shop</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Premium food, snacks, vitamins, and accessories for your best friends.
                    </p>
                </div>
            </section>

            {/* Shop Content */}
            <section className="py-16 bg-orange-50/20 flex-1">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* Sidebar Filters */}
                        <div className="w-full lg:w-1/4 space-y-8">
                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                                <div className="flex items-center gap-2 font-black text-secondary text-lg border-b border-slate-100 pb-4">
                                    <Filter className="w-5 h-5 text-primary" />
                                    <span>Filters</span>
                                </div>

                                {/* Search Bar */}
                                <div className="relative">
                                    <input 
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                </div>

                                {/* Category Filters */}
                                <div className="space-y-3">
                                    <h4 className="font-bold text-secondary text-sm">Categories</h4>
                                    <div className="flex flex-col gap-2">
                                        {CATEGORIES.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`text-left px-3 py-2 rounded-xl text-sm font-bold transition-all
                                                    ${selectedCategory === cat 
                                                        ? 'bg-primary text-white shadow-md' 
                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                                    }
                                                `}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="w-full lg:w-3/4 space-y-8">
                            {filteredProducts.length === 0 ? (
                                <div className="bg-white p-12 rounded-[2rem] border border-slate-100 text-center space-y-4 shadow-sm">
                                    <p className="text-slate-500 font-medium">No products found matching your search filters.</p>
                                    <Button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="bg-primary text-white rounded-full">
                                        Reset Filters
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="group bg-white rounded-[2rem] p-4 border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col">
                                            
                                            {/* Image */}
                                            <div className="relative aspect-[4/3] bg-[#F8F8F8] rounded-[1.5rem] mb-4 overflow-hidden flex items-center justify-center">
                                                {product.badge && (
                                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                        {product.badge}
                                                    </span>
                                                )}
                                                <Image 
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-2 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <span className="text-primary text-[10px] font-black uppercase tracking-wider">{product.category}</span>
                                                    <h3 className="font-bold text-secondary text-base leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                                        {product.name}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-50">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-xl font-black text-primary">${product.price.toFixed(2)}</span>
                                                        {product.originalPrice && (
                                                            <span className="text-xs font-bold text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                                                        )}
                                                    </div>

                                                    <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-sm">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
