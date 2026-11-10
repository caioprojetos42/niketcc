import React from 'react';
import { HelpCircle, Zap, ShieldAlert, TrendingUp, Sparkles } from 'lucide-react';

export const Problematization: React.FC = () => {
  return (
    <section id="problematizacao" className="relative bg-[#0d0d0d] text-white py-24 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Category Pill */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-6">
          <HelpCircle className="w-4 h-4 text-white" />
          <span>A Pergunta Central da Pesquisa</span>
        </div>

        {/* Monumental Provocation */}
        <div className="max-w-5xl">
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-nike-gray block mb-4">
            O Enigma Estratégico
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-white">
            Como uma empresa transformou produtos esportivos em{' '}
            <span className="text-white underline decoration-white/30 underline-offset-8">
              desejo
            </span>
            ,{' '}
            <span className="text-white underline decoration-white/30 underline-offset-8">
              identidade
            </span>{' '}
            e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              influência global?
            </span>
          </h2>
        </div>

        {/* Narrative Context */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 text-neutral-300">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              Na década de 1970, o mercado de calçados esportivos era dominado por gigantes europeus como a Adidas e a Puma, que tratavam seus produtos como ferramentas estritamente utilitárias para treinamento e competição. O calçado era uma commodity técnica comprada por necessidade física.
            </p>
            <p>
              A Nike operou uma ruptura de paradigma: em vez de vender solados de borracha, tecidos de nylon e costuras, ela passou a vender{' '}
              <strong className="text-white font-semibold">o sentimento de vitória, a superação de barreiras humanas e a afirmação de pertencimento a uma comunidade de desafiadores</strong>.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#141414] border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-nike-accent text-xs font-mono uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                <span>O Paradoxo do Produto</span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-4">
                Da Borracha Vulcanizada ao Símbolo de Status
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                O custo de fabricação de um tênis esportivo representa uma fração minúscula do seu preço final de prateleira. O que preenche essa imensa distância é o que a Nike construiu com precisão milimétrica: <strong>capital de marca, mitologia esportiva e desejo psicológico</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-nike-gray">
              <span>ESTRATÉGIA DE VALOR PERCEBIDO</span>
              <span className="text-white font-bold">+1.800% Margem Cultural</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Transformation: Traditional vs Nike */}
        <div className="mt-20">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white mb-8">
            A Transição do Modelo de Negócios
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'O Produto',
                traditional: 'Solado amortecedor para corrida de rua.',
                nike: 'Um artefato de identidade, estética urbana e expressão pessoal.',
                tag: 'REPOSICIONAMENTO',
              },
              {
                title: 'O Atleta',
                traditional: 'Testemunha contratada que usa o tênis em jogos.',
                nike: 'Herói mitológico contemporâneo dotado de vulnerabilidades e glória.',
                tag: 'NARRATIVA',
              },
              {
                title: 'A Propaganda',
                traditional: 'Demonstração de especificações técnicas do calçado.',
                nike: 'Manifestos sociopolíticos sobre determinação, coragem e superação.',
                tag: 'CONEXÃO EMOCIONAL',
              },
              {
                title: 'A Venda',
                traditional: 'Distribuição massiva em prateleiras de lojas físicas.',
                nike: 'Ecossistema SNKRS, lançamentos limitados e cultura do drop.',
                tag: 'ESCASSEZ PROGRAMADA',
              },
            ].map((col, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/5 hover:border-white/20 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-nike-gray uppercase block mb-3">
                    {col.tag}
                  </span>
                  <h4 className="font-display text-xl uppercase text-white mb-4">
                    {col.title}
                  </h4>
                  
                  <div className="space-y-3 text-xs">
                    <div className="bg-white/5 p-3 rounded border border-white/5">
                      <span className="text-neutral-500 font-mono block mb-1">MERCADO PADRÃO:</span>
                      <p className="text-neutral-400">{col.traditional}</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-white/10">
                      <span className="text-white font-mono block mb-1">MÉTODO NIKE:</span>
                      <p className="text-neutral-200 font-medium">{col.nike}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
