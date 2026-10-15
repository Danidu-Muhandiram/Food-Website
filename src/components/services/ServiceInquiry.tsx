"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Check, Mail, MessageSquare, Phone } from "lucide-react"
import type { CarePackage, ServiceDefinition } from "@/lib/services"

const CONTACT_EMAIL = "hello@petshop.com"
const fieldClass = "block min-h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-3 text-base text-secondary placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-sm"
const labelClass = "block text-sm font-semibold text-secondary"
const eyebrowClass = "text-xs font-bold uppercase tracking-[0.12em] text-[#B93800] md:text-sm"
const headingClass = "mt-3 text-4xl font-black leading-tight tracking-tight text-secondary md:text-[40px]"

function localDate(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
}

function followingDate(value: string) {
    const [year, month, day] = value.split("-").map(Number)
    return localDate(new Date(year, month - 1, day + 1))
}

function packagePrice(option: CarePackage) {
    return option.period === "starting at" ? `from $${option.price}` : `$${option.price} ${option.period}`
}

export function ServiceInquiry({ service }: { service: ServiceDefinition }) {
    const [selectedPackage, setSelectedPackage] = useState("")
    const [draftReady, setDraftReady] = useState(false)
    const [formError, setFormError] = useState("")
    const [formData, setFormData] = useState({ ownerName: "", email: "", petName: "", petType: "Dog", date: "", endDate: "", clinic: "", concern: "General meal planning", notes: "" })
    const needsDate = service.id !== "pharmacy"
    const isBoarding = service.id === "boarding"
    const isDaycare = isBoarding && selectedPackage === "Daycare Play"
    const overnightSelected = isBoarding && !!selectedPackage && !isDaycare
    const selectedOption = service.packages.find(option => option.name === selectedPackage)

    const updateField = (field: keyof typeof formData, value: string) => {
        setFormData(current => ({ ...current, [field]: value }))
        setDraftReady(false)
        setFormError("")
    }

    const choosePackage = (name: string) => {
        setSelectedPackage(name)
        setDraftReady(false)
        setFormError("")
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const invalidField = !formData.ownerName.trim() ? "ownerName" : !formData.email.trim() ? "email" : !formData.petName.trim() ? "petName" : null
        const fail = (message: string, field: string) => {
            setDraftReady(false)
            setFormError(message)
            const control = event.currentTarget.elements.namedItem(field) as HTMLInputElement | null
            control?.focus()
        }
        if (invalidField) {
            fail("Please add your name, email address, and pet’s name before preparing your inquiry.", invalidField)
            return
        }
        if (needsDate && (!formData.date || formData.date < localDate())) {
            fail("Please choose today or a future date for your inquiry.", "date")
            return
        }
        if (isBoarding && !isDaycare && ((overnightSelected && !formData.endDate) || (formData.endDate && formData.endDate <= formData.date))) {
            fail("Please choose a check-out date after your check-in date for an overnight stay.", "endDate")
            return
        }

        const body = [
            `Service: ${service.title}`,
            `Option: ${selectedPackage || "Help me choose"}`,
            ...(selectedOption ? [`Listed price: ${packagePrice(selectedOption)} (please confirm)`] : []),
            `Your name: ${formData.ownerName.trim()}`,
            `Email: ${formData.email.trim()}`,
            `Pet: ${formData.petName.trim()} (${formData.petType})`,
            ...(needsDate ? [`${isBoarding ? "Preferred check-in" : "Preferred date"}: ${formData.date}`] : []),
            ...(isBoarding && !isDaycare && formData.endDate ? [`Preferred check-out: ${formData.endDate}`] : []),
            ...(service.id === "pharmacy" ? [`Veterinary clinic: ${formData.clinic.trim() || "Not provided"}`] : []),
            ...(service.id === "nutrition" ? [`Main question: ${formData.concern}`] : []),
            "", formData.notes.trim() || "Please help me with the next steps.", "",
            "Please confirm availability, the final price, and any requirements. This is an inquiry, not a confirmed booking or order.",
        ].join("\n")
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Pet Shop inquiry: ${service.title}`)}&body=${encodeURIComponent(body)}`
        setFormError("")
        setDraftReady(true)
    }

    return (
        <>
            <section id="service-packages" aria-labelledby="service-packages-title" className="scroll-mt-6 bg-white py-10 md:py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-7 max-w-2xl">
                        <p className={eyebrowClass}>Explore your options</p>
                        <h2 id="service-packages-title" className={headingClass}>Care that fits their routine.</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">Compare what is included, then choose an option to add it to your inquiry. Not sure yet? We can help you choose.</p>
                    </div>
                    <div className="grid items-stretch gap-4 md:grid-cols-3 lg:gap-5">
                        {service.packages.map(option => {
                            const selected = selectedPackage === option.name
                            return (
                                <article key={option.name} className={`flex min-w-0 flex-col rounded-3xl border p-5 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)] md:p-6 ${selected ? "border-primary bg-orange-50/50 ring-1 ring-primary" : option.popular ? "border-[#E5C978] bg-[#FEF9E6]" : "border-stone-200 bg-white"}`}>
                                    <div className="mb-3 flex min-h-6 items-center gap-2">
                                        <span className="text-xs font-bold uppercase tracking-wide text-[#B93800]">{selected ? "Selected for inquiry" : option.popular ? "Featured option" : service.title}</span>
                                        {selected && <Check aria-hidden="true" className="h-4 w-4 text-[#B93800]" />}
                                    </div>
                                    <h3 className="text-xl font-bold leading-snug tracking-tight text-secondary">{option.name}</h3>
                                    <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">{option.period === "starting at" && <span className="text-xs font-medium text-slate-600">From</span>}<span className="text-3xl font-black tracking-tight text-secondary">${option.price}</span>{option.period !== "starting at" && <span className="text-xs font-medium text-slate-600">{option.period}</span>}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{option.description}</p>
                                    <ul className="my-5 space-y-2 border-t border-black/5 pt-4 text-sm leading-relaxed text-slate-600">
                                        {option.features.map(feature => <li key={feature} className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B93800]" /><span>{feature}</span></li>)}
                                    </ul>
                                    <a href="#service-inquiry" onClick={() => choosePackage(option.name)} aria-label={`Ask about ${option.name}`} className={`group mt-auto flex min-h-12 items-center justify-between gap-3 rounded-xl px-4 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${selected || option.popular ? "bg-secondary text-white hover:bg-slate-800" : "border border-orange-200 bg-orange-50 text-[#B93800] hover:bg-primary hover:text-white"}`}><span>{selected ? "Continue inquiry" : "Choose option"}</span><ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" /></a>
                                </article>
                            )
                        })}
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-slate-500">Listed prices and inclusions are subject to confirmation. Ask the team about availability, suitability, and the final cost before arranging a service.</p>
                </div>
            </section>

            <section id="service-inquiry" tabIndex={-1} aria-labelledby="service-inquiry-title" className="scroll-mt-6 bg-[#fffaf3]/60 py-10 focus:outline-none md:py-12">
                <div className="container mx-auto grid items-start gap-7 px-4 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                    <div className="min-w-0 lg:col-span-2">
                        <p className={eyebrowClass}>Let’s take the next step</p>
                        <h2 id="service-inquiry-title" className={headingClass}>{service.inquiryTitle}</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">Share a few details so you can discuss the right care with our team.</p>
                    </div>
                    <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-5 shadow-[0_8px_32px_-20px_rgba(15,23,42,0.2)] md:p-7">
                        <div className="mb-5 flex items-start gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#B93800]"><MessageSquare aria-hidden="true" className="h-5 w-5" /></span><div><h3 id="service-form-title" className="text-xl font-bold tracking-tight text-secondary">Your service inquiry</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">Required fields are marked with an asterisk (*).</p></div></div>
                        <form aria-labelledby="service-form-title" aria-describedby="service-form-note" onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="service-package" className={labelClass}>Package or plan</label>
                                <select id="service-package" name="package" className={fieldClass} value={selectedPackage} onChange={event => choosePackage(event.target.value)}><option value="">Help me choose</option>{service.packages.map(option => <option key={option.name} value={option.name}>{option.name} — {packagePrice(option)}</option>)}</select>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="min-w-0 space-y-2"><label htmlFor="service-owner-name" className={labelClass}>Your name <span aria-hidden="true">*</span></label><input id="service-owner-name" name="ownerName" type="text" autoComplete="name" required maxLength={100} value={formData.ownerName} onChange={event => updateField("ownerName", event.target.value)} placeholder="Your name" className={fieldClass} /></div>
                                <div className="min-w-0 space-y-2"><label htmlFor="service-email" className={labelClass}>Email address <span aria-hidden="true">*</span></label><input id="service-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={event => updateField("email", event.target.value)} placeholder="you@example.com" className={fieldClass} /></div>
                                <div className="min-w-0 space-y-2"><label htmlFor="service-pet-name" className={labelClass}>Pet’s name <span aria-hidden="true">*</span></label><input id="service-pet-name" name="petName" type="text" required maxLength={100} value={formData.petName} onChange={event => updateField("petName", event.target.value)} placeholder="Your pet’s name" className={fieldClass} /></div>
                                <div className="min-w-0 space-y-2"><label htmlFor="service-pet-type" className={labelClass}>Pet type</label><select id="service-pet-type" name="petType" value={formData.petType} onChange={event => updateField("petType", event.target.value)} className={fieldClass}>{["Dog", "Cat", "Bird", "Rabbit", "Other"].map(type => <option key={type}>{type}</option>)}</select></div>
                            </div>
                            {needsDate && <div className={`grid gap-4 ${isBoarding && !isDaycare ? "sm:grid-cols-2" : ""}`}>
                                <div className="min-w-0 space-y-2"><label htmlFor="service-date" className={labelClass}>{isBoarding ? "Preferred check-in" : "Preferred date"} <span aria-hidden="true">*</span></label><input id="service-date" name="date" type="date" required value={formData.date} onFocus={event => { event.currentTarget.min = localDate() }} onChange={event => updateField("date", event.target.value)} className={fieldClass} /><p className="text-xs text-slate-500">Availability is confirmed by the team.</p></div>
                                {isBoarding && !isDaycare && <div className="min-w-0 space-y-2"><label htmlFor="service-end-date" className={labelClass}>Preferred check-out {overnightSelected ? <span aria-hidden="true">*</span> : <span className="text-xs font-normal text-slate-500">(if staying overnight)</span>}</label><input id="service-end-date" name="endDate" type="date" required={overnightSelected} min={formData.date ? followingDate(formData.date) : undefined} value={formData.endDate} onChange={event => updateField("endDate", event.target.value)} className={fieldClass} /></div>}
                            </div>}
                            {service.id === "pharmacy" && <div className="space-y-2"><label htmlFor="service-clinic" className={labelClass}>Veterinary clinic <span className="text-xs font-normal text-slate-500">(optional)</span></label><input id="service-clinic" name="clinic" type="text" maxLength={200} value={formData.clinic} onChange={event => updateField("clinic", event.target.value)} placeholder="Clinic or veterinarian’s name" className={fieldClass} /></div>}
                            {service.concerns && <div className="space-y-2"><label htmlFor="service-concern" className={labelClass}>What would you like help with?</label><select id="service-concern" name="concern" value={formData.concern} onChange={event => updateField("concern", event.target.value)} className={fieldClass}>{service.concerns.map(concern => <option key={concern}>{concern}</option>)}</select></div>}
                            <div className="space-y-2"><label htmlFor="service-notes" className={labelClass}>{service.notesLabel} <span className="text-xs font-normal text-slate-500">(optional)</span></label><textarea id="service-notes" name="notes" rows={4} maxLength={1500} value={formData.notes} onChange={event => updateField("notes", event.target.value)} placeholder={service.notesPlaceholder} className={`${fieldClass} min-h-28 resize-y`} /></div>
                            {formError && <p role="alert" className="text-sm font-semibold text-[#B93800]">{formError}</p>}
                            {draftReady && <div role="status" aria-live="polite" className="flex items-start gap-2 rounded-xl border border-orange-100 bg-[#fffaf3] p-3 text-sm leading-relaxed text-secondary"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B93800]" /><p>Email draft prepared. Review and send it from your email app. Your booking or order is not confirmed yet.</p></div>}
                            <button type="submit" className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:text-base"><Mail aria-hidden="true" className="h-4 w-4" />Open email draft<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" /></button>
                            <p id="service-form-note" className="text-xs leading-relaxed text-slate-500">Your email app opens so you can review and send this inquiry. No booking, order, or payment is made by this form. You can also email or call us using the details alongside it.</p>
                        </form>
                    </div>
                    <div className="min-w-0">
                        <h3 className="mb-5 text-xl font-bold tracking-tight text-secondary">What happens next?</h3>
                        <ol className="space-y-5">
                            {[
                                { title: "Tell us about your pet", text: "Pick an option or ask for help choosing." },
                                { title: "Review and send your email", text: "The form opens a draft in your email app." },
                                { title: "Confirm the details together", text: "The team confirms availability, pricing, and next steps." },
                            ].map((step, index) => <li key={step.title} className="flex items-start gap-3"><span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-secondary">{index + 1}</span><div><h3 className="text-base font-bold text-secondary">{step.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p></div></li>)}
                        </ol>
                        <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4">
                            <p className="text-sm font-bold text-secondary">Prefer to talk it through?</p>
                            <a href="tel:+15551234567" className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#B93800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><Phone aria-hidden="true" className="h-4 w-4" />+1 (555) 123-4567</a>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#B93800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><Mail aria-hidden="true" className="h-4 w-4 shrink-0" /><span className="break-all">{CONTACT_EMAIL}</span></a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
