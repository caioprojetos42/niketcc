import React from 'react';
import { Heart, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

export const Chapter5EmotionalMarketing: React.FC = () => {
  return (
    <section id="capitulo-05" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">05 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>EMOTIONAL BRANDING & STORYTELLING</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 05 — Marketing Emocional
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: Como a Nike transcende a venda utilitária para tocar o espírito humano de superação
          </p>
        </div>

        {/* Monumental Hero Callout for JUST DO IT */}
        <div className="my-12 p-8 sm:p-14 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-neutral-800 font-display text-8xl sm:text-9xl pointer-events-none select-none opacity-20">
            JDI
          </div>

          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-nike-accent font-semibold block mb-2">
              O Conceito que Mudou a História da Comunicação
            </span>
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-none mb-6">
              Just Do It.
            </h3>
            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-light mb-6">
              Lançado em 1988, o slogan criado por Dan Wieden não é uma frase promocional sobre sapatos. É um <strong className="text-white font-semibold">imperativo existencial</strong>. Ele convoca qualquer pessoa — seja um recordista mundial ou alguém calçando o tênis às 5h da manhã para caminhar pela primeira vez — a silenciar as dúvidas internas, o medo do fracasso e simplesmente agir.
            </p>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-neutral-300">
              <span className="text-white font-bold">A máxima de Bill Bowerman: </span>
              "Se você tem um corpo, você é um atleta." (If you have a body, you are an athlete.)
            </div>
          </div>
        </div>

        {/* Emotional Storytelling Framework: The 3 Acts of Nike Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          <div className="bg-[#121212] p-8 rounded-xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-3">ATO 01 // A RESISTÊNCIA</span>
              <h4 className="font-display text-2xl uppercase text-white mb-3">
                O Conflito Interno
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                As histórias da Nike nunca pintam a vitória como fácil. O foco reside na dor muscular, nas noites mal dormidas, nas rejeições da infância e no cansaço. A marca valida o sofrimento legítimo do praticante antes de oferecer qualquer glória.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-nike-gray">
              IDENTIFICAÇÃO POR EMPATIA REAL
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-3">ATO 02 // A DECISÃO</span>
              <h4 className="font-display text-2xl uppercase text-white mb-3">
                A Escolha pela Ação
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                O momento catártico: a recusa em aceitar limites impostos pela sociedade, pela idade, pelo gênero ou pelas probabilidades estatísticas. É onde o "Just Do It" ganha vida e o atleta dá o primeiro passo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-nike-gray">
              AUTONOMIA E PODER PESSOAL
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-3">ATO 03 // A TRANSCENDÊNCIA</span>
              <h4 className="font-display text-2xl uppercase text-white mb-3">
                O Triunfo do Espírito
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                O produto Nike aparece de forma discreta — ele é o parceiro silencioso na conquista, nunca o protagonista ostensivo. O herói celebrado em todas as campanhas é sempre o ser humano.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-nike-gray">
              FIDELIDADE EMOCIONAL INDELÉVEL
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
