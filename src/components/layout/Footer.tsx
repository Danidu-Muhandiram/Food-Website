"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Shop Products", href: "/shop" },
    { label: "Our Services", href: "/services" },
    { label: "Contact", href: "/contact" },
]

const SERVICES = [
    { label: "Veterinary Care", href: "/services/vet-care" },
    { label: "Pet Pharmacy", href: "/services/pharmacy" },
    { label: "Grooming & Spa", href: "/services/grooming" },
    { label: "Diet & Nutrition", href: "/services/nutrition" },
    { label: "Daycare & Boarding", href: "/services/boarding" },
]

const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
const linkClass = `inline-block py-1 text-[13px] leading-relaxed text-slate-300 transition-colors hover:text-white hover:underline hover:decoration-primary hover:underline-offset-4 ${focusClass}`
const headingClass = "mb-3 inline-block border-b-2 border-primary pb-1 text-sm font-bold"
const iconLinkClass = `flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white ${focusClass}`

function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get("email") || "").trim()
    const body = `Hi Pet Shop, I'd like to receive your updates, offers, and pet care tips at ${email}.`
    window.location.href = `mailto:hello@petshop.com?subject=Pet%20Shop%20newsletter&body=${encodeURIComponent(body)}`
}

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-secondary text-white">
            <div className="container mx-auto px-4 pb-6 pt-10 md:px-8 md:pt-12">
                <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-5 lg:gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className={`inline-block text-2xl font-black tracking-tight transition-colors hover:text-orange-300 ${focusClass}`}>PET SHOP</Link>
                        <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-300">Your trusted partner in providing premium nutrition, medical care, and ultimate happiness for your beloved companions.</p>
                        <div className="mt-4 flex items-center gap-2">
                            <a href="mailto:hello@petshop.com" aria-label="Email Pet Shop" className={iconLinkClass}><Mail aria-hidden="true" className="h-4 w-4" /></a>
                            <a href="tel:+15551234567" aria-label="Call Pet Shop" className={iconLinkClass}><Phone aria-hidden="true" className="h-4 w-4" /></a>
                            <Link href="/contact" aria-label="Contact Pet Shop" className={iconLinkClass}><MessageCircle aria-hidden="true" className="h-4 w-4" /></Link>
                        </div>
                    </div>

                    <nav aria-labelledby="footer-quick-links">
                        <h2 id="footer-quick-links" className={headingClass}>Quick Links</h2>
                        <ul>
                            {QUICK_LINKS.map(link => <li key={link.href}><Link href={link.href} className={linkClass}>{link.label}</Link></li>)}
                        </ul>
                    </nav>

                    <nav aria-labelledby="footer-services">
                        <h2 id="footer-services" className={headingClass}>Our Services</h2>
                        <ul>
                            {SERVICES.map(link => <li key={link.href}><Link href={link.href} className={linkClass}>{link.label}</Link></li>)}
                        </ul>
                    </nav>

                    <section aria-labelledby="footer-contact" className="col-span-2 sm:col-span-1">
                        <h2 id="footer-contact" className={headingClass}>Contact Info</h2>
                        <address className="space-y-3 text-[13px] not-italic leading-relaxed text-slate-300">
                            <div className="flex items-start gap-2">
                                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <Link href="/contact" className={`hover:text-white ${focusClass}`}>123 Paw Print Lane, Animal City</Link>
                            </div>
                            <a href="tel:+15551234567" className={`flex items-center gap-2 hover:text-white ${focusClass}`}><Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" /><span>+1 (555) 123-4567</span></a>
                            <a href="mailto:hello@petshop.com" className={`flex items-center gap-2 hover:text-white ${focusClass}`}><Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" /><span className="break-all">hello@petshop.com</span></a>
                        </address>
                    </section>

                    <section aria-labelledby="footer-subscribe" className="col-span-2 sm:col-span-1">
                        <h2 id="footer-subscribe" className={headingClass}>Subscribe</h2>
                        <p className="mb-3 text-[13px] leading-relaxed text-slate-300">Get latest updates, deals, and care tips.</p>
                        <form className="space-y-2" onSubmit={handleSubscribe}>
                            <label htmlFor="footer-newsletter-email" className="sr-only">Your email address</label>
                            <input id="footer-newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required className="h-10 w-full rounded-xl border border-white/20 bg-white/5 px-3 text-[13px] text-white placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
                            <button type="submit" className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 text-[13px] font-bold text-secondary transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                Join by email <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
                            </button>
                            <p className="text-xs text-slate-400">Opens a draft in your email app.</p>
                        </form>
                    </section>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} Pet Shop. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">Made with <Heart aria-label="love" role="img" className="h-3.5 w-3.5 fill-primary text-primary" /> for pet lovers everywhere</p>
                </div>
            </div>
        </footer>
    )
}
