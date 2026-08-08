"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { 
    Search, 
    ShoppingBag, 
    User, 
    Menu, 
    X, 
    Lock, 
    Sparkles, 
    LogOut,
    Settings,
    History
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
    const router = useRouter()

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

    // ESC key listener to close auth modal or search bar
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setAuthModalOpen(false)
                setSearchOpen(false)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

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
                <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="text-white text-2xl md:text-3xl font-black tracking-tight hover:text-accent transition-colors">
                            PET SHOP
                        </div>
                    </Link>

                    {/* Desktop Navigation (No Contact Link) */}
                    <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm font-bold">
                        <Link href="/" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
                            About Us
                        </Link>
                        <Link href="/shop" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
                            Shop
                        </Link>
                        <Link href="/services" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
                            Contact
                        </Link>
                    </nav>

                    {/* Icons Actions */}
                    <div className="flex items-center gap-3 md:gap-5 text-white relative z-50">
                        
                        {/* Search Icon Trigger */}
                        <button 
                            onClick={() => { setSearchOpen(!searchOpen); setMobileMenuOpen(false); setAuthOpen(false); }}
                            className="hover:text-accent transition-colors p-2 focus:outline-none cursor-pointer"
                            aria-label="Toggle Search Bar"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Cart Shopping Bag Link */}
                        <Link 
                            href="/cart"
                            className="relative text-white hover:text-accent transition-colors p-2 focus:outline-none flex items-center justify-center cursor-pointer"
                            aria-label="View Cart"
                        >
                            <ShoppingBag className="w-5 h-5" />
                        </Link>

                        {/* Account User Trigger */}
                        <div className="relative">
                            <button 
                                onClick={() => { setAuthOpen(!authOpen); setMobileMenuOpen(false); }}
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
                            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setAuthOpen(false); }}
                            className="md:hidden hover:text-accent transition-colors p-2 focus:outline-none cursor-pointer"
                            aria-label="Toggle Mobile Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                    </div>
                </div>

                {/* Normal Search Bar Overlay (Slides down without lists) */}
                {searchOpen && (
                    <div className="absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-md border-y border-white/10 p-4 animate-in slide-in-from-top-4 duration-300">
                        <form onSubmit={handleSearchSubmit} className="container mx-auto px-4 md:px-8 max-w-2xl relative">
                            <input 
                                type="text"
                                placeholder="Search our premium foods and accessories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-2xl pl-12 pr-12 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                                autoFocus
                            />
                            <Search className="absolute left-7 top-4 text-white/50 w-5 h-5" />
                            <button 
                                type="button" 
                                onClick={() => setSearchOpen(false)}
                                className="absolute right-7 top-3.5 text-white/50 hover:text-white p-1 cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                )}
            </header>

            {/* Mobile Navigation Panel Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-secondary pt-24 px-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
                    <nav className="flex flex-col gap-6 text-white text-2xl font-black">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
                            About Us
                        </Link>
                        <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
                            Shop Products
                        </Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
                            Our Services
                        </Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
                            Contact
                        </Link>
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
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Pet's Name</label>
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
                                        Don't have an account?{" "}
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
