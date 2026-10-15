"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronRight, PawPrint, Search, ShoppingBag, SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/products/ProductCard"
import { PRODUCTS } from "@/lib/products"

const CATEGORIES = [
    { value: "All", label: "All pets" },
    { value: "Dog Food", label: "Dogs" },
    { value: "Cat Food", label: "Cats" },
    { value: "Bird Food", label: "Birds" },
    { value: "Rabbit Food", label: "Rabbits" },
    { value: "Fish Food", label: "Fish" },
]

const SORT_OPTIONS = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: low to high" },
    { value: "price-high", label: "Price: high to low" },
    { value: "rating", label: "Top rated" },
    { value: "name", label: "Name: A to Z" },
]

function ShopPageContent() {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query") ?? ""
    const requestedCategory = searchParams.get("category") ?? "All"
    const selectedCategory = CATEGORIES.some(category => category.value === requestedCategory) ? requestedCategory : "All"
    const requestedSort = searchParams.get("sort") ?? "featured"
    const sortBy = SORT_OPTIONS.some(option => option.value === requestedSort) ? requestedSort : "featured"
    const normalizedQuery = searchQuery.trim().toLowerCase()
    const hasFilters = selectedCategory !== "All" || normalizedQuery !== ""
    const activeCategory = CATEGORIES.find(category => category.value === selectedCategory) ?? CATEGORIES[0]
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    // Next's history integration keeps filters, incoming hero links, and Back navigation in sync.
    const updateFilters = (changes: Partial<Record<"query" | "category" | "sort", string>>, push = false) => {
        const params = new URLSearchParams(window.location.search)
        Object.entries(changes).forEach(([key, value]) => {
            if (!value || (key === "category" && value === "All") || (key === "sort" && value === "featured")) params.delete(key)
            else params.set(key, value)
        })
        const query = params.toString()
        const url = `/shop${query ? `?${query}` : ""}`
        if (push) window.history.pushState(null, "", url)
        else window.history.replaceState(null, "", url)
    }
    const clearFilters = () => updateFilters({ category: "All", query: "" })

    const filteredProducts = PRODUCTS.filter(product =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        `${product.name} ${product.category}`.toLowerCase().includes(normalizedQuery)
    ).sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price
        if (sortBy === "price-high") return b.price - a.price
        if (sortBy === "rating") return b.rating - a.rating
        if (sortBy === "name") return a.name.localeCompare(b.name)
        return 0
    })

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />
            <section aria-labelledby="shop-title" className="relative isolate overflow-hidden bg-primary pb-8 pt-28 text-white md:pb-10" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[32px] border-white/[0.04]" />
                <div className="container relative mx-auto px-4 text-center md:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/90 md:text-sm">
                        <Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Home</Link>
                        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                        <span aria-current="page">Shop</span>
                    </nav>
                    <h1 id="shop-title" className="text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em]">Our Pet <span className="text-secondary">Shop</span></h1>
                    <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">Good food, everyday essentials, and a little extra love for your best friend.</p>
                </div>
            </section>

            <section aria-label="Shop products" className="flex-1 bg-[#fffaf3]/60 py-6 md:py-10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid items-start gap-6 lg:grid-cols-[224px_minmax(0,1fr)] lg:gap-8">
                        <aside aria-labelledby="shop-filters-title" className="min-w-0 rounded-3xl border border-stone-200 bg-white p-4 md:p-5 lg:sticky lg:top-6">
                            <div className="mb-4 flex min-h-11 items-center justify-between gap-3">
                                <h2 id="shop-filters-title" className="flex items-center gap-2 text-lg font-bold text-secondary"><PawPrint aria-hidden="true" className="h-5 w-5 text-primary" />Shop by pet</h2>
                                {hasFilters && <button type="button" onClick={clearFilters} className="min-h-11 rounded-lg px-1 text-sm font-semibold text-[#B93800] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Clear</button>}
                            </div>
                            <label htmlFor="shop-search" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">Find a favorite</label>
                            <div className="relative">
                                <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                                <input id="shop-search" type="search" value={searchQuery} onChange={event => updateFilters({ query: event.target.value })} placeholder="Search products" className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-sm text-secondary placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
                            </div>
                            <button type="button" aria-expanded={mobileFiltersOpen} aria-controls="shop-categories" onClick={() => setMobileFiltersOpen(open => !open)} className="mt-3 inline-flex min-h-11 w-full items-center justify-between gap-2 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden">
                                <span className="inline-flex items-center gap-2"><SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-primary" />{activeCategory.label}</span>
                                <span className="text-xs text-slate-500">{mobileFiltersOpen ? "Hide categories" : "Change pet"}</span>
                            </button>
                            <div id="shop-categories" className={`${mobileFiltersOpen ? "flex" : "hidden"} mt-3 flex-wrap gap-2 lg:mt-5 lg:flex lg:flex-col`}>
                                {CATEGORIES.map(category => {
                                    const count = category.value === "All" ? PRODUCTS.length : PRODUCTS.filter(product => product.category === category.value).length
                                    const selected = selectedCategory === category.value
                                    return (
                                        <button key={category.value} type="button" aria-pressed={selected} onClick={() => updateFilters({ category: category.value }, true)} className={`inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selected ? "border-primary/25 bg-orange-50 text-[#B93800]" : "border-transparent text-slate-600 hover:border-orange-100 hover:bg-orange-50/60 hover:text-secondary"}`}>
                                            {category.label}<span className={`rounded-full px-2 py-0.5 text-xs ${selected ? "bg-white" : "bg-slate-100"}`}>{count}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </aside>

                        <div className="min-w-0">
                            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <h2 id="shop-results-title" className="text-2xl font-black tracking-tight text-secondary md:text-[28px]">{selectedCategory === "All" ? "Find their favorites" : selectedCategory}</h2>
                                    <p role="status" aria-live="polite" aria-atomic="true" className="mt-1 text-sm leading-relaxed text-slate-600">{filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}{hasFilters ? " matching your filters" : " for happy pets"}</p>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <label htmlFor="shop-sort" className="text-sm text-slate-600">Sort by</label>
                                    <select id="shop-sort" value={sortBy} onChange={event => updateFilters({ sort: event.target.value })} className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none">
                                        {SORT_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                                    </select>
                                </div>
                            </div>
                            {hasFilters && (
                                <div aria-label="Active filters" className="mb-5 flex flex-wrap gap-2">
                                    {selectedCategory !== "All" && <button type="button" onClick={() => updateFilters({ category: "All" })} aria-label={`Remove ${selectedCategory} filter`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-orange-200 bg-white px-3 text-sm text-secondary hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{activeCategory.label}<X aria-hidden="true" className="h-3.5 w-3.5" /></button>}
                                    {normalizedQuery && <button type="button" onClick={() => updateFilters({ query: "" })} aria-label="Remove search filter" className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white px-3 text-sm text-secondary hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="truncate">Search: {searchQuery.trim()}</span><X aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></button>}
                                </div>
                            )}
                            {filteredProducts.length === 0 ? (
                                <div className="rounded-3xl border border-stone-200 bg-white px-5 py-12 text-center md:p-12">
                                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-primary"><Search aria-hidden="true" className="h-6 w-6" /></span>
                                    <h3 className="mt-5 text-xl font-bold text-secondary">No favorites found yet</h3>
                                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">Try a different name or pet category. A fresh search might find their next favorite.</p>
                                    <button type="button" onClick={clearFilters} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-5 text-sm font-bold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><ShoppingBag aria-hidden="true" className="h-4 w-4" />Show all products</button>
                                </div>
                            ) : (
                                <div aria-labelledby="shop-results-title" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:gap-5">
                                    {filteredProducts.map(product => <ProductCard key={product.id} product={product} imageSizes="(min-width: 1280px) 25vw, (min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw" />)}
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

export default function ShopPage() {
    return (
        <Suspense fallback={<div role="status" className="flex min-h-screen items-center justify-center bg-[#fffaf3] text-sm text-slate-600">Loading products...</div>}>
            <ShopPageContent />
        </Suspense>
    )
}
