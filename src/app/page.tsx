import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
