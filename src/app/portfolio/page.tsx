import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      name: "Silva & Associados",
      category: "Advocacia Full Service",
      impact: "+150% em leads qualificados no primeiro trimestre.",
      image: "🏛️"
    },
    {
      name: "Melo Consultoria Tributária",
      category: "Consultoria",
      impact: "Rebranding completo e posicionamento premium.",
      image: "📊"
    },
    {
      name: "Advocacia Digital 360",
      category: "Direito Digital",
      impact: "Implementação de funil de vendas automatizado.",
      image: "💻"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nosso <span className="text-orange-500">Portfólio</span></h1>
            <p className="text-gray-400 text-lg">Resultados reais para clientes reais. Veja como transformamos a presença digital e o faturamento de nossos parceiros.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden hover:border-orange-500 transition-all">
                <div className="h-48 bg-orange-600/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-8">
                  <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                  <p className="text-gray-400 mb-6">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-orange-600 to-orange-800 text-center">
            <h2 className="text-3xl font-bold mb-6">Quer ser o nosso próximo case de sucesso?</h2>
            <Link 
              href="https://wa.me/553298214116" 
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-all inline-block"
            >
              Iniciar meu projeto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
