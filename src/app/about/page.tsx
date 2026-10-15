import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, HeartHandshake, Leaf, PawPrint, ShoppingBag, Stethoscope } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const VALUES = [
    { icon: Heart, title: "Care comes first", description: "Pets are family. Their comfort and wellbeing guide the products we choose and the care we offer." },
    { icon: Leaf, title: "Thoughtful nutrition", description: "Find food for every stage of life, with choices that make feeding your best friend feel a little easier." },
    { icon: ShoppingBag, title: "Everyday made easier", description: "Food, essentials, and care in one place, so you can spend more time enjoying life with your pet." },
    { icon: HeartHandshake, title: "A helping hand", description: "From everyday questions to a little extra support, we're here to help you find your next step." },
]

const MASCOTS = [
    { name: "Max", role: "Chief taste tester", image: "/images/new-dog.png", description: "Always first in line for a treat. Takes quality control very seriously." },
    { name: "Luna", role: "Head of naps", image: "/images/new-cat.png", description: "An expert in comfort, cozy corners, and supervising from a distance." },
    { name: "Barnaby", role: "Resident songbird", image: "/images/cat-bird.png", description: "Brings the morning soundtrack and a little extra cheer to the team." },
    { name: "Nibbles", role: "Snack inspector", image: "/images/cat-rabbit.png", description: "A discerning judge of crunchy greens and all the little good things." },
]

const CARE_LINKS = [
    { icon: ShoppingBag, title: "Something good in every bowl", description: "Explore food and everyday essentials for your pet.", href: "/shop" },
    { icon: Stethoscope, title: "Care for every chapter", description: "Discover grooming, veterinary support, and more.", href: "/services" },
    { icon: HeartHandshake, title: "A friendly place to start", description: "Have a question? Talk to our pet care team.", href: "/contact" },
]

const primaryLink = "group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-secondary px-6 text-sm md:text-base font-bold text-white shadow-lg shadow-black/10 transition-[background-color,transform] hover:bg-slate-800 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
const eyebrow = "text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-[#B93800]"
const sectionHeading = "mt-3 text-4xl md:text-[40px] font-black leading-tight tracking-tight text-secondary"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section aria-labelledby="about-title" className="relative isolate overflow-hidden bg-primary pb-10 pt-28 md:pb-12 md:pt-28" style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                <div className="container relative mx-auto px-4 md:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
                        <div className="relative z-10 text-center md:text-left">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm font-bold text-white">
                                <PawPrint aria-hidden="true" className="h-4 w-4 text-accent" />
                                THE PET SHOP FAMILY
                            </div>
                            <h1 id="about-title" className="text-[clamp(2.75rem,4.6vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white">
                                Big love for<br /><span className="text-secondary">little paws.</span>
                            </h1>
                            <p className="mx-auto mt-5 max-w-md text-base md:mx-0 md:text-lg leading-relaxed text-white/95">We&apos;re pet people, just like you. Here for good food, thoughtful care, and more happy moments with your best friend.</p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                                <Link href="#our-story" className={`${primaryLink} focus-visible:outline-white`}>
                                    Meet Pet Shop <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
                                </Link>
                                <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/40 px-5 text-sm md:text-base font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore our care</Link>
                            </div>
                        </div>

                        <div className="relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[340px] md:h-[360px] lg:h-[380px]">
                            <div aria-hidden="true" className="absolute bottom-6 left-1/2 h-[82%] w-[88%] -translate-x-1/2 rounded-[48%] bg-white/10" />
                            <div aria-hidden="true" className="absolute bottom-6 left-[12%] h-5 w-[75%] rounded-full bg-secondary/20 blur-xl" />
                            <div className="absolute bottom-6 left-0 top-0 w-[64%] -rotate-3">
                                <Image src="/images/new-dog.png" alt="A happy beagle, part of the Pet Shop family" fill priority sizes="(max-width: 767px) 60vw, 30vw" className="object-contain object-bottom drop-shadow-xl" />
                            </div>
                            <div className="absolute bottom-4 right-0 top-[14%] w-[56%] rotate-3">
                                <Image src="/images/new-cat.png" alt="A black and white cat sitting beside the beagle" fill priority sizes="(max-width: 767px) 50vw, 26vw" className="object-contain object-bottom drop-shadow-xl" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/60 bg-[#fffaf3] px-4 py-2.5 text-sm font-bold text-secondary shadow-lg shadow-black/5">
                                <Heart aria-hidden="true" className="h-4 w-4 text-[#B93800]" />
                                A little care. A lot of love.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-story" aria-labelledby="story-title" className="scroll-mt-6 py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="max-w-xl">
                            <p className={eyebrow}>Our story</p>
                            <h2 id="story-title" className={sectionHeading}>Pet people,<br />through and through.</h2>
                            <p className="mt-5 text-base leading-relaxed text-slate-600">Pet Shop began with a simple goal: make good food and thoughtful care easier to find. Because looking after your best friend should feel rewarding, with support when you need it.</p>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">Today, we bring nutrition, everyday essentials, and pet care together in one friendly place. From the first bowl to the next checkup, we&apos;re here for the little things that make a big difference.</p>
                        </div>
                        <div className="rounded-3xl border border-orange-100 bg-[#fffaf3] p-3 md:p-4">
                            {CARE_LINKS.map(({ icon: Icon, title, description, href }, index) => (
                                <Link key={href} href={href} className={`group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:p-5 ${index < CARE_LINKS.length - 1 ? "border-b border-orange-100" : ""}`}>
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-[#B93800]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                    <div className="min-w-0 flex-1"><h3 className="text-lg font-bold text-secondary">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p></div>
                                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="values-title" className="border-y border-orange-100/70 bg-[#fffaf3] py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-8 max-w-2xl">
                        <p className={eyebrow}>What matters to us</p>
                        <h2 id="values-title" className={sectionHeading}>Good care starts with good values.</h2>
                        <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600">Simple principles behind every product, conversation, and little act of care.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {VALUES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="rounded-3xl border border-orange-100 bg-white p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#B93800]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                <h3 className="mt-5 text-lg font-bold text-secondary">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="mascots-title" className="relative overflow-hidden bg-[#FFD600] py-12 md:py-16">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                <div className="container relative mx-auto px-4 md:px-8">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div><p className="text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-secondary/80">Our furry board members</p><h2 id="mascots-title" className={sectionHeading}>Small paws. Big personalities.</h2></div>
                        <p className="max-w-sm text-sm md:text-base leading-relaxed text-secondary/80">Meet the faces that keep us smiling and remind us why we do what we do.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {MASCOTS.map(({ name, role, image, description }) => (
                            <article key={name} className="rounded-3xl border border-white/70 bg-white p-4 shadow-sm">
                                <div className="relative h-44 overflow-hidden rounded-2xl bg-[#fffaf3] md:h-48"><Image src={image} alt={`${name}, our ${role.toLowerCase()}`} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 23vw" className="object-contain p-2" /></div>
                                <div className="px-1 pb-2 pt-4"><h3 className="text-2xl font-black tracking-tight text-secondary">{name}</h3><p className="mt-1 text-sm font-semibold text-[#B93800]">{role}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="about-cta-title" className="bg-white py-10 md:py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col gap-6 rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl"><p className={eyebrow}>Let&apos;s make their day</p><h2 id="about-cta-title" className="mt-2 text-2xl font-black leading-tight tracking-tight text-secondary md:text-3xl">More good days with your best friend.</h2><p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">Find their next favorite meal, or a little extra care.</p></div>
                        <div className="flex shrink-0 flex-wrap items-center gap-3">
                            <Link href="/shop" className={primaryLink}>Shop for your pet <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" /></Link>
                            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-secondary/20 px-5 text-sm md:text-base font-bold text-secondary transition-colors hover:border-secondary/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">Talk to our team</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
