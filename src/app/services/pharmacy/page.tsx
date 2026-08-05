"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Pill, Check, FileText, ArrowLeft, Star } from "lucide-react"

const PACKAGES = [
    {
        name: "Flea & Tick Defense",
        price: 19,
        period: "per month",
        description: "Monthly topical or chewable treatments protecting against fleas, ticks, and heartworms.",
        features: [
            "Premium branded chewables",
            "Topical applications",
            "Automatic monthly dispatch",
            "Dosage adjustment support",
            "Free shipping included"
        ]
    },
    {
        name: "Standard Health Shield",
        price: 39,
        period: "per month",
        description: "Comprehensive daily vitamins, digestive enzymes, and essential immune boosters.",
        features: [
            "Daily multivitamin chews",
            "Probiotics for digestion",
            "Omega-3 joint supplements",
            "Coat shines & oils pack",
            "10% off custom orders"
        ],
        popular: true
    },
    {
        name: "Custom Prescription Rx",
        price: 59,
        period: "starting at",
        description: "Direct fulfillment of prescription medications coordinated with your vet.",
        features: [
            "FDA-approved medications",
            "Direct coordination with vet",
            "Compounded medication flavors",
            "Express home delivery",
            "Refill reminder texts"
        ]
    }
]

const FAQS = [
    {
        q: "Do you require a physical prescription to order medications?",
        a: "Yes, for any prescription-only medications (Rx), we require a valid prescription. You can either upload a copy, or we can contact your veterinarian directly to verify and approve the order."
    },
    {
        q: "Can I cancel or pause my monthly preventative subscriptions?",
        a: "Absolutely! There are no lock-in contracts. You can pause, skip, or cancel your Flea & Tick or Health Shield subscriptions at any time directly through your user panel."
    },
    {
        q: "How fast does delivery take for pharmacy orders?",
        a: "Preventative subscriptions are shipped via standard mail (2-4 business days). Custom prescriptions offer an express delivery option (next-day delivery) if finalized before 2 PM."
    }
]

export default function PharmacyPage() {
    const [orderSubmitted, setOrderSubmitted] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        ownerName: "",
        email: "",
        petName: "",
        medType: "Preventative Subscription",
        rxFile: "",
        notes: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setOrderSubmitted(true)
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
                        <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg">
                            <Pill className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">HEALTHCARE & MEDICINE</span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Pet Pharmacy</h1>
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
                                <h2 className="text-3xl font-black text-secondary">Verified prescription fulfillment and supplements</h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    We make managing your pet's wellness medications simple. Our certified pharmacy works in direct partnership with leading animal health brands and local veterinarians to deliver correct dosages right to your doorstep.
                                </p>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Whether it's monthly flea and tick prevention or chronic condition medicines, we carry premium FDA-approved pharmaceuticals and offer customized compounding (chicken, beef, or fish flavors) to make medicine time enjoyable.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "100% FDA-approved medications",
                                    "Direct veterinarian verification",
                                    "Compounded flavor-added chews",
                                    "Autopilot monthly dispatch"
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
                                <h3 className="text-2xl font-black text-secondary">Healthcare Shield Plans</h3>
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

                        {/* Order Form Panel */}
                        <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                            {orderSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-secondary">Request Submitted!</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        Thank you, {formData.ownerName}. We have received your order request for {formData.petName}. Our pharmacist will contact your vet to verify the prescription details and email you ({formData.email}) with billing details.
                                    </p>
                                    <Button 
                                        onClick={() => setOrderSubmitted(false)}
                                        className="bg-primary hover:bg-primary/95 text-white font-bold h-10 px-6 rounded-full"
                                    >
                                        Place Another Order
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                                            <FileText className="w-6 h-6 text-primary" />
                                            <span>Order Medicine</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            Fill in the details below. For custom Rx plans, we will verify prescription details directly with your veterinarian clinic.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Owner Name</label>
                                            <Input 
                                                required
                                                type="text" 
                                                placeholder="Jane Doe"
                                                value={formData.ownerName}
                                                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                            <Input 
                                                required
                                                type="email" 
                                                placeholder="jane@example.com"
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
                                                    placeholder="Bella"
                                                    value={formData.petName}
                                                    onChange={(e) => setFormData({...formData, petName: e.target.value})}
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Medication Type</label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                                    value={formData.medType}
                                                    onChange={(e) => setFormData({...formData, medType: e.target.value})}
                                                >
                                                    <option>Preventative Subscription</option>
                                                    <option>Standard Health Shield</option>
                                                    <option>Custom Prescription (Rx)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Vet Clinic & Doctor Name</label>
                                            <Input 
                                                required
                                                type="text" 
                                                placeholder="E.g., Animal Clinic, Dr. Smith"
                                                value={formData.rxFile}
                                                onChange={(e) => setFormData({...formData, rxFile: e.target.value})}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Dosage instructions or notes</label>
                                            <textarea 
                                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 min-h-[80px]"
                                                placeholder="List medicine names, frequency, or pill sizes..."
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                        Request Order
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
