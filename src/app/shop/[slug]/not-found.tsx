import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function ProductNotFound() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fffaf3]">
            <Header />
            <div className="h-24 bg-primary" />
            <section className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
                <h1 className="text-3xl font-black text-secondary">Product not found</h1>
                <p className="mt-3 max-w-md text-slate-600">This product link is unavailable. Browse the shop to find something for your pet.</p>
                <Link href="/shop" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-secondary px-6 font-bold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Back to shop</Link>
            </section>
            <Footer />
        </main>
    )
}
