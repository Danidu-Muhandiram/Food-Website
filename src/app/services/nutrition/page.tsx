"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Apple, Check, Star, ArrowLeft, Calendar } from "lucide-react"

const PACKAGES = [
    {
        name: "Initial Consultation",
        price: 45,
        period: "per session",
        description: "One-on-one nutrition analysis, weight analysis, and initial recommendations.",
        features: [
            "60-minute nutritionist video consult",
            "Weight & body mass index score",
            "Dietary allergen checks",
            "Initial recipe suggestions",
            "Follow-up email summary"
        ]
    },
    {
        name: "3-Month Diet Plan",
        price: 119,
        period: "3-month track",
        description: "Structured dietary shifts, weight monitoring, and monthly plan updates.",
        features: [
            "Everything in Initial Consult",
            "Monthly progress assessments",
            "Custom calorie & portion chart",
            "Flea/allergy symptom logging",
            "Text updates with nutritionist"
        ],
        popular: true
    },
    {
        name: "All-Inclusive Raw Guide",
        price: 249,
        period: "full transition",
        description: "Complete raw food transition supervision, supplement list, and health tests.",
        features: [
            "Everything in 3-Month Plan",
            "Safe raw-food conversion steps",
            "Vitamin & mineral analysis",
            "Partner discount on pet foods",
            "Priority booking for emergencies"
        ]
    }
]

const FAQS = [
    {
        q: "What is pet nutrition counseling and how does it help?",
        a: "Just like humans, pets require specific ratios of proteins, fats, fibers, and minerals. Proper meal planning helps reduce allergies, improve coat quality, ease digestive disorders, and manage weight."
    },
    {
        q: "Do you supply the food directly or just the diet plans?",
        a: "We provide in-depth diet guides, raw feed recipes, and calorie charts. You can prepare these yourself or purchase corresponding pre-packaged pet food formulas from our store."
    },
    {
        q: "How do you coordinate with my veterinarian?",
        a: "If your pet has underlying conditions (such as kidney issues or diabetes), our certified nutritionists review their medical records and coordinate with your vet to make sure the diet is safe."
    }
]

export default function NutritionPage() {
    const [bookingSubmitted, setBookingSubmitted] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        ownerName: "",
        email: "",
        petName: "",
        concern: "Weight Management",
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
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                            <Apple className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">DIET & WEIGHT WELLNESS</span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Nutrition Consultation</h1>
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
                                <h2 className="text-3xl font-black text-secondary">Formulate the perfect diet for longevity</h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Nutrition is the foundation of your pet's life. Poor dietary choices can lead to early-onset arthritis, skin allergies, lethargy, and digestive distress. Our certified pet nutritionists create customized calorie and ingredient schedules matching your companion's breed, age, and activity levels.
                                </p>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Whether you want to transition your dog to a safe raw diet, analyze feed allergens, or regulate weight, we provide clear, science-backed guidance to optimize their gut and immune systems.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Licensed pet nutrition specialists",
                                    "Scientifically formulated diets",
                                    "Calorie, fat, and protein analysis",
                                    "Coordinated medical history review"
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
                                <h3 className="text-2xl font-black text-secondary">Dietary Packages & Pricing</h3>
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
                                    <h3 className="text-2xl font-black text-secondary">Consultation Requested!</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        Thank you, {formData.ownerName}. We have queued your consultation request for {formData.petName}. Our nutritionist will email you ({formData.email}) with available schedule slots.
                                    </p>
                                    <Button 
                                        onClick={() => setBookingSubmitted(false)}
                                        className="bg-primary hover:bg-primary/95 text-white font-bold h-10 px-6 rounded-full"
                                    >
                                        Book Another Consult
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                                            <Calendar className="w-6 h-6 text-primary" />
                                            <span>Diet consultation</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            Fill in your pet's dietary profile below. We will coordinate a meeting date shortly.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Owner Name</label>
                                            <Input 
                                                required
                                                type="text" 
                                                placeholder="Emily Watson"
                                                value={formData.ownerName}
                                                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                            <Input 
                                                required
                                                type="email" 
                                                placeholder="emily@example.com"
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
                                                    placeholder="Luna"
                                                    value={formData.petName}
                                                    onChange={(e) => setFormData({...formData, petName: e.target.value})}
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Primary Concern</label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                                    value={formData.concern}
                                                    onChange={(e) => setFormData({...formData, concern: e.target.value})}
                                                >
                                                    <option>Weight Management</option>
                                                    <option>Food Allergies</option>
                                                    <option>Coat & Skin Health</option>
                                                    <option>Raw Diet Transition</option>
                                                    <option>General Meal Planning</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Preferred Start Date</label>
                                            <Input 
                                                required
                                                type="date" 
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Tell us about their current diet</label>
                                            <textarea 
                                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 min-h-[80px]"
                                                placeholder="E.g., eats dry food twice a day, scratches skin frequently, needs to lose 2 lbs..."
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                        Request Diet Consult
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
