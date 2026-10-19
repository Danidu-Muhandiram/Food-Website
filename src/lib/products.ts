import type { CartProduct } from "@/lib/cart"

export type Product = CartProduct & {
    rating: number
    packSize?: string
    originalPrice?: number
    badge?: string | null
    badgeColor?: string
}

export const PRODUCTS: Product[] = [
    {
        id: 101,
        name: "Whiskas Junior Ocean Fish Dry Cat Food",
        category: "Cat Food",
        price: 36.99,
        rating: 4.9,
        image: "/images/products/whiskas-junior-ocean-fish-original.webp",
        packSize: "1.1 kg",
    },
    {
        id: 102,
        name: "Me-O Mackerel Adult Cat Food",
        category: "Cat Food",
        price: 30.20,
        rating: 4.9,
        image: "/images/products/me-o-mackerel-adult-original.webp",
    },
    {
        id: 103,
        name: "Vitakraft Menu Budgerigar Food",
        category: "Bird Food",
        price: 12.00,
        rating: 4.9,
        image: "/images/products/vitakraft-menu-bird-food-original.webp",
        packSize: "650 g",
    },
    {
        id: 104,
        name: "Oxbow Essentials Adult Rabbit Food",
        category: "Rabbit Food",
        price: 27.00,
        rating: 4.9,
        image: "/images/products/oxbow-essentials-adult-rabbit-original.webp",
        packSize: "5 lb (2.25 kg)",
    },
    {
        id: 105,
        name: "TetraMin Tropical Flakes Fish Food",
        category: "Fish Food",
        price: 25.99,
        rating: 4.9,
        image: "/images/products/tetramin-tropical-flakes-original.jpg",
    },
    {
        id: 106,
        name: "Drools Chicken & Egg Adult Dog Food",
        category: "Dog Food",
        price: 26.99,
        rating: 4.8,
        image: "/images/products/drools-chicken-and-egg-adult-original.webp",
        packSize: "400 g",
    },
    {
        id: 107,
        name: "Pedigree Adult Chicken & Vegetables Dog Food",
        category: "Dog Food",
        price: 39.99,
        rating: 4.8,
        image: "/images/products/pedigree-adult-chicken-vegetables-original.webp",
        packSize: "10 kg",
    },
]

// Preview values only; replace pricing and ratings with verified catalog data.
export const CATALOG_DEMO_NOTE = "Demo prices and ratings. Contact us for current pricing and availability."
