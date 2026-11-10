import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, BookmarkCheck } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    { id: 'hero', number: '00', title: 'Abertura 3D Swoosh' },
    { id: 'introducao', number: '01', title: 'A Construção de um Império' },
    { id: 'problematizacao', number: '02', title: 'A Pergunta Central' },
    { id: 'capitulo-01', number: '03', title: 'Capítulo 01 — O Poder da Marca' },
    { id: 'capitulo-02', number: '04', title: 'Capítulo 02 — Marketing Esportivo' },
    { id: 'capitulo-03', number: '05', title: 'Capítulo 03 — Publicidade & Redes' },
    { id: 'capitulo-04', number: '06', title: 'Capítulo 04 — Estratégias de Vendas' },
    { id: 'capitulo-05', number: '07', title: 'Capítulo 05 — Marketing Emocional' },
    { id: 'capitulo-06', number: '08', title: 'Capítulo 06 — Público-Alvo' },
    { id: 'capitulo-07', number: '09', title: 'Capítulo 07 — A Influência de Jordan' },
    { id: 'capitulo-08', number: '10', title: 'Capítulo 08 — Nike vs Adidas' },
    { id: 'capitulo-09', number: '11', title: 'Capítulo 09 — Inovação & Fidelização' },
    { id: 'conclusao', number: '12', title: 'Conclusão — More Than a Product' },
    { id: 'referencias', number: '13', title: 'Fontes & Referências' },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Sub-tag */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollTo('hero')}>
            <svg
              className="w-10 h-10 fill-current text-white hover:opacity-80 transition-opacity"
              viewBox="0 0 24 24"
            >
              <path d="M21.707 5.293c-.266-.266-.694-.287-.984-.047C17.65 7.818 12.87 9.8 8.5 9.8c-2.45 0-4.5-.66-6.1-1.95a.75.75 0 0 0-1.19.78C2.5 13.5 6.5 17 12 17c4.66 0 8.7-2.6 10.15-7.85.12-.44-.06-.91-.44-1.15z" />
            </svg>
            <div className="hidden sm:block border-l border-white/20 pl-4">
              <span className="font-display tracking-widest text-xs uppercase block text-white">
                NIKE BRAND STUDY
              </span>
              <span className="text-[10px] tracking-wider text-nike-gray font-mono block">
                GLOBAL MARKETING STRATEGY
              </span>
            </div>
          </div>

          {/* Center Navigation Shortcuts */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-wider text-nike-gray">
            <button
              onClick={() => scrollTo('introducao')}
              className="hover:text-white transition-colors"
            >
              História
            </button>
            <button
              onClick={() => scrollTo('problematizacao')}
              className="hover:text-white transition-colors"
            >
              Problema Central
            </button>
            <button
              onClick={() => scrollTo('capitulo-01')}
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>9 Pilares</span>
              <span className="bg-white/10 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">09</span>
            </button>
            <button
              onClick={() => scrollTo('capitulo-08')}
              className="hover:text-white transition-colors text-white/90"
            >
              Nike vs Adidas
            </button>
            <button
              onClick={() => scrollTo('conclusao')}
              className="hover:text-white transition-colors"
            >
              Conclusão
            </button>
          </nav>

          {/* Right Controls: Progress & Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Reading percent badge */}
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-nike-gray border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
              <BookmarkCheck className="w-3.5 h-3.5 text-white" />
              <span>{Math.round(scrollProgress)}%</span>
            </div>

            {/* Menu trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 hover:border-white bg-black/50 hover:bg-white hover:text-black transition-all"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden md:inline">Índice</span>
            </button>
          </div>
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* Slide-over Table of Contents Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#121212] border-l border-white/10 h-full p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-display text-xl uppercase tracking-wider text-white">
                  Estrutura do Estudo
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-nike-gray hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 space-y-1">
                {chapters.map((chap) => (
                  <button
                    key={chap.id}
                    onClick={() => scrollTo(chap.id)}
                    className="w-full text-left py-2.5 px-3 rounded hover:bg-white/5 flex items-center justify-between text-sm group transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-nike-gray group-hover:text-white">
                        {chap.number}
                      </span>
                      <span className="font-medium text-gray-300 group-hover:text-white">
                        {chap.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-nike-gray group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-nike-gray font-mono flex items-center justify-between">
              <span>NIKE CASE STUDY 2026</span>
              <a
                href="https://github.com/caioprojetos42/nike-case-study"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center space-x-1 underline"
              >
                <span>GitHub Repo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
