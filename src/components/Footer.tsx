import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-white/10 gap-8">
          
          <div className="flex items-center space-x-4">
            <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24">
              <path d="M21.707 5.293c-.266-.266-.694-.287-.984-.047C17.65 7.818 12.87 9.8 8.5 9.8c-2.45 0-4.5-.66-6.1-1.95a.75.75 0 0 0-1.19.78C2.5 13.5 6.5 17 12 17c4.66 0 8.7-2.6 10.15-7.85.12-.44-.06-.91-.44-1.15z" />
            </svg>
            <div>
              <span className="font-display text-xl uppercase tracking-wider block text-white">
                NIKE // BRAND STUDY
              </span>
              <span className="text-xs font-mono text-nike-gray">
                O Poder de Uma Marca Global — Experiência Digital Imersiva
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
            <a
              href="https://github.com/caioprojetos42/nike-case-study"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center space-x-1 underline transition-colors"
            >
              <span>Repositório GitHub (caioprojetos42)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="hidden sm:inline">•</span>
            <span>React + TypeScript + Tailwind</span>
            <span className="hidden sm:inline">•</span>
            <span>360° 3D Frame Engine</span>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Nike Case Study. Projeto desenvolvido para fins analíticos, educacionais e demonstração de engenharia de software e design editorial esportivo de alto nível.
          </p>
          <p className="flex-shrink-0">
            JUST DO IT.
          </p>
        </div>

      </div>
    </footer>
  );
};
