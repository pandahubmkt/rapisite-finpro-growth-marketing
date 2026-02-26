import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-600/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Growth, Performance e <span className="text-orange-500">Previsibilidade</span> em Escala.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Não trabalhamos apenas com anúncios: colocamos sua marca diante do público certo, no momento certo. Integramos CRM, APIs de conversão e ferramentas de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://wa.me/553298214116" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg shadow-orange-600/20"
              >
                Falar com Especialista
              </Link>
              <Link 
                href="#metodo" 
                className="border border-white/20 hover:border-orange-500 hover:text-orange-500 text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
              >
                Conhecer o Método FP
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 relative hidden md:block">
            <div className="absolute inset-0 bg-orange-600/20 blur-3xl rounded-full"></div>
            <Image 
              src="/logo.jpg" 
              alt="FinPro" 
              width={400} 
              height={400} 
              className="rounded-3xl relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
