"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Categories Data details
const CATEGORIES = [
    { id: "dog", name: "Domestic Dog", image: "/images/cat-dog.png" },
    { id: "cat", name: "Super Cat", image: "/images/cat-cat.png" },
    { id: "dog-super", name: "Super Dog", image: "/images/cat-dog.png" }, // Reusing dog image for demo or I should generate another one? I'll reuse or use a variant. Actually the user wants "Super Dog" and "Domestic Dog". I have one dog image. I'll just reuse it or maybe mirror it if I could (CSS). Let's just reuse for now.
    { id: "bird", name: "Local Bird", image: "/images/cat-bird.png" },
    { id: "rabbit", name: "Rabbit", image: "/images/cat-rabbit.png" },
    { id: "fish", name: "Gold Fish", image: "/images/cat-fish.png" },
]

export function TopCategories() {
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
                            Discover a world of premium supplies for your beloved companions. From nutritious treats to playful toys, we have everything your pets need to thrive.
                        </p>
                    </div>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 md:h-12 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base whitespace-nowrap">
                        See All Category
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="group bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 h-[180px] md:h-[220px] lg:h-[200px] xl:h-[240px] relative overflow-hidden hover:shadow-xl hover:shadow-orange-900/10 transition-all duration-500 hover:-translate-y-2">

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

