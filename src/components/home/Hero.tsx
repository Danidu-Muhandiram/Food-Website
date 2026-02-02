import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-primary overflow-hidden flex flex-col justify-center pb-20 pt-28">

            {/* 1. Background Pattern (Subtle Dots) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* 2. Organic Background Shapes - Anchored for balance */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 h-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">

                    {/* Left Content (5 Columns) - Tighter, Balanced */}
                    <div className="md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 animate-in slide-in-from-left duration-700 fade-in">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold tracking-wide shadow-sm">
                            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                            <span>#1 RATED PET FOOD</span>
                        </div>

                        {/* Headline - Big & Tight */}
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-sm">
                            keep your <br />
                            <span className="text-secondary relative whitespace-nowrap">
                                best friend
                                {/* Underline SVG */}
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.8" />
                                </svg>
                            </span> <br />
                            healthy.
                        </h1>

                        {/* Subtext */}
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-md leading-relaxed selection:bg-accent selection:text-accent-foreground">
                            Premium nutrition for your furry companions. Made with real ingredients and a whole lot of love.
                        </p>

                        {/* Buttons - Row */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <Button className="h-14 px-10 rounded-2xl bg-secondary text-white hover:bg-secondary/90 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                                Shop Now
                            </Button>

                            <div className="flex items-center gap-3 text-white font-bold group cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5 fill-current" />
                                </div>
                                <span className="text-lg">Schedule a call</span>
                            </div>
                        </div>

                        {/* Coupon / Small Element*/}
                        <div className="hidden md:flex items-center gap-4 pt-8 opacity-90">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-secondary">A+</div>
                                <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-secondary">5★</div>
                            </div>
                            <div className="text-xs text-white leading-tight font-medium">
                                Trusted by <br /> <span className="font-bold text-accent text-sm">20,000+</span> Parents
                            </div>
                        </div>
                    </div>

                    {/* Right Content (7 Columns) - Anchored & Dynamic */}
                    <div className="md:col-span-6 relative h-[500px] md:h-[700px] flex items-end justify-center md:translate-x-8">

                        {/* Organic Blob Behind */}
                        <svg className="absolute w-[140%] h-[140%] text-white/5 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M48.9,-58.6C62.8,-49.7,73.1,-34.5,76.5,-18.2C79.9,-1.9,76.3,15.5,66.5,29.3C56.7,43.2,40.7,53.5,23.5,62.8C6.3,72.1,-12.1,80.4,-28.9,76.5C-45.7,72.6,-60.9,56.5,-70.7,38.3C-80.5,20.1,-84.9,-0.2,-79.6,-18.8C-74.3,-37.4,-59.3,-54.3,-43.3,-62.4C-27.3,-70.6,-10.3,-69.9,5,-75.9C20.3,-81.8,40.6,-94.4,48.9,-58.6Z" transform="translate(100 100)" />
                        </svg>

                        {/* Main Dog Image - Centered and Large */}
                        <div className="relative z-10 w-full h-[90%] md:h-[95%] animate-in zoom-in-50 duration-1000 flex items-end justify-center">
                            <Image
                                src="/images/new-dog.png"
                                alt="Dog"
                                fill
                                className="object-contain drop-shadow-2xl z-10 object-bottom"
                                priority
                            />

                            {/* Floating Elements */}

                            {/* Tin (Left Shoulder) */}
                            <div className="absolute top-1/3 left-0 md:left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl rotate-[-8deg] hover:rotate-0 transition-transform cursor-pointer border border-white/60 z-20 animate-bounce delay-700 duration-[3000ms]">
                                <Image src="/images/new-tin.png" alt="Can" width={50} height={70} className="object-contain" />
                            </div>

                            {/* Bag (Right Bottom) */}
                            <div className="absolute bottom-1/4 right-0 md:right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl rotate-[8deg] hover:rotate-0 transition-transform cursor-pointer border border-white/60 z-20 animate-bounce delay-200 duration-[4000ms]">
                                <Image src="/images/new-bag.png" alt="Bag" width={65} height={85} className="object-contain" />
                                <div className="absolute -top-3 -right-3 bg-secondary text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
                                    HOT
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
