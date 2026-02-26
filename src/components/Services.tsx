export default function Services() {
  const services = [
    {
      title: "Marketing Jurídico",
      description: "Estratégias de conteúdo e tráfego pago em total conformidade com o código de ética da OAB.",
      icon: "⚖️"
    },
    {
      title: "Growth Consulting",
      description: "Otimização de processos internos e captação de clientes qualificados para sua consultoria.",
      icon: "🚀"
    },
    {
      title: "Branding & Portfólio",
      description: "Criação de identidade visual e portfólios que transmitem autoridade e confiança imediata.",
      icon: "🎨"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços <span className="text-orange-500">Especializados</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluções pensadas exclusivamente para o setor jurídico e consultivo, focadas em crescimento sustentável.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-orange-500/50 transition-all group">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
