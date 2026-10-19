import type { CartProduct } from "@/lib/cart"

export type Product = CartProduct & {
    slug: string
    description: string
    ingredients?: string[]
    feedingGuide?: string
    availability?: "in-stock" | "out-of-stock"
    rating: number
    packSize?: string
    originalPrice?: number
    badge?: string | null
    badgeColor?: string
}

export const PRODUCTS: Product[] = [
    {
        id: 101,
        slug: "whiskas-junior-ocean-fish",
        description: "Ocean fish flavour dry cat food from the Whiskas Junior range. The pictured pack is labelled for mothers and kittens aged 2 to 12 months.",
        name: "Whiskas Junior Ocean Fish Dry Cat Food",
        category: "Cat Food",
        price: 36.99,
        rating: 4.9,
        image: "/images/products/whiskas-junior-ocean-fish-original.webp",
        packSize: "1.1 kg",
    },
    {
        id: 102,
        slug: "me-o-mackerel-adult",
        description: "Mackerel flavour cat food from the Me-O Adult range. Ask our team about the pack sizes currently available.",
        name: "Me-O Mackerel Adult Cat Food",
        category: "Cat Food",
        price: 30.20,
        rating: 4.9,
        image: "/images/products/me-o-mackerel-adult-original.webp",
    },
    {
        id: 103,
        slug: "vitakraft-menu-budgerigar",
        description: "Vitakraft Menu bird food labelled for budgerigars, with herbs. The pictured pack contains 650 g.",
        name: "Vitakraft Menu Budgerigar Food",
        category: "Bird Food",
        price: 12.00,
        rating: 4.9,
        image: "/images/products/vitakraft-menu-bird-food-original.webp",
        packSize: "650 g",
    },
    {
        id: 104,
        slug: "oxbow-essentials-adult-rabbit",
        description: "Oxbow Essentials food labelled for adult rabbits. The pictured pack lists timothy hay as its first ingredient; the complete ingredient list is awaiting confirmation.",
        name: "Oxbow Essentials Adult Rabbit Food",
        category: "Rabbit Food",
        price: 27.00,
        rating: 4.9,
        image: "/images/products/oxbow-essentials-adult-rabbit-original.webp",
        packSize: "5 lb (2.25 kg)",
    },
    {
        id: 105,
        slug: "tetramin-tropical-flakes",
        description: "TetraMin Tropical Flakes fish food. Ask our team about the container sizes currently available.",
        name: "TetraMin Tropical Flakes Fish Food",
        category: "Fish Food",
        price: 25.99,
        rating: 4.9,
        image: "/images/products/tetramin-tropical-flakes-original.jpg",
    },
    {
        id: 106,
        slug: "drools-chicken-egg-adult",
        description: "Chicken and egg dry dog food from the Drools Adult Nutrition range. The pictured pack contains 400 g.",
        name: "Drools Chicken & Egg Adult Dog Food",
        category: "Dog Food",
        price: 26.99,
        rating: 4.8,
        image: "/images/products/drools-chicken-and-egg-adult-original.webp",
        packSize: "400 g",
    },
    {
        id: 107,
        slug: "pedigree-adult-chicken-vegetables",
        description: "Chicken and vegetables dog food from the Pedigree Adult range. The pictured pack contains 10 kg.",
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

export const productHref = (product: Pick<Product, "slug">) => `/shop/${product.slug}`
