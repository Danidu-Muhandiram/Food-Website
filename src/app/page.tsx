import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { TopCategories } from "@/components/home/TopCategories";
import { PopularProducts } from "@/components/home/PopularProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TopCategories />
      <PopularProducts />
    </main>
  );
}
