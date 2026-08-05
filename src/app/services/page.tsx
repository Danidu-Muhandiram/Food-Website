import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
    HeartPulse, 
    Pill, 
    Scissors, 
    Apple, 
    Home, 
    ShieldCheck, 
    ArrowRight, 
    Star, 
    Award, 
    Clock, 
    Smile,
    MessageSquare
} from "lucide-react"

const SERVICES = [
    {
        id: "vet-care",
        title: "Veterinary Support",
        description: "Certified healthcare consultations, routine vaccinations, diagnostics, and customized treatment plans for your pets.",
        icon: HeartPulse,
        colorClass: "bg-red-50 text-red-500",
        badge: "Certified Vets",
        link: "/services/vet-care"
    },
    {
        id: "pharmacy",
        title: "Pet Pharmacy",
        description: "Direct prescription fulfillment, pain relief, premium vitamins, flea/tick care, and overall healthcare supplies.",
        icon: Pill,
        colorClass: "bg-sky-50 text-sky-500",
        badge: "FDA Approved",
        link: "/services/pharmacy"
    },
    {
        id: "grooming",
        title: "Grooming & Spa",
        description: "Soothing bath treatments, detailed style trimming, custom coat brushing, nail trimming, and dental hygiene care.",
        icon: Scissors,
        colorClass: "bg-amber-50 text-amber-500",
        badge: "Popular",
        link: "/services/grooming"
    },
    {
        id: "nutrition",
        title: "Nutrition Counsel",
        description: "Professional meal planners assisting in raw diets, allergen analysis, age-based feeding cycles, and weight regulation.",
        icon: Apple,
        colorClass: "bg-emerald-50 text-emerald-600",
        badge: "Expert Advice",
        link: "/services/nutrition"
    },
    {
        id: "boarding",
        title: "Daycare & Boarding",
        description: "Safe overnight lodging, group play sessions, interactive toys, outdoor walks, and constant supervisor attendance.",
        icon: Home,
        colorClass: "bg-purple-50 text-purple-500",
        badge: "24/7 Monitored",
        link: "/services/boarding"
    },
    {
        id: "custom-care",
        title: "Special Custom Care",
        description: "Have a unique care requirement or exotic pet request? Our team can coordinate tailored home care programs just for you.",
        icon: Smile,
        colorClass: "bg-blue-50 text-blue-500",
        badge: "Flexible",
        link: "/contact"
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-secondary text-white pt-36 pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent text-sm font-bold tracking-wider">
                        <Star className="w-4 h-4 fill-current" />
                        <span>OUR CARE SERVICES</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
                        Professional care tailored <br />
                        to your <span className="text-primary relative inline-block">
                            pet's needs
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        We offer a complete suite of services to ensure your companion lives a long, active, and perfectly healthy life.
                    </p>
                </div>
            </section>

            {/* Why Choose Us / Services Intro */}
            <section className="py-20 bg-orange-50/20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1 space-y-6">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">WHY CHOOSE US</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-secondary leading-tight">
                                Setting new standards for pet wellness
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed">
                                We believe in holistic pet health. From preventative healthcare to daily exercise and organic diets, we handle every stage of your pet's development with absolute transparency.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Feature 1 */}
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-primary flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-secondary">Expert Caregivers</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Licensed professionals and animal lovers trained to keep pets safe and comfortable.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-secondary">Fully Certified</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        FDA-compliant pharmaceuticals, state-certified vets, and fully-insured daycare services.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-secondary">Flexible Booking</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Quickly schedule consultations, medicine deliveries, and daycare check-ins online.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-secondary">Constant Updates</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Stay informed with direct text reports, medical updates, and daycare play logs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Service Cards Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">OUR SELECTION</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-secondary">What We Do</h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                            Click on any service card below to view detailed plans, pricing comparisons, FAQ segments, and to schedule bookings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service) => {
                            const IconComp = service.icon
                            return (
                                <div 
                                    key={service.id} 
                                    className="bg-[#F8F8F8] rounded-[2.5rem] p-8 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <div className={`w-14 h-14 rounded-2xl ${service.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <IconComp className="w-7 h-7" />
                                            </div>
                                            <span className="text-slate-400 text-xs font-bold bg-white px-3 py-1 rounded-full border border-slate-100">
                                                {service.badge}
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <Button asChild className="w-full h-12 rounded-2xl bg-white border border-slate-200 text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm group-hover:shadow-md">
                                            <Link href={service.link} className="flex items-center justify-center gap-2">
                                                <span>Learn More</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Custom CTA */}
            <section className="py-24 bg-orange-50/30 text-center relative overflow-hidden">
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl space-y-8">
                    <h3 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
                        Need a custom consultation?
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
                        Speak directly with our care coordinators to formulate custom diet sheets, specialized vaccine calendars, or schedule group boarding plans.
                    </p>
                    <div className="flex justify-center">
                        <Button asChild className="h-14 px-10 rounded-2xl bg-secondary text-white hover:bg-secondary/95 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                            <Link href="/contact">
                                Speak to a Care Coordinator
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
