import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function About() {
    return (
        <section className="relative w-full py-20 bg-orange-50/50 overflow-hidden">

            {/* Background Decor - Subtle Paws */}
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2C9 2 7 3.5 7 6C7 8 8.5 9.5 10 10C8.5 10.5 7 12 7 14C7 16.5 9 18 12 18C15 18 17 16.5 17 14C17 12 15.5 10.5 14 10C15.5 9.5 17 8 17 6C17 3.5 15 2 12 2Z" /></svg>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Left Column: Image Composition (Organic) */}
                    <div className="w-full md:w-1/2 relative flex justify-center">

                        {/* Main Blob Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>

                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Image 1 */}
                            <div className="absolute top-0 right-0 w-[65%] aspect-[4/5] overflow-hidden rounded-[2rem] rotate-3 shadow-2xl border-4 border-white z-10 hover:rotate-0 transition-all duration-500">
                                <Image src="/images/new-dog.png" alt="Happy Dog" fill className="object-cover bg-orange-100" />
                            </div>

                            {/* Image 2 */}
                            <div className="absolute bottom-0 left-4 w-[55%] aspect-square overflow-hidden rounded-[2rem] -rotate-6 shadow-2xl border-4 border-white z-20 hover:rotate-0 transition-all duration-500">
                                <Image src="/images/new-cat.png" alt="Happy Cat" fill className="object-cover bg-amber-100" />
                            </div>

                            {/* Decorative Stick/Doodle */}
                            <svg className="absolute -top-8 -left-8 w-24 h-24 text-accent rotate-[-15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 80 Q 50 20 80 50" strokeLinecap="round" />
                                <path d="M30 30 L 40 40" strokeLinecap="round" />
                                <path d="M20 40 L 30 50" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                        <div className="space-y-4">
                            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">About Us</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                We're just like you, <br />
                                <span className="text-primary relative">
                                    pet lovers
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>
                            </h3>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            Until one has loved an animal, a part of one's soul remains unawakened. We believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Over 10 years of experience",
                                "20 talented vets ready to help you",
                                "High-quality products only"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-800 font-bold justify-center md:justify-start">
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shadow-sm">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                                More About Us <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
