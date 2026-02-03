"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Categories Data details
const CATEGORIES = [
    { id: "dog-food", name: "Dog Food", image: "/images/cat-dog.png" },
    { id: "cat-food", name: "Cat Food", image: "/images/cat-cat.png" },
    { id: "bird-food", name: "Bird Food", image: "/images/cat-bird.png" },
    { id: "fish-food", name: "Fish Food", image: "/images/cat-fish.png" },
    { id: "rabbit-food", name: "Rabbit Food", image: "/images/cat-rabbit.png" },
    { id: "reptile-food", name: "Reptile Food", image: "/images/cat-dog.png" },
]

export function TopCategories() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320 // Approx card width + gap
            const currentScroll = scrollContainerRef.current.scrollLeft
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-8 md:py-12 bg-[#FFD600] relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Category Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
                    <div className="space-y-2 md:space-y-3 max-w-2xl">
                        <h2 className="text-slate-900 font-bold tracking-widest uppercase text-xs md:text-sm opacity-80">
                            Shop By Category
                        </h2>
                        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Pet Product Category
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base lg:text-base leading-relaxed opacity-80 line-clamp-2 md:line-clamp-none">
                            Discover a world of premium supplies for your beloved companions. From nutritious feasts to engaging toys, we have everything your pets need to thrive.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Scroll Arrows */}
                        <div className="flex items-center gap-2 mr-2">
                            <Button
                                onClick={() => scroll('left')}
                                variant="outline"
                                size="icon"
                                className="w-10 h-10 rounded-full bg-white/20 border-2 border-slate-900/10 hover:bg-white/40 hover:border-slate-900/30 text-slate-900 backdrop-blur-sm transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                onClick={() => scroll('right')}
                                variant="outline"
                                size="icon"
                                className="w-10 h-10 rounded-full bg-white/20 border-2 border-slate-900/10 hover:bg-white/40 hover:border-slate-900/30 text-slate-900 backdrop-blur-sm transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 md:h-12 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base whitespace-nowrap">
                            See All Category
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Categories Grid - Horizontal Scroll */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] flex-shrink-0 snap-center group bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 h-[240px] md:h-[220px] relative overflow-hidden hover:shadow-xl hover:shadow-orange-900/10 transition-all duration-500 hover:-translate-y-2">

                            {/* Category Name */}
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 relative z-10 group-hover:text-[#E85C24] transition-colors">
                                {cat.name}
                            </h3>

                            {/* Image */}
                            <div className="absolute bottom-0 right-0 w-[80%] h-[80%] translate-x-4 translate-y-4 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-x-0 group-hover:translate-y-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-contain object-bottom right"
                                />
                            </div>

                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-orange-50/0 group-hover:to-orange-50/30 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

