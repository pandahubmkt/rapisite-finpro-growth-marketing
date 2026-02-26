import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-orange-500">FIN</span>PRO
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</Link>
          <Link href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</Link>
          <Link href="/portfolio" className="hover:text-orange-500 transition-colors">Portfólio</Link>
          <Link 
            href="https://wa.me/553298214116" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-all"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
