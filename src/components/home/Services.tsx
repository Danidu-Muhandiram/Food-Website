"use client"

import Link from "next/link"
import Image from "next/image"
import { Crown, ArrowRight } from "lucide-react"

const supportingCardStyle = "group relative overflow-hidden border border-stone-200 bg-white shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)] transition-[border-color,box-shadow,translate] duration-300 hover:border-primary/35 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

function ServiceArrow() {
    return (
        <span aria-hidden="true" className="mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-primary transition-colors duration-200 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white group-focus-visible:border-secondary group-focus-visible:bg-secondary group-focus-visible:text-white">
            <ArrowRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
        </span>
    )
}

export function Services() {
    return (
        <section className="py-12 md:py-20 bg-[#F5F1EA] relative overflow-hidden">
            {/* Background Decorative Doodles and Paws */}
            <div className="absolute top-8 right-8 text-amber-500/30 pointer-events-none select-none hidden sm:block">
                <svg width="45" height="30" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M10 15 Q 25 5 40 20 T 55 10" />
                    <path d="M15 30 Q 30 20 45 35" />
                </svg>
            </div>
            
            {/* Subtle Dot Grid Accents */}
            <div 
                className="absolute top-16 right-1/4 w-28 h-12 opacity-25 pointer-events-none hidden md:block"
                style={{ backgroundImage: 'radial-gradient(circle, #D4A373 2px, transparent 2px)', backgroundSize: '16px 16px' }}
            />
            <div 
                className="absolute bottom-8 left-8 w-24 h-16 opacity-25 pointer-events-none hidden md:block"
                style={{ backgroundImage: 'radial-gradient(circle, #D4A373 2px, transparent 2px)', backgroundSize: '16px 16px' }}
            />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
                    <div className="space-y-2 md:space-y-3 max-w-2xl">
                        <h2 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm">
                            OUR SERVICES
                        </h2>
                        <h2 className="text-[32px] md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                            Complete <span className="text-primary relative inline-block">Pet Care</span> Solutions
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                            Everything your furry friend needs, all in one happy place.
                        </p>
                    </div>

                    <Link 
                        href="/services"
                        className="inline-flex items-center gap-2 bg-[#1B2232] hover:bg-slate-900 text-white font-bold h-10 md:h-12 px-6 md:px-8 rounded-full text-sm md:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group self-start md:self-auto shrink-0"
                    >
                        <span>Explore Services</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Bento Grid with increased 24px-28px gap */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
                    
                    {/* Card 1: Pet Doctor (Left Tall Featured Card - 32px radius) */}
                    <article
                        className="lg:col-span-4 rounded-[2rem] bg-[#FEF9E6] border border-[#E5C978] px-6 pt-6 md:px-7 md:pt-7 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] min-h-[430px]"
                    >
                        {/* Top Content */}
                        <div className="relative z-10">
                            {/* Featured service */}
                            <div className="inline-flex items-center gap-1.5 bg-[#FFDE59] text-slate-900 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm mb-4 border border-amber-300">
                                <Crown aria-hidden="true" className="w-3.5 h-3.5" />
                                <span>Featured Care</span>
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h3 className="text-2xl md:text-[28px] font-black text-slate-900 tracking-tight leading-tight">
                                    Pet Doctor
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base mt-2 leading-relaxed">
                                    Routine checkups to help spot health concerns early.
                                </p>
                            </div>

                            {/* CTA Action Button */}
                            <Link href="/services/vet-care" className="group mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
                                Explore Vet Care
                                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1" />
                            </Link>
                        </div>

                        {/* Yellow Blob Decor */}
                        <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />

                        {/* Dog Image */}
                        <div className="relative mt-4 h-56 w-full max-w-[300px] self-center pointer-events-none">
                            <Image 
                                src="/images/new-dog.png" 
                                alt="Happy beagle representing veterinary care"
                                fill
                                sizes="(min-width: 1024px) 30vw, 300px"
                                className="object-contain object-bottom drop-shadow-lg"
                            />
                        </div>
                    </article>

                    {/* Right Columns Area (8 Columns) */}
                    <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-7 justify-between">
                        
                        {/* Top Row: 2 Wide Cards (28px radius) */}
                        <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                            
                            {/* Card 2: Pet Pharmacy */}
                            <Link 
                                href="/services/pharmacy"
                                className={`${supportingCardStyle} rounded-[1.75rem] p-6 flex justify-between min-h-[175px] md:min-h-[195px]`}
                            >
                                <div className="relative z-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                                            Pet Pharmacy
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium mt-1 max-w-[170px] leading-relaxed">
                                            Medicines & health supplements
                                        </p>
                                    </div>

                                    <ServiceArrow />
                                </div>

                                {/* Pet Image with blend-multiply */}
                                <div className="relative w-24 h-28 xl:w-34 xl:h-34 self-end shrink-0 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/cat-rabbit.png" 
                                        alt="Pet Pharmacy"
                                        fill
                                        sizes="(min-width: 1280px) 136px, 96px"
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                            {/* Card 3: Home Visits */}
                            <Link 
                                href="/services/vet-care"
                                className={`${supportingCardStyle} rounded-[1.75rem] p-6 flex justify-between min-h-[175px] md:min-h-[195px]`}
                            >
                                <div className="relative z-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                                            Home Visits
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium mt-1 max-w-[170px] leading-relaxed">
                                            We come to your doorstep
                                        </p>
                                    </div>

                                    <ServiceArrow />
                                </div>

                                {/* Pet Image with blend-multiply */}
                                <div className="relative w-24 h-28 xl:w-34 xl:h-34 self-end shrink-0 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/cat-dog.png" 
                                        alt="Home Visits"
                                        fill
                                        sizes="(min-width: 1280px) 136px, 96px"
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                        </div>

                        {/* Bottom Row: 3 Compact Cards (24px radius) */}
                        <div className="grid flex-1 grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">

                            {/* Card 4: Pet Food */}
                            <Link 
                                href="/shop"
                                className={`${supportingCardStyle} rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[180px] md:min-h-[195px]`}
                            >
                                <div className="relative z-10 flex flex-1 flex-col">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                        Pet Food
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed mt-1 max-w-[130px]">
                                        Premium nutrition for all pets
                                    </p>
                                    <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                                        <ServiceArrow />
                                        <div className="relative h-24 w-20 shrink-0 pointer-events-none mix-blend-multiply">
                                            <Image
                                                src="/images/new-bag.png"
                                                alt="Pet Food"
                                                fill
                                                sizes="80px"
                                                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 5: Delivery */}
                            <Link 
                                href="/shop"
                                className={`${supportingCardStyle} rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[180px] md:min-h-[195px]`}
                            >
                                <div className="relative z-10 flex flex-1 flex-col">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                        Delivery
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed mt-1 max-w-[130px]">
                                        Fast & fresh food delivery
                                    </p>
                                    <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                                        <ServiceArrow />
                                        <div className="relative h-22 w-18 shrink-0 pointer-events-none mix-blend-multiply">
                                            <Image
                                                src="/images/new-tin.png"
                                                alt="Delivery"
                                                fill
                                                sizes="72px"
                                                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 6: Nutrition */}
                            <Link 
                                href="/services/nutrition"
                                className={`${supportingCardStyle} rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[180px] md:min-h-[195px]`}
                            >
                                <div className="relative z-10 flex flex-1 flex-col">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                        Nutrition
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed mt-1 max-w-[130px]">
                                        Expert dietary advice
                                    </p>
                                    <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                                        <ServiceArrow />
                                        <div className="relative h-22 w-20 shrink-0 pointer-events-none mix-blend-multiply">
                                            <Image
                                                src="/images/cat-cat.png"
                                                alt="Nutrition"
                                                fill
                                                sizes="80px"
                                                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
