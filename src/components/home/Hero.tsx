"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cat, Dog, Heart, PawPrint } from "lucide-react"

const PET_VARIANTS = {
    dog: {
        label: "Dogs",
        image: "/images/new-dog.png",
        alt: "Happy beagle sitting beside its food",
        badge: ["More happy", "tail wags."],
        category: "Dog Food",
        cta: "Shop Dog Food",
        product: {
            title: "Roasted Chicken",
            subtitle: "Adult Dog Food",
            image: "/images/new-bag.png",
            price: 26.99,
            query: "Roasted Chicken",
        },
    },
    cat: {
        label: "Cats",
        image: "/images/hero-cat-waving.png",
        alt: "Orange tabby cat raising a paw",
        badge: ["More purrs.", "More joy."],
        category: "Cat Food",
        cta: "Shop Cat Food",
        product: {
            title: "Salmon Recipe",
            subtitle: "Adult Cat Food",
            image: "/images/hero-cat-food.png",
            price: 30.20,
            query: "Salmon",
        },
    },
} as const

const PET_TYPES = ["dog", "cat"] as const
const AUTO_SWITCH_DELAY = 6000
type PetType = typeof PET_TYPES[number]

function TrustMessage({ className }: { className: string }) {
    return (
        <div className={`${className} items-center gap-3 border-t border-white/20 text-white`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-secondary md:h-9 md:w-9"><Heart aria-hidden="true" className="h-4 w-4" /></span>
            <div>
                <p className="text-sm font-bold md:text-base">Good food. Happy pets.</p>
                <p className="mt-0.5 text-xs text-white/90 md:text-sm">For the little moments that mean everything.</p>
            </div>
        </div>
    )
}

function PetSelector({ activePet, onSelect, className }: { activePet: PetType; onSelect: (type: PetType) => void; className: string }) {
    return (
        <div role="group" aria-label="Choose your pet type" className={`${className} z-30 gap-2`}>
            {PET_TYPES.map(type => {
                const Icon = type === "dog" ? Dog : Cat
                return (
                    <button
                        key={type}
                        type="button"
                        aria-pressed={activePet === type}
                        onClick={() => onSelect(type)}
                        className={`flex h-11 min-w-[88px] shrink-0 items-center justify-center gap-2 rounded-xl border px-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:h-20 lg:w-20 lg:min-w-0 lg:flex-col lg:rounded-2xl lg:px-0 ${activePet === type ? "border-[#fffaf3] bg-[#fffaf3] text-secondary shadow-sm" : "border-white/30 bg-white/[0.06] text-white hover:border-white/60 hover:bg-white/15"}`}
                    >
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 lg:h-7 lg:w-7" />
                        <span className="leading-none">{PET_VARIANTS[type].label}</span>
                    </button>
                )
            })}
        </div>
    )
}

export function Hero() {
    const [activePet, setActivePet] = useState<PetType>("dog")
    const [isHovered, setIsHovered] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)
    const [isPageVisible, setIsPageVisible] = useState(true)
    const [reducedMotion, setReducedMotion] = useState(true)
    const [selectionVersion, setSelectionVersion] = useState(0)
    const pet = PET_VARIANTS[activePet]

    useEffect(() => {
        const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
        const syncMotion = () => setReducedMotion(motionPreference.matches)
        const syncVisibility = () => setIsPageVisible(!document.hidden)

        syncMotion()
        syncVisibility()
        motionPreference.addEventListener("change", syncMotion)
        document.addEventListener("visibilitychange", syncVisibility)

        return () => {
            motionPreference.removeEventListener("change", syncMotion)
            document.removeEventListener("visibilitychange", syncVisibility)
        }
    }, [])

    useEffect(() => {
        if (isHovered || hasFocus || !isPageVisible || reducedMotion) return

        const timer = window.setTimeout(() => {
            setActivePet(current => PET_TYPES[(PET_TYPES.indexOf(current) + 1) % PET_TYPES.length])
        }, AUTO_SWITCH_DELAY)

        return () => window.clearTimeout(timer)
    }, [activePet, isHovered, hasFocus, isPageVisible, reducedMotion, selectionVersion])

    const selectPet = (type: PetType) => {
        setActivePet(type)
        setSelectionVersion(version => version + 1)
    }

    return (
        <section
            className="relative isolate overflow-hidden bg-primary pb-6 pt-20 md:flex md:min-h-svh md:items-center md:pt-22"
            style={{ backgroundImage: "radial-gradient(ellipse at 72% 36%, #ff762a 0%, #ff5710 42%, #ff4d00 78%)" }}
            onPointerEnter={event => { if (event.pointerType !== "touch") setIsHovered(true) }}
            onPointerLeave={() => setIsHovered(false)}
            onFocusCapture={() => setHasFocus(true)}
            onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false) }}
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23fff' filter='url(%23grain)' d='M0 0h180v180H0z'/%3E%3C/svg%3E")` }} />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-12 h-64 w-64 rounded-full border-[24px] border-white/[0.03] md:-right-28 md:-top-48 md:h-[440px] md:w-[440px] md:border-[40px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-[480px] -rotate-12 rounded-[50%] bg-white/[0.035]" />
            <div className="container relative mx-auto w-full px-4 md:px-8">
                <PetSelector activePet={activePet} onSelect={selectPet} className="absolute right-8 top-0 hidden lg:flex" />
                <div className="grid items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
                    <div className="relative z-20 flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white md:mb-4 md:text-sm">
                            <PawPrint aria-hidden="true" className="h-3.5 w-3.5 text-accent md:h-4 md:w-4" />
                            A LITTLE LOVE IN EVERY BOWL
                        </div>
                        <h1 className="text-[clamp(2.5rem,11vw,3.25rem)] font-black leading-[1.07] tracking-[-0.04em] text-white md:text-[clamp(2.5rem,4.4vw,3.75rem)]">
                            Keep your<br /><span className="text-secondary">best friend</span><br />healthy.
                        </h1>
                        <p className="mt-3 max-w-sm text-base leading-relaxed text-white/95 md:mt-6 md:text-lg">
                            Real ingredients. Balanced nutrition.<br className="hidden lg:block" /> More happy tail wags.
                        </p>
                        <div className="mt-4 flex w-full items-center justify-center gap-3 md:mt-5 md:w-auto md:flex-wrap md:justify-start">
                            <Link href={`/shop?category=${encodeURIComponent(pet.category)}`} className="group inline-flex min-h-12 min-w-[158px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-secondary px-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-[translate,background-color,box-shadow] duration-200 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/15 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none md:min-w-[184px] md:gap-3 md:px-5 md:text-base">
                                {pet.cta} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                            </Link>
                            <Link href="/shop" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-1 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:rounded-2xl md:border md:border-white/30 md:bg-white/5 md:px-4 md:text-base md:hover:border-white/60 md:hover:bg-white/15">
                                <span className="md:hidden">All products</span><span className="hidden md:inline">Explore Our Products</span> <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                            </Link>
                        </div>
                        <TrustMessage className="mt-5 hidden pt-4 md:flex" />
                    </div>
                    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[480px] md:h-[clamp(320px,calc(100svh-144px),460px)] lg:mx-0 lg:translate-x-4">
                        <div className="relative h-[240px] sm:h-[300px] md:absolute md:inset-0 md:h-auto">
                            <PetSelector activePet={activePet} onSelect={selectPet} className="absolute bottom-3 right-0 flex flex-col md:-right-4 md:bottom-4 lg:hidden" />
                            <div aria-hidden="true" className="absolute left-1/2 top-[12%] aspect-square h-[85%] -translate-x-1/2 rounded-full bg-white/[0.09] lg:left-[calc(50%-24px)]" />
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/20 lg:-translate-x-6">
                                <PawPrint strokeWidth={1.5} className="absolute right-[2%] top-[10%] h-3.5 w-3.5 rotate-[-135deg] sm:h-6 sm:w-6" />
                                <PawPrint strokeWidth={1.5} className="absolute right-[10%] top-[20%] h-3.5 w-3.5 rotate-[-120deg] sm:h-6 sm:w-6" />
                                <PawPrint strokeWidth={1.5} className="absolute right-[18%] top-[30%] h-3.5 w-3.5 rotate-[-140deg] sm:h-6 sm:w-6" />
                            </div>
                            <div aria-hidden="true" className="absolute bottom-2 left-1/2 h-4 w-[46%] -translate-x-1/2 rounded-[100%] bg-secondary/15 blur-xl md:bottom-12 md:h-8 md:w-[56%] md:bg-secondary/20 md:blur-2xl lg:left-[calc(50%-24px)]" />
                            <div className="absolute bottom-4 left-16 right-20 top-8 -translate-y-1 origin-bottom scale-[1.04] sm:inset-x-12 sm:top-0 md:bottom-12 md:-translate-y-3 md:scale-[1.12] lg:-translate-x-6">
                                {PET_TYPES.map(type => (
                                    <div key={type} aria-hidden={activePet !== type} className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${activePet === type ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                                        <Image
                                            src={PET_VARIANTS[type].image}
                                            alt={PET_VARIANTS[type].alt}
                                            fill
                                            sizes="(max-width: 639px) 220px, (max-width: 767px) 300px, 50vw"
                                            className={`hero-pet-float object-contain object-bottom drop-shadow-xl ${type === "cat" ? "[mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]" : ""}`}
                                            priority
                                        />
                                    </div>
                                ))}
                            </div>
                            <div aria-hidden="true" className="hero-badge-float absolute left-0 top-0 z-10 flex w-[112px] -rotate-6 items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-2 py-2 text-white md:hidden lg:-left-24 lg:top-[28%] lg:flex lg:w-[180px] lg:-translate-y-5 lg:gap-3 lg:px-4 lg:py-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-secondary lg:h-10 lg:w-10"><PawPrint className="h-3.5 w-3.5 lg:h-5 lg:w-5" /></span>
                                <p key={activePet} className="hero-content-enter text-xs font-bold leading-snug lg:text-base">{pet.badge[0]}<br />{pet.badge[1]}</p>
                            </div>
                            <svg aria-hidden="true" className="pointer-events-none absolute left-3 top-[26%] h-14 w-24 text-accent md:hidden lg:-left-4 lg:top-[43%] lg:block lg:h-24 lg:w-40" viewBox="0 0 160 96" fill="none">
                                <path className="hero-arrow-stroke hero-arrow-shaft" pathLength={1} d="M16 12C4 79 98 88 148 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <path className="hero-arrow-stroke hero-arrow-tip" pathLength={1} d="M129 20L148 14L144 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg
                                aria-hidden="true"
                                className="pointer-events-none absolute bottom-2 left-0 z-10 h-14 w-12 -rotate-6 text-[#FFF4DE]/80 md:hidden xl:-left-28 xl:bottom-auto xl:top-[56%] xl:block xl:h-24 xl:w-[88px]"
                                viewBox="0 0 100 108"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M51 27C48 24 39 19 39 13C39 7 47 6 51 12C55 6 63 7 63 13C63 19 54 24 51 27Z" />
                                <path d="M15 60L22 84Q49 95 78 84L85 60" />
                                <ellipse cx="50" cy="59" rx="36" ry="8" />
                                <ellipse cx="29" cy="47" rx="5" ry="3.5" transform="rotate(-20 29 47)" />
                                <path d="M43 40L49 38L53 44L48 49L42 46Z" />
                                <ellipse cx="66" cy="47" rx="5" ry="3.5" transform="rotate(25 66 47)" />
                                <path d="M32 82Q50 88 68 82" opacity="0.5" />
                            </svg>
                        </div>
                        <Link href={`/shop?query=${encodeURIComponent(pet.product.query)}`} className="group relative z-10 flex w-full items-center gap-3 rounded-2xl border border-white/80 bg-[#fffaf3] p-3 shadow-[0_18px_50px_-16px_rgba(92,34,10,0.24)] transition-[translate,box-shadow] duration-300 ease-out hover:shadow-[0_24px_64px_-16px_rgba(92,34,10,0.22)] focus-visible:shadow-[0_24px_64px_-16px_rgba(92,34,10,0.22)] motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none md:absolute md:-bottom-3 md:right-0 md:w-[320px] md:max-w-full md:gap-4 md:rounded-3xl md:p-4 lg:-right-6 xl:-right-[108px]">
                            <div className="relative h-20 w-14 shrink-0 md:h-[150px] md:w-[94px]">
                                {PET_TYPES.map(type => (
                                    <Image key={type} src={PET_VARIANTS[type].product.image} alt={activePet === type ? `${pet.product.title} ${pet.product.subtitle} pack` : ""} fill sizes="(max-width: 767px) 56px, 94px" loading="eager" className={`object-contain transition-opacity duration-300 motion-reduce:transition-none ${activePet === type ? "opacity-100" : "opacity-0"}`} />
                                ))}
                            </div>
                            <div key={activePet} className="hero-content-enter min-w-0 flex-1 text-secondary">
                                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary md:text-xs">On the menu</p>
                                <h2 className="text-sm font-bold leading-snug md:mt-1 md:text-base">{pet.product.title}<br />{pet.product.subtitle}</h2>
                                <div className="mt-2 flex items-center justify-between gap-2 md:mt-3"><span className="text-xl font-black tracking-tight md:text-2xl">${pet.product.price.toFixed(2)}</span><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-md transition-[transform,background-color] duration-200 group-hover:bg-primary group-focus-visible:bg-primary motion-safe:group-hover:scale-105 motion-reduce:transition-none md:h-11 md:w-11"><ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none md:h-5 md:w-5" /></span></div>
                            </div>
                        </Link>
                    </div>
                    <TrustMessage className="flex pt-3 md:hidden" />
                </div>
            </div>
        </section>
    )
}
