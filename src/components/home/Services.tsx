"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Services Data
const SERVICES_LEFT = [
    {
        title: "Pet Doctor",
        description: "Specialist veterinary services",
        image: "/images/cat-dog.png", // Using existing placeholder
    },
    {
        title: "Pet Pharmacy",
        description: "Medicines & health supplements",
        image: "/images/cat-rabbit.png",
    },
    {
        title: "Pet Food",
        description: "Premium nutrition for all pets",
        image: "/images/new-bag.png",
    }
]

const SERVICES_RIGHT = [
    {
        title: "Home Visits",
        description: "We come to your doorstep",
        image: "/images/cat-bird.png",
    },
    {
        title: "Delivery",
        description: "Fast & fresh food delivery",
        image: "/images/new-tin.png",
    },
    {
        title: "Nutrition",
        description: "Expert dietary advice",
        image: "/images/cat-fish.png",
    }
]

export function Services() {
    return (
        <section className="py-12 md:py-20 bg-[#FFD600] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left Column - Desktop */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {SERVICES_LEFT.map((service, index) => (
                            <div key={index} className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden border-2 border-white relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-black text-slate-900 leading-tight">{service.title}</h3>
                                    <p className="text-xs text-slate-600 font-medium">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column - Title Area */}
                    <div className="w-full lg:w-1/3 text-center py-8 lg:py-0 order-first lg:order-none">
                        <div className="relative inline-block">
                            {/* Decorative Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-slate-900/10 rounded-full animate-spin-slow pointer-events-none mb-6"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-slate-900/5 rounded-full pointer-events-none"></div>

                            <h2 className="text-slate-900 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
                                Our Services
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
                                Complete<br />
                                <span className="text-white drop-shadow-sm">Pet Care</span><br />
                                Solutions
                            </h2>
                            <p className="text-slate-800 font-medium text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                                Everything your furry friend needs, all in one happy place.
                            </p>
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 px-8 rounded-full shadow-xl hover:scale-105 transition-all">
                                Explore Services
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Desktop */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {SERVICES_RIGHT.map((service, index) => (
                            <div key={index} className="group flex flex-row-reverse lg:flex-row items-center gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-right lg:text-left">
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden border-2 border-white relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-black text-slate-900 leading-tight">{service.title}</h3>
                                    <p className="text-xs text-slate-600 font-medium">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
