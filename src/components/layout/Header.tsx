"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart"

const NAV_LINKS = [
    { href: "/", label: "Home", mobileLabel: "Home" },
    { href: "/about", label: "About Us", mobileLabel: "About Us" },
    { href: "/shop", label: "Shop", mobileLabel: "Shop Products" },
    { href: "/services", label: "Services", mobileLabel: "Our Services" },
    { href: "/contact", label: "Contact", mobileLabel: "Contact" },
]

export function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const { items: cartItems } = useCart()
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const isActiveLink = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

    // UI States
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    // Search query state
    const [searchQuery, setSearchQuery] = useState("")
    const searchTriggerRef = useRef<HTMLButtonElement>(null)
    const searchPanelRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchBackdropRef = useRef<HTMLDivElement>(null)
    const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const restoreMobileFocusRef = useRef(false)
    const overlayOpen = searchOpen || mobileMenuOpen

    // Keep scrolling locked when moving directly between overlays.
    useEffect(() => {
        if (!overlayOpen) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = previousOverflow }
    }, [overlayOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSearchOpen(false)
                setMobileMenuOpen(false)
                if (searchOpen) searchTriggerRef.current?.focus()
                if (mobileMenuOpen) restoreMobileFocusRef.current = true
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [searchOpen, mobileMenuOpen])

    useEffect(() => {
        if (!mobileMenuOpen) {
            if (restoreMobileFocusRef.current) mobileMenuTriggerRef.current?.focus()
            restoreMobileFocusRef.current = false
            return
        }
        const panel = mobileMenuRef.current
        panel?.querySelector<HTMLAnchorElement>('[aria-current], nav a')?.focus()
        const handleTab = (event: KeyboardEvent) => {
            if (event.key !== "Tab" || !panel) return
            const controls = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
            const first = controls[0]
            const last = controls[controls.length - 1]
            if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) {
                event.preventDefault()
                last?.focus()
            } else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) {
                event.preventDefault()
                first?.focus()
            }
        }
        const desktop = window.matchMedia("(min-width: 768px)")
        const handleResize = () => { if (desktop.matches) setMobileMenuOpen(false) }
        document.addEventListener("keydown", handleTab)
        desktop.addEventListener("change", handleResize)
        return () => {
            document.removeEventListener("keydown", handleTab)
            desktop.removeEventListener("change", handleResize)
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        if (!searchOpen) return
        searchInputRef.current?.focus()

        const handleOutsidePointer = (event: PointerEvent) => {
            const target = event.target as Node | null
            if (target && !searchPanelRef.current?.contains(target) && !searchTriggerRef.current?.contains(target)) {
                setSearchOpen(false)
                if (target === searchBackdropRef.current) searchTriggerRef.current?.focus()
            }
        }
        document.addEventListener("pointerdown", handleOutsidePointer)
        return () => {
            document.removeEventListener("pointerdown", handleOutsidePointer)
        }
    }, [searchOpen])

    // Handlers
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/shop?query=${encodeURIComponent(searchQuery.trim())}`)
            setSearchOpen(false)
            setSearchQuery("")
        }
    }

    return (
        <>
            <header inert={mobileMenuOpen} className="absolute top-0 left-0 z-50 w-full pt-4 md:pt-6">
                <div className="container relative z-20 mx-auto px-4 md:px-8 flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight hover:text-accent transition-colors">
                            PET SHOP
                        </div>
                    </Link>

                    {/* Desktop navigation */}
                    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-4 lg:gap-8 text-white/90 text-sm font-bold">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                aria-current={isActiveLink(href) ? (pathname === href ? "page" : "location") : undefined}
                                className="relative py-1 transition-colors duration-200 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-accent after:transition-[width] after:duration-200 hover:after:w-full focus-visible:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:after:transition-none"
                            >
                                {label}
                                {isActiveLink(href) && <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />}
                            </Link>
                        ))}
                    </nav>

                    {/* Icons Actions */}
                    <div className="flex shrink-0 items-center gap-0 sm:gap-2 lg:gap-4 text-white relative z-50">
                        
                        {/* Search Icon Trigger */}
                        <button 
                            ref={searchTriggerRef}
                            type="button"
                            onClick={() => { setSearchOpen(!searchOpen); setMobileMenuOpen(false); }}
                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
                            aria-label="Search the shop"
                            aria-expanded={searchOpen}
                            aria-controls={searchOpen ? "header-search-panel" : undefined}
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Cart Shopping Bag Link */}
                        <Link 
                            href="/cart"
                            className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            aria-label={`View cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && <span aria-hidden="true" className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold leading-none text-secondary">{cartCount > 99 ? "99+" : cartCount}</span>}
                        </Link>

                        {/* Mobile Hamburguer Menu Trigger */}
                        <button 
                            ref={mobileMenuTriggerRef}
                            type="button"
                            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setSearchOpen(false); }}
                            className="flex h-11 w-11 items-center justify-center rounded-xl md:hidden hover:bg-white/10 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
                            aria-label="Open navigation menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls={mobileMenuOpen ? "mobile-navigation-panel" : undefined}
                            aria-haspopup="dialog"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                    </div>
                </div>

                {/* Keep search inside a compact panel below the navigation. */}
                {searchOpen && (
                    <>
                        <div ref={searchBackdropRef} aria-hidden="true" className="fixed inset-0 z-10 bg-slate-950/35 backdrop-blur-[3px]" />
                        <div className="absolute left-0 top-full z-30 mt-3 w-full px-4 md:px-8">
                            <div ref={searchPanelRef} id="header-search-panel" onBlurCapture={event => { if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && !searchTriggerRef.current?.contains(event.relatedTarget)) setSearchOpen(false) }} className="mx-auto max-h-[calc(100dvh-96px)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4 text-secondary shadow-[0_20px_60px_-16px_rgba(15,23,42,0.3)] sm:p-5 md:max-h-[calc(100dvh-112px)]">
                                <div className="mb-4 flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <label htmlFor="header-search-input" className="block text-lg font-bold tracking-tight">Find something they&apos;ll love</label>
                                        <p id="header-search-description" className="mt-1 text-sm leading-relaxed text-slate-500">Search food, treats, toys, and more.</p>
                                    </div>
                                    <button type="button" onClick={() => { setSearchOpen(false); searchTriggerRef.current?.focus() }} aria-label="Close search" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><X aria-hidden="true" className="h-5 w-5" /></button>
                                </div>
                                <form role="search" aria-label="Search shop products" onSubmit={handleSearchSubmit} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 transition-colors focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/15">
                                    <Search aria-hidden="true" className="ml-2 h-5 w-5 shrink-0 text-slate-400" />
                                    <input ref={searchInputRef} id="header-search-input" aria-describedby="header-search-description" name="query" type="search" enterKeyHint="search" autoComplete="off" placeholder="Search products..." value={searchQuery} onChange={event => setSearchQuery(event.target.value)} className="h-11 min-w-0 flex-1 bg-transparent text-base text-secondary placeholder:text-slate-400 focus:outline-none" />
                                    <button type="submit" disabled={!searchQuery.trim()} aria-label="Search products" className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-white transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-40"><span className="hidden sm:inline">Search</span><ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
                                </form>
                                <div className="mt-2 flex justify-end">
                                    <Link href="/shop" onClick={() => { setSearchOpen(false); setSearchQuery("") }} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-semibold text-[#B93800] hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Browse all products<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>

            {/* Mobile Navigation Panel Drawer */}
            {mobileMenuOpen && (
                <div ref={mobileMenuRef} id="mobile-navigation-panel" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-[60] flex h-dvh flex-col overflow-y-auto overscroll-contain bg-secondary px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-white sm:px-6">
                    <div className="flex shrink-0 items-center justify-between gap-2">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded text-xl font-black tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">PET SHOP</Link>
                        <div className="flex items-center">
                            <button type="button" aria-label="Search the shop" onClick={() => { setMobileMenuOpen(false); setSearchOpen(true) }} className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"><Search aria-hidden="true" className="h-5 w-5" /></button>
                            <Link href="/cart" onClick={() => setMobileMenuOpen(false)} aria-label={`View cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`} className="relative flex h-11 w-11 items-center justify-center rounded-xl hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">
                                <ShoppingBag aria-hidden="true" className="h-5 w-5" />
                                {cartCount > 0 && <span aria-hidden="true" className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold leading-none text-secondary">{cartCount > 99 ? "99+" : cartCount}</span>}
                            </Link>
                            <button type="button" aria-label="Close navigation menu" onClick={() => { restoreMobileFocusRef.current = true; setMobileMenuOpen(false) }} className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"><X aria-hidden="true" className="h-6 w-6" /></button>
                        </div>
                    </div>
                    <nav aria-label="Mobile navigation" className="my-6 flex shrink-0 flex-col gap-1 text-xl font-bold">
                        {NAV_LINKS.map(({ href, mobileLabel }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileMenuOpen(false)}
                                aria-current={isActiveLink(href) ? (pathname === href ? "page" : "location") : undefined}
                                className={`flex min-h-13 items-center justify-between gap-3 rounded-xl px-4 transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none ${isActiveLink(href) ? "bg-white/10 text-accent" : "text-white/90"}`}
                            >
                                {mobileLabel}
                                {isActiveLink(href) ? <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" /> : <ArrowRight aria-hidden="true" className="h-4 w-4 text-white/35" />}
                            </Link>
                        ))}
                    </nav>

                </div>
            )}

        </>
    )
}
