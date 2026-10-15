"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Clock, HeartHandshake, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const CONTACT_EMAIL = "hello@petshop.com"
const CONTACT_DETAILS = [
    { id: "phone", icon: Phone, title: "Give us a call", text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { id: "email", icon: Mail, title: "Drop us an email", text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { id: "address", icon: MapPin, title: "Find us here", text: "123 Paw Print Lane, Animal City, AC 45678", href: undefined },
    { id: "hours", icon: Clock, title: "Opening hours", text: "Mon?Sun: 8:00 AM?8:00 PM", href: undefined },
]
const SUBJECTS = ["General inquiry", "Products & orders", "Veterinary care", "Pet pharmacy", "Grooming & spa", "Diet & nutrition", "Daycare & boarding"]
const EMPTY_FORM = { name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" }
const fieldClass = "block min-h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-3 text-base text-secondary placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-sm"
const labelClass = "block text-sm font-semibold text-secondary"
const contactCardClass = "flex min-w-0 items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4"

export default function ContactPage() {
    const [formData, setFormData] = useState(EMPTY_FORM)
    const [draftReady, setDraftReady] = useState(false)
    const [formError, setFormError] = useState("")

    const updateField = (field: keyof typeof EMPTY_FORM, value: string) => {
        setFormData(current => ({ ...current, [field]: value }))
        setDraftReady(false)
        setFormError("")
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formData.name.trim() || !formData.message.trim()) {
            setFormError("Please add your name and a message before preparing your email.")
            const field = event.currentTarget.elements.namedItem(!formData.name.trim() ? "name" : "message") as HTMLInputElement | HTMLTextAreaElement | null
            field?.focus()
            return
        }
        const body = [
            `Name: ${formData.name.trim()}`,
            `Email: ${formData.email.trim()}`,
            `Phone: ${formData.phone.trim() || "Not provided"}`,
            `Subject: ${formData.subject}`,
            "",
            formData.message.trim(),
        ].join("\n")
        const subject = `Pet Shop inquiry: ${formData.subject}`
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setFormError("")
        setDraftReady(true)
    }

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />

            <section aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-primary pb-10 pt-28 text-white md:pb-12" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[32px] border-white/[0.04]" />
                <div className="container relative mx-auto px-4 text-center md:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/90 md:text-sm">
                        <Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Home</Link>
                        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                        <span aria-current="page">Contact</span>
                    </nav>
                    <h1 id="contact-title" className="text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em]">Say hello to<br /><span className="text-secondary">our care team.</span></h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">Questions about food, care, or your next visit? We&apos;re happy to help you and your best friend.</p>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <a href="tel:+15551234567" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-secondary px-4 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"><Phone aria-hidden="true" className="h-4 w-4" />Call our team</a>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/40 px-4 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"><Mail aria-hidden="true" className="h-4 w-4" />Email us</a>
                    </div>
                </div>
            </section>

            <section aria-labelledby="contact-help-title" className="flex-1 bg-[#fffaf3]/60 py-10 md:py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-7 max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B93800] md:text-sm">Get in touch</p>
                        <h2 id="contact-help-title" className="mt-3 text-[32px] font-black leading-tight tracking-tight text-secondary md:text-4xl">How can we help?</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">Tell us what is on your mind. We can help you find the right product, service, or next step.</p>
                    </div>
                    <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                        <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-5 shadow-[0_8px_32px_-20px_rgba(15,23,42,0.2)] md:p-7">
                            <div className="mb-5 flex items-start gap-3">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#B93800]"><MessageSquare aria-hidden="true" className="h-5 w-5" /></span>
                                <div className="min-w-0"><h3 id="contact-form-title" className="text-xl font-bold tracking-tight text-secondary md:text-2xl">Write to our team</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">A few details will help us point you in the right direction.</p></div>
                            </div>
                            <form aria-labelledby="contact-form-title" aria-describedby="contact-form-note" onSubmit={handleSubmit} onReset={() => { setFormData(EMPTY_FORM); setDraftReady(false); setFormError("") }} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="min-w-0 space-y-2">
                                        <label htmlFor="contact-name" className={labelClass}>Your name <span aria-hidden="true" className="text-[#B93800]">*</span></label>
                                        <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} value={formData.name} onChange={event => updateField("name", event.target.value)} placeholder="Your name" className={fieldClass} />
                                    </div>
                                    <div className="min-w-0 space-y-2">
                                        <label htmlFor="contact-email" className={labelClass}>Email address <span aria-hidden="true" className="text-[#B93800]">*</span></label>
                                        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={event => updateField("email", event.target.value)} placeholder="you@example.com" className={fieldClass} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="min-w-0 space-y-2">
                                        <label htmlFor="contact-phone" className={labelClass}>Phone number <span className="text-xs font-normal text-slate-500">(optional)</span></label>
                                        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={formData.phone} onChange={event => updateField("phone", event.target.value)} placeholder="Your phone number" className={fieldClass} />
                                    </div>
                                    <div className="min-w-0 space-y-2">
                                        <label htmlFor="contact-subject" className={labelClass}>What is it about?</label>
                                        <select id="contact-subject" name="subject" value={formData.subject} onChange={event => updateField("subject", event.target.value)} className={fieldClass}>{SUBJECTS.map(subject => <option key={subject}>{subject}</option>)}</select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-3"><label htmlFor="contact-message" className={labelClass}>Your message <span aria-hidden="true" className="text-[#B93800]">*</span></label><span className="text-xs tabular-nums text-slate-500">{formData.message.length}/2000</span></div>
                                    <textarea id="contact-message" name="message" rows={4} required maxLength={2000} value={formData.message} onChange={event => updateField("message", event.target.value)} placeholder="Tell us a little about your pet and how we can help." className={`${fieldClass} min-h-32 resize-y`} />
                                </div>
                                {formError && <p role="alert" className="text-sm font-semibold text-[#B93800]">{formError}</p>}
                                {draftReady && <div role="status" aria-live="polite" className="flex items-start gap-2 rounded-xl border border-orange-100 bg-[#fffaf3] p-3 text-sm leading-relaxed text-secondary"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B93800]" /><p>Email draft prepared. Review and send it from your email app.</p></div>}
                                <button type="submit" className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:text-base"><Mail aria-hidden="true" className="h-4 w-4" />Open email draft<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" /></button>
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p id="contact-form-note" className="max-w-sm text-xs leading-relaxed text-slate-500">Name, email, and message are required. Your email app opens so you can review and send your message.</p>
                                    <button type="reset" className="min-h-11 shrink-0 rounded-lg px-2 text-sm font-semibold text-slate-600 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Clear form</button>
                                </div>
                            </form>
                        </div>

                        <aside aria-labelledby="contact-details-title" className="min-w-0 space-y-4">
                            <h3 id="contact-details-title" className="text-xl font-bold tracking-tight text-secondary">Other ways to say hello</h3>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                {CONTACT_DETAILS.map(({ id, icon: Icon, title, text, href }) => {
                                    const content = <>
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#B93800] transition-colors group-hover:bg-primary group-hover:text-white group-focus-visible:bg-primary group-focus-visible:text-white"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                        <div className="min-w-0"><h4 className="text-lg font-bold text-secondary">{title}</h4><p className="mt-1 break-words text-sm leading-relaxed text-slate-600">{text}</p></div>
                                    </>
                                    return href
                                        ? <a key={id} href={href} className={`${contactCardClass} group transition-[border-color,box-shadow] hover:border-primary/40 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}>{content}</a>
                                        : <div key={id} className={contactCardClass}>{content}</div>
                                })}
                            </div>
                            <div className="rounded-3xl border border-orange-100 bg-[#fffaf3] p-5">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-secondary"><HeartHandshake aria-hidden="true" className="h-5 w-5" /></span>
                                <h3 className="mt-3 text-lg font-bold text-secondary">Looking for a little extra care?</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">Explore grooming, veterinary support, nutrition, and more before you get in touch.</p>
                                <Link href="/services" className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#B93800] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Explore our services<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" /></Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
