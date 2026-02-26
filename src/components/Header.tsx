import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.jpg" 
            alt="FinPro Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
          <span className="text-2xl font-black text-white tracking-tighter hidden sm:block">
            <span className="text-cyan-500">FIN</span>PRO
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold uppercase tracking-wider">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="#metodo" className="hover:text-cyan-400 transition-colors">Método FP</Link>
          <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Cases</Link>
          <Link href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</Link>
          <Link 
            href="https://wa.me/553298214116" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full transition-all"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
