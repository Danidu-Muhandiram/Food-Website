"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
    Search, 
    ShoppingBag, 
    User, 
    Menu, 
    X, 
    Sparkles, 
    LogOut,
    Settings,
    History,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    const [authOpen, setAuthOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<"login" | "signup">("login")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Form inputs state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [petName, setPetName] = useState("")

    // Search query state
    const [searchQuery, setSearchQuery] = useState("")
    const searchTriggerRef = useRef<HTMLButtonElement>(null)
    const searchPanelRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchBackdropRef = useRef<HTMLDivElement>(null)

    // ESC key listener to close auth modal or search bar
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setAuthModalOpen(false)
                setSearchOpen(false)
                if (searchOpen) searchTriggerRef.current?.focus()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [searchOpen])

    useEffect(() => {
        if (!searchOpen) return
        searchInputRef.current?.focus()
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

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
            document.body.style.overflow = previousOverflow
        }
    }, [searchOpen])

    // Handlers
    const handleAuthSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthModalOpen(false)
        setEmail("")
        setPassword("")
        setPetName("")
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setAuthOpen(false)
    }

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
            <header className="absolute top-0 left-0 z-50 w-full pt-4 md:pt-6">
                <div className="container relative z-20 mx-auto px-4 md:px-8 flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight hover:text-accent transition-colors">
                            PET SHOP
                        </div>
                    </Link>

                    {/* Desktop navigation */}
                    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-white/90 text-sm font-bold">
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
                    <div className="flex items-center gap-1 sm:gap-3 md:gap-5 text-white relative z-50">
                        
                        {/* Search Icon Trigger */}
                        <button 
                            ref={searchTriggerRef}
                            type="button"
                            onClick={() => { setSearchOpen(!searchOpen); setMobileMenuOpen(false); setAuthOpen(false); }}
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

                        {/* Account User Trigger */}
                        <div className="relative">
                            <button 
                                onClick={() => { setAuthOpen(!authOpen); setMobileMenuOpen(false); setSearchOpen(false); }}
                                className="hover:text-accent transition-colors p-2 focus:outline-none flex items-center gap-1.5 cursor-pointer"
                                aria-label="Toggle User Settings"
                            >
                                <User className="w-5 h-5" />
                                {isLoggedIn && (
                                    <span className="hidden lg:inline text-xs font-bold text-white bg-white/10 px-2 py-0.5 rounded-full border border-white/25">
                                        Parent
                                    </span>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {authOpen && (
                                <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white text-secondary p-2 shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {isLoggedIn ? (
                                        <div className="space-y-1">
                                            <div className="px-3 py-2 border-b border-slate-50">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Logged In</p>
                                                <p className="text-sm font-black text-secondary truncate">Pet Lover</p>
                                            </div>
                                            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-left cursor-pointer">
                                                <Settings className="w-4 h-4" />
                                                <span>My Account</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-left cursor-pointer">
                                                <History className="w-4 h-4" />
                                                <span>My Orders</span>
                                            </button>
                                            <div className="border-t border-slate-50 my-1"></div>
                                            <button 
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors text-left cursor-pointer"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                <span>Sign Out</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            <button 
                                                onClick={() => { setAuthModalOpen(true); setAuthMode("login"); setAuthOpen(false); }}
                                                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-black text-secondary hover:bg-slate-50 hover:text-primary transition-all cursor-pointer"
                                            >
                                                Sign In
                                            </button>
                                            <button 
                                                onClick={() => { setAuthModalOpen(true); setAuthMode("signup"); setAuthOpen(false); }}
                                                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-black text-white bg-primary hover:bg-primary/90 transition-all shadow-md cursor-pointer"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile Hamburguer Menu Trigger */}
                        <button 
                            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setAuthOpen(false); setSearchOpen(false); }}
                            className="md:hidden hover:text-accent transition-colors p-2 focus:outline-none cursor-pointer"
                            aria-label="Toggle Mobile Menu"
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
                <div className="fixed inset-0 z-40 bg-secondary pt-24 px-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
                    <nav aria-label="Mobile navigation" className="flex flex-col gap-6 text-white text-2xl font-black">
                        {NAV_LINKS.map(({ href, mobileLabel }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileMenuOpen(false)}
                                aria-current={isActiveLink(href) ? (pathname === href ? "page" : "location") : undefined}
                                className="inline-flex min-h-11 items-center gap-3 self-start transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
                            >
                                {mobileLabel}
                                {isActiveLink(href) && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />}
                            </Link>
                        ))}
                    </nav>

                    <div className="pb-12 space-y-6">
                        <div className="border-t border-white/10 pt-6">
                            {isLoggedIn ? (
                                <button 
                                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                                    className="w-full h-12 bg-red-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </button>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <Button 
                                        onClick={() => { setAuthModalOpen(true); setAuthMode("login"); setMobileMenuOpen(false); }}
                                        variant="outline" 
                                        className="h-12 border-white/20 text-white hover:bg-white/10 rounded-2xl font-bold"
                                    >
                                        Sign In
                                    </Button>
                                    <Button 
                                        onClick={() => { setAuthModalOpen(true); setAuthMode("signup"); setMobileMenuOpen(false); }}
                                        className="h-12 bg-primary text-white hover:bg-primary/90 rounded-2xl font-bold shadow-md"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Auth Modal Overlay */}
            {authModalOpen && (
                <>
                    <div 
                        onClick={() => setAuthModalOpen(false)}
                        className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm"
                    ></div>
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white text-secondary rounded-[2.5rem] border border-slate-100 shadow-2xl p-8 md:p-10 animate-in zoom-in-95 duration-200">
                        <button 
                            onClick={() => setAuthModalOpen(false)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-secondary transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <form onSubmit={handleAuthSubmit} className="space-y-6">
                            
                            {/* Modal Header */}
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black text-secondary flex items-center gap-2">
                                    <Sparkles className="w-7 h-7 text-primary" />
                                    <span>{authMode === "login" ? "Welcome Back" : "Join the Pack"}</span>
                                </h3>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    {authMode === "login" 
                                        ? "Sign in to manage recipes, vet appointments, and orders." 
                                        : "Create an account to begin custom nutrition tracking."
                                    }
                                </p>
                            </div>

                            {/* Form Inputs */}
                            <div className="space-y-4">
                                {authMode === "signup" && (
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Pet&apos;s Name</label>
                                        <Input 
                                            required
                                            type="text" 
                                            placeholder="Max or Bella"
                                            value={petName}
                                            onChange={(e) => setPetName(e.target.value)}
                                        />
                                    </div>
                                )}

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                    <Input 
                                        required
                                        type="email" 
                                        placeholder="parent@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
                                    <Input 
                                        required
                                        type="password" 
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                {authMode === "login" ? "Sign In" : "Register Account"}
                            </Button>

                            {/* Toggle Signin / Signup */}
                            <div className="text-center text-xs font-medium text-slate-500 pt-2">
                                {authMode === "login" ? (
                                    <span>
                                        Don&apos;t have an account?{" "}
                                        <button 
                                            type="button"
                                            onClick={() => setAuthMode("signup")}
                                            className="text-primary font-bold hover:underline cursor-pointer"
                                        >
                                            Sign Up
                                        </button>
                                    </span>
                                ) : (
                                    <span>
                                        Already have an account?{" "}
                                        <button 
                                            type="button"
                                            onClick={() => setAuthMode("login")}
                                            className="text-primary font-bold hover:underline cursor-pointer"
                                        >
                                            Sign In
                                        </button>
                                    </span>
                                )}
                            </div>

                        </form>
                    </div>
                </>
            )}
        </>
    )
}
