import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/10 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para escalar seu escritório?</h2>
          <Link 
            href="https://wa.me/553298214116" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all inline-block"
          >
            Fale com um Especialista Agora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
