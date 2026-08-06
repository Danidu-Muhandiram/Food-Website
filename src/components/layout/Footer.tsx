"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="text-2xl font-black tracking-tight text-white hover:text-primary transition-colors">
                                PET SHOP
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                            Your trusted partner in providing premium nutrition, medical care, and ultimate happiness for your furry, feathered, or scaled companions.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>
                                <Link href="/" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Shop Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Our Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Pet Doctor (Vet Support)
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Pet Pharmacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Expert Nutrition Consultation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Home Visit Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Fast Product Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white mb-2 relative inline-block">
                            Subscribe
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Subscribe to our newsletter to receive the latest updates, special deals, and pet care tips.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full h-10 px-4 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 text-sm focus:outline-none focus:border-accent"
                                required
                            />
                            <button 
                                type="submit" 
                                className="w-full h-10 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl text-xs transition-all shadow-md cursor-pointer"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
                    <p>© {new Date().getFullYear()} Pet Shop. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" /> for pet lovers everywhere
                    </p>
                </div>
            </div>
        </footer>
    )
}
