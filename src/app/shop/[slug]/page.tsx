import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ChevronRight, Mail, Package } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductPurchase } from "@/components/products/ProductPurchase"
import { ProductCard } from "@/components/products/ProductCard"
import { PRODUCTS, CATALOG_DEMO_NOTE } from "@/lib/products"

type Props = { params: Promise<{ slug: string }> }
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

export function generateStaticParams() {
    return PRODUCTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const product = PRODUCTS.find(item => item.slug === slug)
    return product ? { title: `${product.name} | Pet Shop`, description: product.description } : { title: "Product not found | Pet Shop" }
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params
    const product = PRODUCTS.find(item => item.slug === slug)
    if (!product) notFound()
    const categoryHref = `/shop?category=${encodeURIComponent(product.category)}`
    const related = PRODUCTS.filter(item => item.id !== product.id && item.category === product.category)
    const inquiryHref = `mailto:hello@petshop.com?subject=${encodeURIComponent(`Product question: ${product.name}`)}&body=${encodeURIComponent(`Hello Pet Shop,\n\nI would like to ask about ${product.name}${product.packSize ? ` (${product.packSize})` : ""}.\nPlease confirm the full ingredient list, feeding guidance, available pack sizes, stock, and current price.\n\nThank you!`)}`
    const availability = product.availability === "in-stock" ? "In stock" : product.availability === "out-of-stock" ? "Out of stock" : "Availability to be confirmed"

    return (
        <div className="flex min-h-screen flex-col bg-[#fffaf3]/60">
            <Header />
            <div className="bg-primary pb-6 pt-28 text-white">
                <nav aria-label="Breadcrumb" className="container mx-auto px-4 md:px-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                        <li><Link href="/" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-white">Home</Link></li>
                        <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="h-4 w-4" /><Link href="/shop" className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-white">Shop</Link></li>
                        <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="h-4 w-4" /><Link href={categoryHref} className="rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-white">{product.category}</Link></li>
                        <li aria-current="page" className="flex min-w-0 items-start gap-2"><ChevronRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><span>{product.name}</span></li>
                    </ol>
                </nav>
            </div>
            <div className="container mx-auto flex-1 px-4 py-7 md:px-8 md:py-10">
                <Link href={categoryHref} className={`mb-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#B93800] ${focus}`}><ArrowLeft aria-hidden="true" className="h-4 w-4" />Back to {product.category}</Link>
                <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
                    <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-4 md:p-7">
                        <a href={product.image} target="_blank" rel="noopener noreferrer" aria-label={`Open larger package photo of ${product.name} in a new tab`} className={`relative block aspect-square rounded-2xl ${focus}`}>
                            <Image src={product.image} alt={`${product.name}, ${product.packSize ?? "pictured package"}`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-3" />
                        </a>
                        <p className="mt-3 text-center text-xs text-slate-500">Select the photo to view the original package image in a new tab.</p>
                    </div>
                    <section aria-labelledby="product-title" className="min-w-0 rounded-3xl border border-orange-100 bg-white p-5 md:p-7">
                        <Link href={categoryHref} className={`inline-block rounded text-xs font-bold uppercase tracking-wider text-[#B93800] ${focus}`}>{product.category}</Link>
                        <h1 id="product-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-secondary md:text-[28px]">{product.name}</h1>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{product.description}</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div className="flex flex-wrap justify-between gap-2 border-b border-slate-100 pb-3"><dt className="text-slate-500">Pack size</dt><dd className="font-semibold text-secondary">{product.packSize ?? "Ask about available sizes"}</dd></div>
                            <div className="flex flex-wrap justify-between gap-2"><dt className="text-slate-500">Stock status</dt><dd className="flex items-center gap-2 font-semibold text-secondary"><Package aria-hidden="true" className="h-4 w-4 text-[#B93800]" />{availability}</dd></div>
                        </dl>
                        <p className="mt-6 text-3xl font-black text-secondary">${product.price.toFixed(2)}<span className="ml-2 text-xs font-medium text-slate-500">Demo price</span></p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">{CATALOG_DEMO_NOTE}</p>
                        <ProductPurchase product={product} />
                        <a href={inquiryHref} className={`mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#B93800] ${focus}`}><Mail aria-hidden="true" className="h-4 w-4" />Ask about this product</a>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">Opens a draft in your email app. Adding to your cart does not reserve stock.</p>
                    </section>
                </div>
                <section aria-labelledby="product-information-title" className="mt-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7">
                    <h2 id="product-information-title" className="text-2xl font-black tracking-tight text-secondary">Before you choose</h2>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                        <div><h3 className="text-lg font-bold text-secondary">Ingredients</h3>{product.ingredients?.length ? <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">{product.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul> : <p className="mt-3 text-sm leading-relaxed text-slate-600">The full ingredient list has not been added yet. Ask our team for the current package label before choosing this food.</p>}</div>
                        <div><h3 className="text-lg font-bold text-secondary">Feeding guidance</h3><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">{product.feedingGuide ?? "The manufacturer’s feeding chart has not been added yet. Ask our team for the instructions for this exact product and pack."}</p></div>
                    </div>
                    <a href={inquiryHref} className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#B93800] ${focus}`}><Mail aria-hidden="true" className="h-4 w-4" />Request the label and feeding chart</a>
                </section>
                {related.length > 0 && <section aria-labelledby="related-products-title" className="mt-10"><h2 id="related-products-title" className="mb-5 text-2xl font-black tracking-tight text-secondary">More for your pet</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map(item => <ProductCard key={item.id} product={item} />)}</div></section>}
            </div>
            <Footer />
        </div>
    )
}
