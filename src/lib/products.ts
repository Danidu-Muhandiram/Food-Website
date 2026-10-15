import type { CartProduct } from "@/lib/cart"

export type Product = CartProduct & {
    rating: number
    originalPrice?: number
    badge?: string | null
    badgeColor?: string
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Whole Paws Dry Chicken And Oats Recipe",
        category: "Cat Food",
        price: 36.99,
        rating: 4.9,
        image: "/images/new-bag.png",
        badge: "Best Seller",
        badgeColor: "bg-emerald-500",
    },
    {
        id: 2,
        name: "Meow Mix Tender Centers Dry Cat Food, Salmon",
        category: "Cat Food",
        price: 30.20,
        rating: 4.9,
        image: "/images/new-tin.png",
    },
    {
        id: 3,
        name: "Kaytee Wild Bird Food Nut & Fruit Seed Blend",
        category: "Bird Food",
        price: 12.00,
        originalPrice: 18.00,
        rating: 4.9,
        image: "/images/new-bag.png",
    },
    {
        id: 4,
        name: "Kaytee Food From The Wild Natural Snack For Pet Rabbits",
        category: "Rabbit Food",
        price: 27.00,
        rating: 4.9,
        image: "/images/new-bag.png",
    },
    {
        id: 5,
        name: "Goldfish Flakes 7.06 Ounces, Balanced Diet, With Algae",
        category: "Fish Food",
        price: 25.99,
        originalPrice: 50.99,
        rating: 4.9,
        image: "/images/new-tin.png",
    },
    {
        id: 6,
        name: "Nutrition Adult Dry Dog Food Roasted Chicken",
        category: "Dog Food",
        price: 26.99,
        rating: 4.8,
        image: "/images/new-bag.png",
    },
]
