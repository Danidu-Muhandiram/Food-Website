"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    
                    {/* Column 1: Brand Section */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <div className="text-2xl font-black tracking-tight text-white hover:text-primary transition-colors">
                                PET SHOP
                            </div>
                        </Link>
                        <p className="text-white/70 text-xs leading-relaxed">
                            Your trusted partner in providing premium nutrition, medical care, and ultimate happiness for your beloved companions.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black text-white relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-2 text-xs text-white/70">
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
                            <li>
                                <Link href="/contact" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black text-white relative inline-block">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-2 text-xs text-white/70">
                            <li>
                                <Link href="/services/vet-care" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Veterinary Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/pharmacy" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Pet Pharmacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/grooming" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Grooming & Spa
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/nutrition" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Diet Nutrition
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/boarding" className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                                    Daycare & Boarding
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black text-white relative inline-block">
                            Contact Info
                            <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-3 text-xs text-white/70">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>123 Paw Print Lane, Animal City</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>hello@petshop.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Newsletter Subscription */}
                    <div className="space-y-4 lg:col-span-1">
                        <h4 className="text-sm font-black text-white relative inline-block">
                            Subscribe
                            <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-primary"></span>
                        </h4>
                        <p className="text-white/70 text-xs leading-relaxed">
                            Get latest updates, deals, and care tips.
                        </p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter email" 
                                className="w-full h-9 px-3 rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/20 text-xs focus:outline-none focus:border-accent"
                                required
                            />
                            <button 
                                type="submit" 
                                className="w-full h-9 bg-primary hover:bg-primary/95 text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-all shadow-md cursor-pointer"
                            >
                                Subscribe
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
