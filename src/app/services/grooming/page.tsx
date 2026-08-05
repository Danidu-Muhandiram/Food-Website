"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Scissors, Check, Sparkles, ArrowLeft, Calendar } from "lucide-react"

const PACKAGES = [
    {
        name: "Bath & Brush",
        price: 29,
        period: "per session",
        description: "Essential cleaning, deodorizing bath, blow dry, and full coat brushing.",
        features: [
            "Premium shampoo & conditioning",
            "Full blow dry & brushout",
            "Ear cleaning & ear wiping",
            "Nail trimming",
            "Scented finishing spray"
        ]
    },
    {
        name: "Full Style Grooming",
        price: 59,
        period: "per session",
        description: "Custom breed haircutting, full styled trim, sanitary cleaning, and standard bath.",
        features: [
            "Everything in Bath & Brush",
            "Breed-specific haircut or shave",
            "Sanitary trim & paw pads",
            "Nail grinding (smooth finish)",
            "Gland expression (optional)"
        ],
        popular: true
    },
    {
        name: "Luxury Spa Experience",
        price: 89,
        period: "per session",
        description: "All-inclusive pampering with skin treatments, teeth cleaning, and premium oils.",
        features: [
            "Everything in Full Style",
            "Oatmeal/hypoallergenic wash",
            "Blueberry facial scrub",
            "Teeth brushing & fresh gel",
            "De-shedding deep treatment",
            "Paw balm application"
        ]
    }
]

const FAQS = [
    {
        q: "How long does a standard grooming session take?",
        a: "A standard Bath & Brush takes about 1.5 to 2 hours. A Full Style or Spa package usually takes 2.5 to 3.5 hours depending on your pet's coat condition and size."
    },
    {
        q: "What shampoos do you use? My pet has sensitive skin.",
        a: "We only use organic, soap-free, and hypoallergenic shampoos. Our Luxury Spa package includes oatmeal and blueberry treatments specifically formulated for dry, itchy, or sensitive skin."
    },
    {
        q: "Can I stay and watch my pet during grooming?",
        a: "For safety and comfort, we usually advise owners to drop off their pets. Pets tend to wiggle or get overly excited when they see their owners, which makes detailed trimming and nail clipping more difficult."
    }
]

export default function GroomingPage() {
    const [bookingSubmitted, setBookingSubmitted] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        ownerName: "",
        email: "",
        petName: "",
        groomType: "Full Style Grooming",
        date: "",
        notes: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setBookingSubmitted(true)
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Hero */}
            <section className="relative bg-secondary text-white pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10 space-y-4">
                    <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-bold">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to all services</span>
                    </Link>
                    
                    <div className="flex items-center gap-4 pt-4">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                            <Scissors className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">HYGIENE & BEAUTY SPA</span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Grooming & Spa</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details & Booking */}
            <section className="py-20 bg-orange-50/20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Details Panel */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-secondary">Treat your companion to a soothing spa day</h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Regular grooming is vital for your pet's physical health and mental comfort. Coat matting, overgrown nails, and dental plaque build-up can lead to skin infections and joint pain. Our grooming center provides stress-free, professional styling and cleansing treatments.
                                </p>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Our stylists are trained in breed-specific haircuts, safe handling methods, and checking for signs of skin irritations. We make sure every session feels like a relaxing bath and style retreat.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Organic, pH-balanced dog/cat shampoos",
                                    "Clean, sanitized, open grooming zones",
                                    "Stress-free handling & warm blow dries",
                                    "Free ear, nail, and skin checks"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-800 text-sm font-bold">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing Packages */}
                            <div className="space-y-6 pt-6">
                                <h3 className="text-2xl font-black text-secondary">Spa Packages & Pricing</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {PACKAGES.map((pkg, i) => (
                                        <div 
                                            key={i} 
                                            className={`bg-white p-6 rounded-3xl border shadow-sm space-y-4 relative flex flex-col justify-between
                                                ${pkg.popular ? 'border-primary shadow-md shadow-orange-500/5' : 'border-slate-100'}
                                            `}
                                        >
                                            {pkg.popular && (
                                                <span className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                    Popular
                                                </span>
                                            )}
                                            <div className="space-y-2">
                                                <h4 className="font-bold text-secondary text-base leading-tight">{pkg.name}</h4>
                                                <div className="flex items-baseline gap-1 text-primary">
                                                    <span className="text-3xl font-black">${pkg.price}</span>
                                                    <span className="text-xs text-slate-400 font-bold">{pkg.period}</span>
                                                </div>
                                                <p className="text-slate-500 text-xs leading-relaxed">{pkg.description}</p>
                                            </div>

                                            <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 flex-1">
                                                {pkg.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Form Panel */}
                        <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                            {bookingSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-secondary">Spa Day Booked!</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        Thank you, {formData.ownerName}. We have reserved a tentative grooming slot for {formData.petName} on {formData.date}. We will email you ({formData.email}) with slot confirmations.
                                    </p>
                                    <Button 
                                        onClick={() => setBookingSubmitted(false)}
                                        className="bg-primary hover:bg-primary/95 text-white font-bold h-10 px-6 rounded-full"
                                    >
                                        Book Another Session
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                                            <Calendar className="w-6 h-6 text-primary" />
                                            <span>Book Spa Slot</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            Select a package and date below. We will confirm your exact appointment hour shortly.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Owner Name</label>
                                            <Input 
                                                required
                                                type="text" 
                                                placeholder="Robert White"
                                                value={formData.ownerName}
                                                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                            <Input 
                                                required
                                                type="email" 
                                                placeholder="robert@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Pet Name</label>
                                                <Input 
                                                    required
                                                    type="text" 
                                                    placeholder="Charlie"
                                                    value={formData.petName}
                                                    onChange={(e) => setFormData({...formData, petName: e.target.value})}
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Spa Service</label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                                    value={formData.groomType}
                                                    onChange={(e) => setFormData({...formData, groomType: e.target.value})}
                                                >
                                                    <option>Bath & Brush ($29)</option>
                                                    <option>Full Style Grooming ($59)</option>
                                                    <option>Luxury Spa Experience ($89)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Booking Date</label>
                                            <Input 
                                                required
                                                type="date" 
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Style details or pet sensitivity</label>
                                            <textarea 
                                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 min-h-[80px]"
                                                placeholder="E.g., Teddy bear face cut, sensitive tail, afraid of blow dryers..."
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                        Confirm Spa Booking
                                    </Button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">FAQ</h2>
                        <h3 className="text-3xl font-black text-secondary">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-[#F8F8F8] rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-secondary text-base md:text-lg hover:text-primary transition-colors focus:outline-none"
                                >
                                    <span>{faq.q}</span>
                                    <span className="text-xl font-black text-primary ml-4">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </button>
                                
                                {activeFaq === index && (
                                    <div className="px-6 pb-6 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in slide-in-from-top-4 duration-300">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
