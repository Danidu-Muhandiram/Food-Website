"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Home, Check, Star, ArrowLeft, Calendar } from "lucide-react"

const PACKAGES = [
    {
        name: "Daycare Play",
        price: 20,
        period: "per day",
        description: "Full-day supervision, social games, obstacle play, and nap cycles.",
        features: [
            "Supervised group socialization",
            "Indoor & outdoor play arenas",
            "Climbing blocks & toys",
            "Dedicated nap cycles",
            "Live playcam checks"
        ]
    },
    {
        name: "Standard Cabin",
        price: 45,
        period: "per night",
        description: "Safe private cabin lodging, daily feeding schedules, and playtimes.",
        features: [
            "Private climate-controlled cabin",
            "2 outdoor play sessions daily",
            "Individual feeding routines",
            "Cozy bedding & soft blankets",
            "Daily health check report"
        ],
        popular: true
    },
    {
        name: "Luxury Suite",
        price: 75,
        period: "per night",
        description: "All-inclusive private room boarding, webcam tracking, grooming bath, and treats.",
        features: [
            "Private themed luxury suite",
            "4 premium play sessions daily",
            "Live 24/7 web-camera access",
            "Complimentary bath before check-out",
            "Bedtime story & gourmet treats"
        ]
    }
]

const FAQS = [
    {
        q: "What vaccinations are required before checking in my pet?",
        a: "To ensure a safe environment, all dogs must be up to date on Rabies, DHPP, and Bordetella (kennel cough) vaccines. Cats must be current on Rabies and FVRCP."
    },
    {
        q: "Can I bring my pet's regular food and bedding?",
        a: "Yes! We highly recommend bringing your pet's regular food to prevent stomach upsets. You are welcome to bring a favorite toy or small blanket that smells like home as well."
    },
    {
        q: "Are dogs supervised overnight?",
        a: "Yes, our facility is monitored 24/7. We have trained veterinary assistants and caretakers on-site overnight to guarantee security and handle any needs."
    }
]

export default function BoardingPage() {
    const [bookingSubmitted, setBookingSubmitted] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        ownerName: "",
        email: "",
        petName: "",
        lodgeType: "Standard Cabin ($45)",
        startDate: "",
        endDate: "",
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
                        <div className="w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center shadow-lg">
                            <Home className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">SAFE STAY LODGING</span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Daycare & Boarding</h1>
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
                                <h2 className="text-3xl font-black text-secondary">A home away from home for your pet</h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Whether you need overnight boarding for a business trip, long-term vacation care, or simply a safe, engaging environment for your dog to socialize while you are at work, our boarding centers provide complete comfort and safety.
                                </p>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Our suites are climate-controlled, sanitized daily, and staffed by veterinary assistants who check on each pet around the clock. With extensive play zones, structured nap cycles, and gourmet diets, we keep stress low and smiles high.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "24/7 staff supervision on-site",
                                    "Separate dog & cat play spaces",
                                    "Climate-controlled & highly clean rooms",
                                    "Daily webcam checks & text updates"
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
                                <h3 className="text-2xl font-black text-secondary">Lodging Packages & Pricing</h3>
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
                                    <h3 className="text-2xl font-black text-secondary">Reservation Requested!</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        Thank you, {formData.ownerName}. We have received your lodging request for {formData.petName} from {formData.startDate} to {formData.endDate}. We will verify room availability and contact you at {formData.email} to finalize.
                                    </p>
                                    <Button 
                                        onClick={() => setBookingSubmitted(false)}
                                        className="bg-primary hover:bg-primary/95 text-white font-bold h-10 px-6 rounded-full"
                                    >
                                        Request Another Reservation
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                                            <Calendar className="w-6 h-6 text-primary" />
                                            <span>Request Stay</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            Please choose check-in and check-out dates below. We will confirm reservation spaces shortly.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Owner Name</label>
                                            <Input 
                                                required
                                                type="text" 
                                                placeholder="Marcus Aurelius"
                                                value={formData.ownerName}
                                                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                            <Input 
                                                required
                                                type="email" 
                                                placeholder="marcus@example.com"
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
                                                    placeholder="Rocky"
                                                    value={formData.petName}
                                                    onChange={(e) => setFormData({...formData, petName: e.target.value})}
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Lodging Tier</label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                                    value={formData.lodgeType}
                                                    onChange={(e) => setFormData({...formData, lodgeType: e.target.value})}
                                                >
                                                    <option>Daycare Play ($20)</option>
                                                    <option>Standard Cabin ($45)</option>
                                                    <option>Luxury Suite ($75)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Check-in Date</label>
                                                <Input 
                                                    required
                                                    type="date" 
                                                    value={formData.startDate}
                                                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Check-out Date</label>
                                                <Input 
                                                    required
                                                    type="date" 
                                                    value={formData.endDate}
                                                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Special diets, routines, or behaviors</label>
                                            <textarea 
                                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 min-h-[80px]"
                                                placeholder="E.g., eats raw diet at 7 AM, afraid of thunder, needs daily ear drops..."
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                        Submit Lodging Stay
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
