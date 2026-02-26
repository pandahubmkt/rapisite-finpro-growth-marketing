import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Services />

      {/* About Section */}
      <section id="sobre" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Por que a <span className="text-cyan-500">FinPro</span>?</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Transformamos marketing digital em um <strong>SISTEMA ESTRUTURADO</strong> de crescimento (Aquisição, Conversão, Retenção e Escala Previsível).
              </p>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Somos uma agência nichada em tráfego pago e posicionamento estratégico. Nosso foco não é apenas gerar cliques, mas construir uma arquitetura de vendas que funcione de forma consistente.
              </p>
              <ul className="space-y-4">
                {[
                  "Foco total em ROI e ROAS",
                  "Decisões baseadas em dados reais",
                  "Especialistas em Google e Meta Ads",
                  "Integração total com seu CRM"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <span className="text-cyan-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-600 to-cyan-900 rounded-3xl opacity-20 absolute inset-0 blur-3xl"></div>
              <div className="relative bg-slate-950 border border-white/10 p-12 rounded-3xl">
                <div className="text-6xl font-black text-cyan-500 mb-4">+R$ 10M</div>
                <div className="text-xl font-bold text-white mb-6">Gerenciados em tráfego pago</div>
                <p className="text-slate-400">Nossa experiência nos permite identificar oportunidades de escala onde outros veem apenas custos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-24 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              "Empresas que crescem não dependem de <span className="text-cyan-500">sorte</span>, dependem de <span className="text-cyan-500">processo</span> e decisão baseada em performance."
            </h2>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-cyan-600/5 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Pronto para o próximo nível?</h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Saia do amadorismo e tenha uma operação de growth marketing focada em dados e escala.
          </p>
          <Link 
            href="https://wa.me/553298214116" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all inline-block shadow-lg shadow-cyan-600/20"
          >
            Fale com um Especialista Agora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
