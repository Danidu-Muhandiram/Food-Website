"use client"

import Link from "next/link"
import { Search, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full pt-4 md:pt-6">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                        PET SHOP
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 text-white">
                    <button className="hidden md:flex hover:text-white/80 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    <button className="relative hover:text-white/80 transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                            2
                        </span>
                    </button>

                    <button className="hidden md:flex hover:text-white/80 transition-colors">
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    )
}
