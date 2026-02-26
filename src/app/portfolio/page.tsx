import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const cases = [
    {
      title: "Escritório de Advocacia Criminal",
      result: "Redução de 65% no Custo por Lead",
      details: "Implementação de rastreamento avançado e segmentação por intenção no Google Ads.",
      stats: ["+120 leads/mês", "ROAS 4.8x"]
    },
    {
      title: "Banca Especializada em Direito Civil",
      result: "Aumento de 300% em Consultas Agendadas",
      details: "Estruturação de funil de conversão com Landing Pages de alta performance e CRM.",
      stats: ["90% conversão lead/agendamento", "ROI Mensurável"]
    },
    {
      title: "Agência de Marketing Jurídico",
      result: "Escala de Operação em 3 Estados",
      details: "Uso do Método FP para estruturar fundamentos e escalar investimentos de forma previsível.",
      stats: ["Crescimento 2.5x em 6 meses", "Foco em LTV"]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">Resultados que <span className="text-cyan-400 italic">falam por si.</span></h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
              Não entregamos apenas números. Entregamos crescimento de faturamento, previsibilidade de agenda e autoridade de marca para advogados de elite.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 mt-20">
            {cases.map((item, index) => (
              <div key={index} className="bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row group transition-all hover:border-cyan-500/20">
                <div className="md:w-1/3 bg-slate-900 p-12 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="text-6xl group-hover:scale-110 transition-transform">⚖️</div>
                </div>
                <div className="md:w-2/3 p-8 md:p-16">
                  <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">{item.result}</h3>
                  <h2 className="text-3xl font-bold mb-6 group-hover:text-cyan-400 transition-colors text-white">{item.title}</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {item.details}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {item.stats.map((stat, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cyan-600 text-white">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Quer resultados como estes?</h2>
            <p className="text-xl mb-12 font-medium opacity-90 max-w-xl mx-auto text-cyan-50">
              Seu escritório está a um passo de se tornar uma máquina de geração de clientes qualificados.
            </p>
            <Link 
              href="https://wa.me/553298214116" 
              className="bg-slate-950 text-cyan-400 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all inline-block shadow-2xl shadow-black/20"
            >
              Agendar Diagnóstico Gratuito
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
