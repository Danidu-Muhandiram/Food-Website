import Link from "next/link"
import { Apple, ArrowRight, Check, ChevronDown, ChevronRight, ClipboardList, HeartPulse, House, MessageSquare, Pill, Scissors } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import type { ServiceDefinition } from "@/lib/services"
import { ServiceInquiry } from "./ServiceInquiry"

const SERVICE_ICONS = { "vet-care": HeartPulse, grooming: Scissors, pharmacy: Pill, nutrition: Apple, boarding: House }
const eyebrowClass = "text-xs font-bold uppercase tracking-[0.12em] text-[#B93800] md:text-sm"
const headingClass = "mt-3 text-[32px] font-black leading-tight tracking-tight text-secondary md:text-4xl"
const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

export function ServiceDetailPage({ service }: { service: ServiceDefinition }) {
    const Icon = SERVICE_ICONS[service.id]

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />
            <section aria-labelledby="service-title" className="relative isolate overflow-hidden bg-primary pb-10 pt-28 text-white md:pb-12" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[32px] border-white/[0.04]" />
                <div className="container relative mx-auto px-4 text-center md:px-8">
                    <nav aria-label="Breadcrumb" className="mb-5 text-xs font-semibold text-white/90 md:text-sm">
                        <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                            <li><Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Home</Link></li>
                            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="h-3.5 w-3.5" /><Link href="/services" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Services</Link></li>
                            <li aria-current="page" className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />{service.title}</li>
                        </ol>
                    </nav>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold md:text-sm"><Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />{service.title}</div>
                    <h1 id="service-title" className="mx-auto max-w-4xl text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em]">{service.heroLead}<br /><span className="text-secondary">{service.heroAccent}</span></h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">{service.summary}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a href="#service-packages" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-secondary px-5 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base">Explore options<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" /></a>
                        <a href="#service-inquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/40 px-5 text-sm font-bold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"><MessageSquare aria-hidden="true" className="h-4 w-4" />Ask about this service</a>
                    </div>
                </div>
            </section>

            <section aria-labelledby="service-overview-title" className="bg-[#fffaf3]/60 py-10 md:py-12">
                <div className="container mx-auto grid items-start gap-7 px-4 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
                    <div className="min-w-0">
                        <p className={eyebrowClass}>{service.eyebrow}</p>
                        <h2 id="service-overview-title" className={headingClass}>{service.overviewTitle}</h2>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">{service.overview}</p>
                        <ul className="mt-5 grid gap-3 text-sm font-semibold text-secondary md:text-base">
                            {service.benefits.map(benefit => <li key={benefit} className="flex items-start gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#B93800]"><Check aria-hidden="true" className="h-3.5 w-3.5" /></span><span>{benefit}</span></li>)}
                        </ul>
                    </div>
                    <aside aria-labelledby="service-preparation-title" className="min-w-0 rounded-3xl border border-orange-100 bg-white p-5 md:p-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-secondary"><ClipboardList aria-hidden="true" className="h-5 w-5" /></span>
                        <h3 id="service-preparation-title" className="mt-4 text-xl font-bold tracking-tight text-secondary">A little preparation helps.</h3>
                        <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                            {service.preparation.map((item, index) => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-[#B93800]">{index + 1}</span><span>{item}</span></li>)}
                        </ul>
                    </aside>
                </div>
            </section>

            <ServiceInquiry key={service.id} service={service} />

            <section aria-labelledby="service-faq-title" className="bg-white py-10 md:py-12">
                <div className="container mx-auto grid items-start gap-6 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                    <div>
                        <p className={eyebrowClass}>Good to know</p>
                        <h2 id="service-faq-title" className={headingClass}>A few helpful answers.</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">Have a different question? We can help you find your next step.</p>
                        <Link href="/contact" className={`mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#B93800] ${focusClass}`}>Talk to our team<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                    </div>
                    <div className="min-w-0 space-y-3">
                        {service.faqs.map(faq => (
                            <details key={faq.q} className="group rounded-2xl border border-stone-200 bg-white open:border-orange-200 open:bg-[#fffaf3]/60">
                                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-bold leading-snug text-secondary hover:text-[#B93800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden"><h3>{faq.q}</h3><ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-[#B93800] transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary>
                                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 md:text-base">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
