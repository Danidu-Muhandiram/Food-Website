"use client"

import Link from "next/link"
import Image from "next/image"
import { Crown, ArrowRight } from "lucide-react"

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
                        <h2 className="text-[40px] font-black text-slate-900 tracking-tight leading-tight">
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
                    <Link 
                        href="/services/vet-care"
                        className="lg:col-span-4 rounded-[2rem] bg-[#FEF9E6] border-[1.5px] border-[#E5C978] p-6 md:p-7 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[360px] lg:min-h-[430px]"
                    >
                        {/* Top Content */}
                        <div className="relative z-10">
                            {/* Most Popular Badge */}
                            <div className="inline-flex items-center gap-1.5 bg-[#FFDE59] text-slate-900 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm mb-4 border border-amber-300">
                                <Crown className="w-3.5 h-3.5 fill-current" />
                                <span>Most Popular</span>
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                    Pet Doctor
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base font-medium mt-1.5 max-w-[210px] leading-snug">
                                    Specialist veterinary services
                                </p>
                            </div>

                            {/* CTA Action Button */}
                            <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-md mt-6 transition-all group-hover:scale-110 group-hover:bg-primary/95">
                                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </div>

                        {/* Yellow Blob Decor */}
                        <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />

                        {/* Dog Image */}
                        <div className="absolute right-0 bottom-0 w-48 h-56 md:w-56 md:h-64 pointer-events-none">
                            <Image 
                                src="/images/new-dog.png" 
                                alt="Pet Doctor"
                                fill
                                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </Link>

                    {/* Right Columns Area (8 Columns) */}
                    <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-7 justify-between">
                        
                        {/* Top Row: 2 Wide Cards (28px radius) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                            
                            {/* Card 2: Pet Pharmacy (Soft Peach) */}
                            <Link 
                                href="/services/pharmacy"
                                className="rounded-[1.75rem] bg-[#FFF5ED] border-[1.5px] border-[#F8BFA2] p-6 flex justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[175px] md:min-h-[195px]"
                            >
                                <div className="relative z-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                                            Pet Pharmacy
                                        </h3>
                                        <p className="text-slate-600 text-xs md:text-sm font-medium mt-1 max-w-[170px] leading-snug">
                                            Medicines & health supplements
                                        </p>
                                    </div>

                                    <div className="w-9 h-9 rounded-full bg-white border-[1.5px] border-orange-300 text-primary shadow-sm flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 mt-4">
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Pet Image with blend-multiply */}
                                <div className="relative w-28 h-28 md:w-34 md:h-34 self-end shrink-0 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/cat-rabbit.png" 
                                        alt="Pet Pharmacy"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                            {/* Card 3: Home Visits (Soft Mint) */}
                            <Link 
                                href="/services/vet-care"
                                className="rounded-[1.75rem] bg-[#EDF9F2] border-[1.5px] border-[#A8E2BF] p-6 flex justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[175px] md:min-h-[195px]"
                            >
                                <div className="relative z-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                                            Home Visits
                                        </h3>
                                        <p className="text-slate-600 text-xs md:text-sm font-medium mt-1 max-w-[170px] leading-snug">
                                            We come to your doorstep
                                        </p>
                                    </div>

                                    <div className="w-9 h-9 rounded-full bg-white border-[1.5px] border-emerald-300 text-emerald-600 shadow-sm flex items-center justify-center transition-all group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:scale-110 mt-4">
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Pet Image with blend-multiply */}
                                <div className="relative w-28 h-28 md:w-34 md:h-34 self-end shrink-0 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/cat-dog.png" 
                                        alt="Home Visits"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                        </div>

                        {/* Bottom Row: 3 Compact Cards (24px radius) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">

                            {/* Card 4: Pet Food (Soft Warm Yellow) */}
                            <Link 
                                href="/shop"
                                className="rounded-[1.5rem] bg-[#FFFBEB] border-[1.5px] border-[#F2D785] p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[180px] md:min-h-[195px]"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight">
                                        Pet Food
                                    </h3>
                                    <p className="text-slate-600 text-xs font-medium leading-snug mt-1 max-w-[130px]">
                                        Premium nutrition for all pets
                                    </p>
                                    <div className="w-8 h-8 rounded-full bg-white border-[1.5px] border-amber-300 text-amber-700 shadow-sm flex items-center justify-center transition-all group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:scale-110 mt-3.5">
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Product Bag Image with blend-multiply */}
                                <div className="absolute right-1 bottom-1 w-20 h-24 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/new-bag.png" 
                                        alt="Pet Food"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                            {/* Card 5: Delivery (Soft Sky Blue) */}
                            <Link 
                                href="/shop"
                                className="rounded-[1.5rem] bg-[#EFF8FF] border-[1.5px] border-[#B5D9F8] p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[180px] md:min-h-[195px]"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight">
                                        Delivery
                                    </h3>
                                    <p className="text-slate-600 text-xs font-medium leading-snug mt-1 max-w-[130px]">
                                        Fast & fresh food delivery
                                    </p>
                                    <div className="w-8 h-8 rounded-full bg-white border-[1.5px] border-sky-300 text-sky-600 shadow-sm flex items-center justify-center transition-all group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 group-hover:scale-110 mt-3.5">
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Product Tin Image with blend-multiply */}
                                <div className="absolute right-1 bottom-1 w-18 h-22 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/new-tin.png" 
                                        alt="Delivery"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                            {/* Card 6: Nutrition (Soft Lavender Purple) */}
                            <Link 
                                href="/services/nutrition"
                                className="rounded-[1.5rem] bg-[#F7F2FF] border-[1.5px] border-[#D8BEF5] p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_rgba(16,22,47,0.06)] hover:shadow-[0_16px_32px_rgba(16,22,47,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[180px] md:min-h-[195px]"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight">
                                        Nutrition
                                    </h3>
                                    <p className="text-slate-600 text-xs font-medium leading-snug mt-1 max-w-[130px]">
                                        Expert dietary advice
                                    </p>
                                    <div className="w-8 h-8 rounded-full bg-white border-[1.5px] border-purple-300 text-purple-600 shadow-sm flex items-center justify-center transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 group-hover:scale-110 mt-3.5">
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Cat Image with blend-multiply */}
                                <div className="absolute right-0 bottom-0 w-20 h-22 pointer-events-none mix-blend-multiply">
                                    <Image 
                                        src="/images/cat-cat.png" 
                                        alt="Nutrition"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
