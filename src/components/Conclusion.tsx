import React from 'react';
import { ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const Conclusion: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pillars = [
    { title: 'Posicionamento', desc: 'Ocupar um território psicológico de coragem e vitória, nunca de preço.' },
    { title: 'Marketing Esportivo', desc: 'Validação técnica e mística através dos maiores campeões da história humana.' },
    { title: 'Publicidade de Vanguarda', desc: 'Narrativas cinematográficas e manifestos socioculturais que geram conversas mundiais.' },
    { title: 'Identidade Visual Imortal', desc: 'Um logotipo tão icônico que prescinde de qualquer texto para ser reconhecido.' },
    { title: 'Conexão Emocional', desc: 'O imperativo "Just Do It" transformado em manifesto de autoafirmação e superação.' },
    { title: 'Inovação Obsessiva', desc: 'Quebra contínua de limites da biomecânica, do Waffle de 1968 ao Alphafly de 2 horas.' },
    { title: 'Experiência do Consumidor', desc: 'Ecossistema digital integrado (SNKRS/NRC) e pertencimento a uma comunidade global.' },
  ];

  return (
    <section id="conclusao" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background Subtle Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Category Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-nike-gray mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Conclusão // Síntese do Estudo</span>
        </div>

        {/* Monumental Header */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-white max-w-5xl mx-auto">
          The Brand is More Than the Product.
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-base sm:text-xl text-neutral-300 font-light leading-relaxed">
          O sucesso inabalável da Nike ao longo de seis décadas prova que a longevidade corporativa não repousa em uma fórmula isolada, mas na orquestração harmoniosa de sete vetores integrados:
        </p>

        {/* 7 Integrated Pillars Synthesis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto text-left">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-nike-gray uppercase block mb-1">
                  0{idx + 1} // PILAR
                </span>
                <h3 className="font-display text-lg uppercase text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Golden Synthesis Card */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/20 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-nike-accent uppercase block mb-1">
                A SÍNTESE
              </span>
              <h3 className="font-display text-lg uppercase text-white mb-2">
                O Ecossistema Completo
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Nenhum pilar opera isolado. A inovação alimenta o marketing de atletas, que abastece a publicidade emocional, que por sua vez gera o valor percebido que esgota os lançamentos no SNKRS.
              </p>
            </div>
          </div>
        </div>

        {/* Final Philosophical Statement Callout */}
        <div className="mt-20 max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
          <blockquote className="font-display text-2xl sm:text-4xl uppercase text-white leading-tight tracking-wide">
            "A Nike mostrou que grandes marcas não vendem apenas produtos. Elas constroem histórias, criam conexões e fazem pessoas acreditarem em algo maior."
          </blockquote>
        </div>

        {/* Monumental Swoosh Silhouette at the end */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-8">
          <svg
            className="w-48 sm:w-64 h-auto fill-white drop-shadow-[0_0_50px_rgba(255,255,255,0.35)] transition-all hover:scale-105 duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M21.707 5.293c-.266-.266-.694-.287-.984-.047C17.65 7.818 12.87 9.8 8.5 9.8c-2.45 0-4.5-.66-6.1-1.95a.75.75 0 0 0-1.19.78C2.5 13.5 6.5 17 12 17c4.66 0 8.7-2.6 10.15-7.85.12-.44-.06-.91-.44-1.15z" />
          </svg>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-nike-gray hover:text-white transition-colors border border-white/10 px-5 py-2.5 rounded-full hover:border-white"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Retornar ao Topo & Abertura 3D</span>
          </button>
        </div>

      </div>
    </section>
  );
};
