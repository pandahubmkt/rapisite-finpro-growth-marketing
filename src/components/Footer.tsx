import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-black text-white tracking-tighter">
              <span className="text-orange-500">FIN</span>PRO
            </Link>
            <p className="text-gray-500 mt-2 text-sm max-w-xs">Performance, Growth e Escala Baseada em Dados.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="#metodo" className="hover:text-orange-500 transition-colors">Método FP</Link>
            <Link href="/portfolio" className="hover:text-orange-500 transition-colors">Cases</Link>
            <Link href="https://wa.me/553298214116" className="hover:text-orange-500 transition-colors">Contato</Link>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Finpro Growth Marketing. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
