import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-600/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Impulsionando <span className="text-orange-500">Credibilidade</span> & Resultados para <span className="text-orange-500">Advogados</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            A Finpro Growth Marketing é especializada em elevar o posicionamento de escritórios de advocacia e consultorias através de estratégias de growth marketing de alto impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#servicos" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Nossos Serviços
            </Link>
            <Link 
              href="/portfolio" 
              className="border border-white/20 hover:border-orange-500 hover:text-orange-500 text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
