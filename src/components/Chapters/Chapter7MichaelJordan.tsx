import React from 'react';
import { Flame, ShieldAlert, DollarSign, Award, ArrowUpRight } from 'lucide-react';

export const Chapter7MichaelJordan: React.FC = () => {
  return (
    <section id="capitulo-07" className="relative bg-[#0a0505] text-white py-24 md:py-36 border-t border-red-950/40 overflow-hidden">
      
      {/* Basketball Court Line Graphic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-red-500" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-red-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Jordan Red Accent */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="text-white font-bold">07 // CASO ESPECIAL</span>
          <span>•</span>
          <span>THE MICHAEL JORDAN PHENOMENON & JORDAN BRAND</span>
        </div>

        <div className="max-w-5xl mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase leading-[0.9] text-white">
            Capítulo 07 — A Influência de Michael Jordan
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest text-red-400 uppercase">
            Como uma aposta em um novato do Chicago Bulls redefiniu o esporte, criou o mercado sneakerhead e construiu um império de US$ 6,6 bilhões
          </p>
        </div>

        {/* The 1984 Banned Saga Spotlight Card */}
        <div className="mb-16 bg-gradient-to-r from-[#170a0a] via-[#140808] to-[#0c0404] p-8 sm:p-12 rounded-2xl border border-red-600/30 shadow-[0_0_50px_rgba(225,6,0,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 px-3 py-1 rounded text-xs font-mono text-red-400 uppercase">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                <span>O Caso "Banned" da NBA (1984)</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white">
                O Tênis que a NBA Tentou Proibir
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Quando a NBA emitiu uma carta oficial proibindo o calçado preto e vermelho por não conter a porcentagem mínima de branco exigida pelo regulamento, sob pena de multa de <strong>US$ 5.000 por partida</strong>, a Nike tomou uma das decisões mais ousadas da história empresarial: pagou todas as multas e produziu um comercial memorável:
              </p>

              <blockquote className="italic text-xs sm:text-sm text-neutral-200 border-l-2 border-red-500 pl-4 py-1 font-mono">
                "No dia 15 de outubro, a Nike criou um novo e revolucionário tênis de basquete. No dia 18 de outubro, a NBA o baniu das quadras. Felizmente, a NBA não pode impedir você de usá-lo."
              </blockquote>

              <p className="text-xs text-neutral-400">
                O resultado foi histeria coletiva: a meta anual de vendas estipulada pela Nike para o Air Jordan era de US$ 3 milhões. No primeiro ano, as vendas atingiram <strong>US$ 126 milhões</strong>.
              </p>
            </div>

            {/* Financial Telemetry Box */}
            <div className="lg:col-span-4 bg-black/60 p-6 rounded-xl border border-red-500/20 text-center space-y-4">
              <div>
                <span className="font-display text-4xl sm:text-5xl text-red-500 block">
                  US$ 6,6B+
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Receita Anual da Jordan Brand
                </span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="font-display text-2xl sm:text-3xl text-white block">
                  ~US$ 250M
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Royalties Anuais Pagos a Michael Jordan
                </span>
              </div>
              <p className="text-[10px] font-mono text-neutral-500">
                Fonte: Relatório Anual Nike Inc. (SEC Form 10-K)
              </p>
            </div>

          </div>
        </div>

        {/* 3 Pillars of Jordan Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#120808] p-6 rounded-xl border border-red-950 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-display text-xl uppercase text-white mb-2">
              Do Patrocínio à Franquia Autônoma
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Em 1997, a Nike transformou a linha em uma divisão autônoma: a <strong>Jordan Brand</strong>, equipada com o emblemático logo Jumpman, operando com seus próprios atletas patrocinados e autonomia estética.
            </p>
          </div>

          <div className="bg-[#120808] p-6 rounded-xl border border-red-950 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-display text-xl uppercase text-white mb-2">
              A Gênese do Mercado Sneakerhead
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              O modelo de lançamentos anuais (Air Jordan I ao XXXVIII) e reedições "Retro" estabeleceu as regras do mercado de colecionadores, onde modelos originais alcançam centenas de milhares de dólares em leilões na Sotheby's.
            </p>
          </div>

          <div className="bg-[#120808] p-6 rounded-xl border border-red-950 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h4 className="font-display text-xl uppercase text-white mb-2">
              O Modelo de Participação Acionária
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ao conceder 5% de royalties sobre cada calçado vendido em vez de um cachê fixo, a Nike inventou o modelo moderno de sociedade entre celebridades e marcas, replicado hoje por todas as indústrias globais.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
