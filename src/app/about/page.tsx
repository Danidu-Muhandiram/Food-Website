import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Award, ShieldAlert, Truck, Sparkles, Star, ChevronRight, PawPrint } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* About Page Hero */}
            <section className="relative bg-secondary text-white pt-36 pb-24 overflow-hidden">
                {/* Subtle Dot Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>
                {/* Organic Blur Accent */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent text-sm font-bold tracking-wider">
                        <PawPrint className="w-4 h-4 fill-current" />
                        <span>MEET THE PET SHOP FAMILY</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
                        We’re here to keep your <br />
                        <span className="text-primary relative inline-block">
                            best friends
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
                            </svg>
                        </span> healthy & happy
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        From raw premium diets to specialized vet support, we are your all-in-one companion for raising a joyful, thriving pet.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-orange-50/20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        
                        {/* Left Side: Images */}
                        <div className="lg:col-span-6 relative h-[400px] md:h-[500px]">
                            {/* Organic Backing Shadow */}
                            <div className="absolute inset-0 bg-[#FFD600]/10 rounded-[3rem] -rotate-3 scale-95"></div>
                            
                            {/* Image 1 - Dog */}
                            <div className="absolute top-0 left-0 w-[60%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-4deg] hover:rotate-0 transition-all duration-500">
                                <Image 
                                    src="/images/new-dog.png" 
                                    alt="Our happy dog" 
                                    fill 
                                    className="object-cover bg-orange-100"
                                />
                            </div>

                            {/* Image 2 - Cat */}
                            <div className="absolute bottom-0 right-0 w-[55%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[4deg] hover:rotate-0 transition-all duration-500 z-10">
                                <Image 
                                    src="/images/new-cat.png" 
                                    alt="Our cozy cat" 
                                    fill 
                                    className="object-cover bg-amber-100"
                                />
                            </div>
                        </div>

                        {/* Right Side: Copy */}
                        <div className="lg:col-span-6 space-y-6">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">OUR JOURNEY</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-secondary leading-tight">
                                How a simple paw-print inspired a premium pet care community
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Pet Shop started with a single, simple goal: to make premium-grade health support and nutritional food easily accessible for pet parents everywhere. We noticed how difficult it was to source real-ingredient food free of fillers and preservatives, so we partnered directly with local organic providers and veterinarians to design diets that work.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Over the years, we've expanded from simple food delivery to direct veterinary consultations, pharmacy access, and home care visits. Today, we're proud to serve thousands of families across the country, keeping their best friends tail-waggingly healthy.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">10k+</div>
                                    <span className="text-sm font-bold text-secondary">Happy Pets</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 text-[#D4AF37] flex items-center justify-center font-bold">5★</div>
                                    <span className="text-sm font-bold text-secondary">Verified Reviews</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">100%</div>
                                    <span className="text-sm font-bold text-secondary">Real Ingredients</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">WHAT DRIVES US</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-secondary">Our Core Values</h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                            We hold ourselves to the highest standards. We believe pets are family, and we design all of our services with that core philosophy in mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div className="bg-[#F8F8F8] rounded-[2rem] p-8 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 space-y-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <h4 className="text-xl font-bold text-secondary">Compassionate Care</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Every decision, product selection, and consultation comes from a place of genuine love and empathy for your pets.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-[#F8F8F8] rounded-[2rem] p-8 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 space-y-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Award className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-secondary">Premium Nutrition</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                No mystery fillers or synthetic additives. Only whole foods, pure proteins, and optimal nutrients tailored to your pet's breed.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-[#F8F8F8] rounded-[2rem] p-8 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 space-y-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-secondary">Seamless Access</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Getting prescriptions, diets, and advice shouldn't be stressful. We make scheduling and ordering completely frictionless.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-[#F8F8F8] rounded-[2rem] p-8 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 space-y-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-secondary">Local Support</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We actively sponsor local pet shelters and direct a percentage of our profits to care for rescue animals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mascot Grid Section */}
            <section className="py-20 bg-[#FFD600] relative overflow-hidden">
                {/* Subtle Dot Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-slate-900 font-bold tracking-widest uppercase text-sm opacity-80">OUR FURRY BOARD MEMBERS</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900">Meet the Mascots</h3>
                        <p className="text-slate-800 font-medium text-base">
                            The true brains behind the operation. These dedicated workers ensure our standards remain sky-high.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Mascot 1 */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 group">
                            <div className="relative w-full aspect-square bg-orange-50 rounded-[1.5rem] overflow-hidden">
                                <Image src="/images/new-dog.png" alt="Max" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900">Max</h4>
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Chief Tasting Officer (CTO)</p>
                            </div>
                            <p className="text-slate-600 text-sm italic">
                                "Will run 10 miles for a single piece of organic peanut butter treats."
                            </p>
                        </div>

                        {/* Mascot 2 */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 group">
                            <div className="relative w-full aspect-square bg-amber-50 rounded-[1.5rem] overflow-hidden">
                                <Image src="/images/new-cat.png" alt="Luna" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900">Luna</h4>
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Head of Sleep Operations</p>
                            </div>
                            <p className="text-slate-600 text-sm italic">
                                "Maintains a strict schedule of 18 hours of sleep per day, keeping productivity high."
                            </p>
                        </div>

                        {/* Mascot 3 */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 group">
                            <div className="relative w-full aspect-square bg-sky-50 rounded-[1.5rem] overflow-hidden">
                                <Image src="/images/cat-bird.png" alt="Barnaby" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900">Barnaby</h4>
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Chief Whistling Director</p>
                            </div>
                            <p className="text-slate-600 text-sm italic">
                                "Keeps the team motivated by singing beautiful bird tunes starting at 5:00 AM."
                            </p>
                        </div>

                        {/* Mascot 4 */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 group">
                            <div className="relative w-full aspect-square bg-emerald-50 rounded-[1.5rem] overflow-hidden">
                                <Image src="/images/cat-rabbit.png" alt="Nibbles" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900">Nibbles</h4>
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Quality Control Inspector</p>
                            </div>
                            <p className="text-slate-600 text-sm italic">
                                "Inspects the crunchiness of all fresh organic lettuce and rabbit dry foods."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center relative overflow-hidden">
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl space-y-8">
                    <h3 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
                        Give your pet the <br />
                        <span className="text-primary">care and love</span> they deserve
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
                        Explore our selection of premium organic meals, schedule a vet consult, or speak to our custom pet nutritionists today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="h-14 px-10 rounded-2xl bg-primary text-white hover:bg-primary/95 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                            <Link href="/shop">
                                Shop Now
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-14 px-10 rounded-2xl border-2 border-slate-900 bg-white hover:bg-slate-50 text-slate-900 text-lg font-bold shadow-sm transition-all hover:scale-105 active:scale-95">
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
