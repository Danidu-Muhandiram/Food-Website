"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Trash2, Minus, Plus, ArrowLeft, Check, Sparkles } from "lucide-react"

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Whole Paws Dry Chicken And Oats Recipe",
            category: "Cat Food",
            price: 36.99,
            quantity: 1,
            image: "/images/new-bag.png"
        },
        {
            id: 2,
            name: "Meow Mix Tender Centers Dry Cat Food, Salmon",
            category: "Cat Food",
            price: 30.20,
            quantity: 2,
            image: "/images/new-tin.png"
        }
    ])

    const [checkoutCompleted, setCheckoutCompleted] = useState(false)

    // Math calculations
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shippingCost = cartItems.length > 0 ? 5.99 : 0
    const taxCost = cartSubtotal * 0.08
    const totalCost = cartSubtotal + shippingCost + taxCost

    // Handlers
    const handleQtyChange = (id: number, delta: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta
                return newQty > 0 ? { ...item, quantity: newQty } : item
            }
            return item
        }))
    }

    const handleRemoveItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const handleCheckout = () => {
        setCheckoutCompleted(true)
        setCartItems([])
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Hero */}
            <section className="relative bg-secondary text-white pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Your Shopping <span className="text-primary">Cart</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Review your selections and proceed to checkout to treat your companions.
                    </p>
                </div>
            </section>

            {/* Cart Content */}
            <section className="py-20 bg-orange-50/20 flex-1">
                <div className="container mx-auto px-4 md:px-8">
                    {checkoutCompleted ? (
                        <div className="max-w-md mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl text-center space-y-6">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md animate-bounce">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-secondary">Order Placed!</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Thank you for your purchase. We have received your order request and are preparing it for delivery. A receipt has been sent to your registered email.
                            </p>
                            <Button asChild className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl shadow-lg">
                                <Link href="/shop" onClick={() => setCheckoutCompleted(false)}>
                                    Go Back Shopping
                                </Link>
                            </Button>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="max-w-md mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl text-center space-y-6">
                            <div className="w-16 h-16 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto shadow-md">
                                <ShoppingBag className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-secondary">Your Cart is Empty</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                You haven't added any products to your shopping cart yet. Browse our shop for premium organic treats and health foods.
                            </p>
                            <Button asChild className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl shadow-lg">
                                <Link href="/shop">
                                    Browse Shop Products
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            
                            {/* Items List (8 Columns) */}
                            <div className="lg:col-span-8 space-y-6">
                                <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                        <h3 className="text-xl font-black text-secondary flex items-center gap-2">
                                            <ShoppingBag className="w-6 h-6 text-primary" />
                                            <span>Cart Items ({cartCount})</span>
                                        </h3>
                                        <Link href="/shop" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                            <ArrowLeft className="w-3.5 h-3.5" />
                                            <span>Continue Shopping</span>
                                        </Link>
                                    </div>

                                    <div className="space-y-6 divide-y divide-slate-100">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex flex-col sm:flex-row gap-6 pt-6 first:pt-0">
                                                
                                                {/* Image */}
                                                <div className="relative w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex-shrink-0 flex items-center justify-center">
                                                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-grow space-y-3 flex flex-col justify-between">
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-black text-primary uppercase tracking-wider">{item.category}</span>
                                                        <h4 className="font-bold text-secondary text-base leading-tight">{item.name}</h4>
                                                    </div>

                                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                                        
                                                        {/* Quantity selector */}
                                                        <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
                                                            <button 
                                                                onClick={() => handleQtyChange(item.id, -1)}
                                                                className="w-8 h-8 rounded-lg hover:bg-white text-slate-500 hover:text-secondary flex items-center justify-center transition-colors cursor-pointer"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-8 text-center text-xs font-bold text-secondary">{item.quantity}</span>
                                                            <button 
                                                                onClick={() => handleQtyChange(item.id, 1)}
                                                                className="w-8 h-8 rounded-lg hover:bg-white text-slate-500 hover:text-secondary flex items-center justify-center transition-colors cursor-pointer"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>

                                                        {/* Price & Delete */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="text-right">
                                                                <p className="text-xs text-slate-400 font-bold">${item.price.toFixed(2)} each</p>
                                                                <p className="font-black text-secondary text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                                            </div>
                                                            <button 
                                                                onClick={() => handleRemoveItem(item.id)}
                                                                className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors cursor-pointer"
                                                                aria-label="Delete Item"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Summary Card (4 Columns) */}
                            <div className="lg:col-span-4 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-xl space-y-6">
                                <h3 className="text-xl font-black text-secondary border-b border-slate-100 pb-4">Order Summary</h3>
                                
                                <div className="space-y-3 text-sm text-slate-600">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-secondary">${cartSubtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Estimated Shipping</span>
                                        <span className="font-bold text-secondary">${shippingCost.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax (8%)</span>
                                        <span className="font-bold text-secondary">${taxCost.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-slate-100 my-2 pt-3 flex justify-between text-secondary font-black text-lg">
                                        <span>Grand Total</span>
                                        <span className="text-primary">${totalCost.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Button 
                                        onClick={handleCheckout}
                                        className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl shadow-lg transition-transform active:scale-[0.98]"
                                    >
                                        Proceed to Checkout
                                    </Button>
                                    <Button asChild variant="outline" className="w-full h-12 border-slate-200 hover:bg-slate-50 text-secondary rounded-2xl font-bold">
                                        <Link href="/shop">
                                            Keep Shopping
                                        </Link>
                                    </Button>
                                </div>

                                <div className="text-[10px] text-slate-400 leading-relaxed text-center">
                                    Your transactions are fully secured. We support standard major credit cards, PayPal, and Apple Pay.
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
