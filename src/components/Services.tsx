export default function Services() {
  const steps = [
    {
      title: "FUNDAMENTOS",
      description: "A base que sustenta o crescimento. Trabalhamos Posicionamento, Arquitetura de Funil e Rastreamento de Dados preciso.",
      icon: "🏗️"
    },
    {
      title: "PERFORMANCE",
      description: "Aquisição e Conversão em alto nível. Gestão estratégica de Meta/Google Ads com foco total em Otimização de CPA e ROAS.",
      icon: "📈"
    },
    {
      title: "ESCALA",
      description: "Previsibilidade baseada em dados reais. Gestão de base, Remarketing, LTV e escala sustentável para o seu negócio.",
      icon: "📊"
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Método <span className="text-cyan-400">FP</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Nossa metodologia exclusiva para transformar marketing em um sistema estruturado de crescimento previsível.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-cyan-600/10 transition-all"></div>
              <div className="text-4xl mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors text-white">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
