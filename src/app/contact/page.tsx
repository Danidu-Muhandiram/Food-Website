"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, Sparkles } from "lucide-react"

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormSubmitted(true)
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Hero */}
            <section className="relative bg-secondary text-white pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-4 animate-in fade-in duration-700">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent text-sm font-bold tracking-wider">
                        <Sparkles className="w-4 h-4 fill-current" />
                        <span>WE ARE HERE FOR YOU</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Contact Our <span className="text-primary relative inline-block">
                            Care Team
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Have a question about diet plans, appointments, or boarding lodging? Let's talk.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-orange-50/20 flex-1">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Left Side: Info & Map Placeholder */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4 text-center lg:text-left">
                                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">CONTACT INFO</h2>
                                <h3 className="text-3xl font-black text-secondary leading-tight">Get in touch with us</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our pet care coordinators respond to messages within 2 hours during normal business hours. Feel free to call us for urgent boarding or veterinary requests.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                {/* Address */}
                                <div className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-primary flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-secondary text-base">Our Location</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">123 Paw Print Lane, Animal City, AC 45678</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-secondary text-base">Phone Support</h4>
                                        <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-secondary text-base">Email Address</h4>
                                        <p className="text-slate-600 text-sm">hello@petshop.com</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-secondary text-base">Opening Hours</h4>
                                        <p className="text-slate-600 text-sm">Mon - Sun: 8:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Panel */}
                        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
                            {formSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md animate-bounce">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-secondary">Message Sent!</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                                        Thank you, {formData.name}. We have received your message regarding "{formData.subject}" and will respond to you at {formData.email} within 2 business hours.
                                    </p>
                                    <Button 
                                        onClick={() => setFormSubmitted(false)}
                                        className="bg-primary hover:bg-primary/95 text-white font-bold h-10 px-6 rounded-full"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                                            <MessageSquare className="w-6 h-6 text-primary" />
                                            <span>Send a Message</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs">
                                            Fill out this form and a care coordinator will contact you shortly.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Name</label>
                                                <Input 
                                                    required
                                                    type="text" 
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
                                                <Input 
                                                    required
                                                    type="email" 
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone Number</label>
                                                <Input 
                                                    type="tel" 
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Subject</label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                >
                                                    <option>General Inquiry</option>
                                                    <option>Veterinary Support</option>
                                                    <option>Boarding Reservation</option>
                                                    <option>Pharmacy Medication</option>
                                                    <option>Diet Consultation</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Message</label>
                                            <textarea 
                                                required
                                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 min-h-[120px]"
                                                placeholder="Write your details here..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98]">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
