import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, PawPrint, Star } from "lucide-react"

export function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-primary pb-10 pt-24 md:flex md:min-h-svh md:items-center md:pb-6 md:pt-22" style={{ backgroundImage: "radial-gradient(ellipse at 72% 36%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23fff' filter='url(%23grain)' d='M0 0h180v180H0z'/%3E%3C/svg%3E")` }} />
            <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-48 h-[440px] w-[440px] rounded-full border-[40px] border-white/[0.04]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-[480px] -rotate-12 rounded-[50%] bg-white/[0.035]" />
            <div className="container relative mx-auto w-full px-4 md:px-8">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
                    <div className="relative z-20 flex flex-col items-start">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-bold tracking-wide text-white">
                            <PawPrint aria-hidden="true" className="h-4 w-4 text-accent" />
                            A LITTLE LOVE IN EVERY BOWL
                        </div>
                        <h1 className="text-[clamp(2.5rem,4.4vw,3.75rem)] font-black leading-[1.07] tracking-[-0.04em] text-white">
                            Keep your<br /><span className="text-secondary">best friend</span><br />healthy.
                        </h1>
                        <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/95">
                            Real ingredients. Balanced nutrition.<br className="hidden lg:block" /> More happy tail wags.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
                            <Link href="/shop?query=dog" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-secondary px-5 text-base font-bold text-white shadow-lg shadow-black/10 transition-[transform,background-color,box-shadow] duration-200 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/15 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
                                Shop Dog Food <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
                            </Link>
                            <Link href="/shop" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-4 text-base font-bold text-white transition-colors hover:border-white/60 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                Explore Our Products <ArrowRight aria-hidden="true" className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4 text-white">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-secondary"><Heart aria-hidden="true" className="h-4 w-4" /></span>
                            <div><p className="text-base font-bold">Good food. Happy pets.</p><p className="mt-0.5 text-sm text-white/90">For the little moments that mean everything.</p></div>
                        </div>
                    </div>
                    <div className="relative mx-auto h-[360px] w-full max-w-[480px] sm:h-[400px] md:h-[clamp(320px,calc(100svh-144px),460px)] lg:mx-0 lg:translate-x-4">
                        <div aria-hidden="true" className="absolute left-1/2 top-[12%] aspect-square h-[85%] -translate-x-1/2 rounded-full bg-white/[0.09]" />
                        <div aria-hidden="true" className="absolute bottom-16 left-1/2 h-6 w-[52%] -translate-x-1/2 rounded-[100%] bg-secondary/15 blur-xl" />
                        <div className="absolute inset-x-8 bottom-12 top-0 -translate-y-3 origin-bottom scale-[1.12] sm:inset-x-12">
                            <Image src="/images/new-dog.png" alt="Happy beagle sitting beside its food" fill sizes="(max-width: 767px) 95vw, 50vw" className="object-contain object-bottom drop-shadow-xl" priority />
                        </div>
                        <div aria-hidden="true" className="absolute -left-12 top-[28%] z-10 hidden -rotate-6 items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white lg:flex">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-secondary"><PawPrint className="h-5 w-5" /></span>
                            <p className="text-base font-bold leading-snug">More happy<br />tail wags.</p>
                        </div>
                        <svg aria-hidden="true" className="absolute -left-1 top-[49%] hidden h-20 w-28 text-accent lg:block" viewBox="0 0 112 80" fill="none">
                            <path d="M10 8C3 49 49 69 99 33M81 33L100 31L96 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href="/shop?query=Roasted%20Chicken" className="group absolute bottom-0 right-0 z-10 flex w-[320px] max-w-full items-center gap-4 rounded-3xl border border-white/80 bg-[#fffaf3] p-4 shadow-[0_18px_50px_-16px_rgba(92,34,10,0.24)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_22px_55px_-14px_rgba(92,34,10,0.3)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none lg:-right-16">
                            <div className="relative h-32 w-20 shrink-0"><Image src="/images/new-bag.png" alt="Roasted chicken dog food pack" fill sizes="80px" className="object-contain" /></div>
                            <div className="flex-1 text-secondary">
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">On the menu</p>
                                <h2 className="mt-1 text-base font-bold leading-snug">Roasted Chicken<br />Adult Dog Food</h2>
                                <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-slate-600"><Star aria-hidden="true" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /><span><span className="sr-only">Rated </span>4.8<span className="sr-only"> out of 5</span> / 5</span></p>
                                <div className="mt-3 flex items-center justify-between gap-2"><span className="text-2xl font-black tracking-tight">$26.99</span><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-md transition-[transform,background-color] duration-200 group-hover:bg-primary group-focus-visible:bg-primary motion-safe:group-hover:scale-105 motion-reduce:transition-none"><ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" /></span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
