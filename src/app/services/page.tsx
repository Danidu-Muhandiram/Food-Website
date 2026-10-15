import Link from "next/link"
import { Apple, ArrowRight, Check, ChevronRight, Clock, HeartHandshake, HeartPulse, House, MessageSquare, PawPrint, Pill, Scissors } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const SERVICES = [
    {
        id: "vet-care",
        title: "Veterinary Care",
        description: "Routine checkups and vaccination visits for every stage of life.",
        icon: HeartPulse,
        label: "Featured care",
        benefits: ["Routine health checkups", "Vaccination visits"],
        action: "Explore vet care",
        href: "/services/vet-care",
        featured: true,
    },
    {
        id: "pharmacy",
        title: "Pet Pharmacy",
        description: "Medicines, supplements, and health essentials for their daily routine.",
        icon: Pill,
        label: "Everyday essentials",
        benefits: ["Medicines and supplements", "Flea and tick essentials"],
        action: "Explore pharmacy",
        href: "/services/pharmacy",
        featured: false,
    },
    {
        id: "grooming",
        title: "Grooming & Spa",
        description: "Baths, coat care, and finishing touches for a fresh, comfortable pet.",
        icon: Scissors,
        label: "Fresh and happy",
        benefits: ["Baths and coat care", "Nail trimming"],
        action: "Explore grooming",
        href: "/services/grooming",
        featured: false,
    },
    {
        id: "nutrition",
        title: "Diet & Nutrition",
        description: "Feeding guidance that fits their age, preferences, and everyday needs.",
        icon: Apple,
        label: "Better mealtimes",
        benefits: ["Everyday feeding guidance", "Meal planning support"],
        action: "Explore nutrition",
        href: "/services/nutrition",
        featured: false,
    },
    {
        id: "boarding",
        title: "Daycare & Boarding",
        description: "Daytime company and overnight stays when you need a helping hand.",
        icon: House,
        label: "Stay and play",
        benefits: ["Daytime care and company", "Overnight stays"],
        action: "Explore boarding",
        href: "/services/boarding",
        featured: false,
    },
    {
        id: "custom-care",
        title: "Personalized Care",
        description: "Tell us what makes your pet unique. We can help you find the next step.",
        icon: HeartHandshake,
        label: "Made for your pet",
        benefits: ["Talk through your needs", "Find the right next step"],
        action: "Talk to our team",
        href: "/contact",
        featured: false,
    },
]

const CARE_VALUES = [
    { icon: PawPrint, title: "Care that fits", description: "Explore support for different pets, ages, and everyday needs." },
    { icon: HeartHandshake, title: "Clear next steps", description: "Read the service details before choosing the care that feels right." },
    { icon: Clock, title: "Everyday support", description: "Bring nutrition, grooming, and wellbeing into one care routine." },
    { icon: MessageSquare, title: "Here to help", description: "Start with a question when you are unsure which service to choose." },
]

const eyebrow = "text-xs font-bold uppercase tracking-[0.12em] text-[#B93800] md:text-sm"
const sectionHeading = "mt-3 text-4xl font-black leading-tight tracking-tight text-secondary md:text-[40px]"
const primaryLink = "group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-secondary px-5 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:text-base"
const arrowClass = "h-4 w-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none"

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />

            <section aria-labelledby="services-title" className="relative isolate overflow-hidden bg-primary pb-10 pt-28 text-white md:pb-12" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[32px] border-white/[0.04]" />
                <div className="container relative mx-auto px-4 text-center md:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/90 md:text-sm">
                        <Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Home</Link>
                        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                        <span aria-current="page">Services</span>
                    </nav>
                    <h1 id="services-title" className="text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em]">A little care.<br /><span className="text-secondary">A happier pet.</span></h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">From routine checkups to a fresh trim, find thoughtful care for every stage of your pet&apos;s life.</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <Link href="#care-services" className={`${primaryLink} focus-visible:outline-white`}>Explore services<ArrowRight aria-hidden="true" className={arrowClass} /></Link>
                        <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/40 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base">Help me choose</Link>
                    </div>
                </div>
            </section>

            <section id="care-services" aria-labelledby="care-services-title" className="scroll-mt-6 bg-[#fffaf3]/60 py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-8 max-w-2xl">
                        <p className={eyebrow}>Our care services</p>
                        <h2 id="care-services-title" className={sectionHeading}>Find their kind of care.</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">Explore everyday support and a little extra care. Each service has its own details to help you choose.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {SERVICES.map(({ id, title, description, icon: Icon, label, benefits, action, href, featured }) => (
                            <article key={id} aria-labelledby={`service-${id}`} className="h-full min-w-0">
                                <Link href={href} aria-labelledby={`service-${id}`} aria-describedby={`service-${id}-description`} className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)] transition-[border-color,box-shadow,translate] duration-200 hover:border-primary/50 hover:shadow-[0_12px_28px_-12px_rgba(15,23,42,0.18)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${featured ? "border-[#E5C978] bg-[#FEF9E6]" : "border-stone-200 bg-white"}`}>
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 group-hover:bg-primary group-hover:text-white group-focus-visible:bg-primary group-focus-visible:text-white ${featured ? "bg-accent text-secondary" : "bg-orange-50 text-[#B93800]"}`}><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${featured ? "bg-accent/40 text-secondary" : "bg-slate-50 text-slate-600"}`}>{label}</span>
                                    </div>
                                    <h3 id={`service-${id}`} className="mt-4 text-xl font-bold leading-snug tracking-tight text-secondary">{title}</h3>
                                    <p id={`service-${id}-description`} className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                                    <ul className="mb-4 mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-medium leading-relaxed text-slate-600">
                                        {benefits.map(benefit => <li key={benefit} className="flex items-start gap-1.5"><Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B93800]" /><span>{benefit}</span></li>)}
                                    </ul>
                                    <div className={`mt-auto flex min-h-11 items-center justify-between gap-3 border-t pt-3 text-sm font-bold ${featured ? "border-[#E5C978]/50 text-[#B93800]" : "border-slate-100 text-secondary"}`}>
                                        <span>{action}</span>
                                        <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-secondary group-hover:text-white group-focus-visible:bg-secondary group-focus-visible:text-white ${featured ? "bg-primary text-white" : "bg-orange-50 text-[#B93800]"}`}><ArrowRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-reduce:transition-none" /></span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="care-values-title" className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-8 max-w-2xl">
                        <p className={eyebrow}>A little more peace of mind</p>
                        <h2 id="care-values-title" className={sectionHeading}>Good care, made simpler.</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">A thoughtful approach to the everyday things that matter to you and your pet.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {CARE_VALUES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="rounded-3xl border border-orange-100 bg-[#fffaf3] p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#B93800]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                <h3 className="mt-5 text-lg font-bold text-secondary">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="services-cta-title" className="bg-white pb-10 md:pb-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col gap-6 rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl">
                            <p className={eyebrow}>Here for you both</p>
                            <h2 id="services-cta-title" className="mt-2 text-2xl font-black leading-tight tracking-tight text-secondary md:text-3xl">Not sure where to start?</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">Tell us a little about your pet and the care you are looking for. We can help you find your next step.</p>
                        </div>
                        <Link href="/contact" className={`${primaryLink} self-start lg:shrink-0`}>Talk to our team<ArrowRight aria-hidden="true" className={arrowClass} /></Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
