import React from 'react';
import { Award, Eye, Compass, TrendingUp, Quote } from 'lucide-react';

export const Chapter1BrandPower: React.FC = () => {
  return (
    <section id="capitulo-01" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">01 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>BRAND EQUITY & IDENTITY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
              Capítulo 01 — O Poder da Marca Nike
            </h2>
            <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              Tema: Como a Nike se tornou uma das marcas mais valiosas e reconhecidas do planeta
            </p>

            {/* Impact Quote Box */}
            <div className="my-8 p-6 rounded-xl bg-white/[0.03] border-l-4 border-white border-y border-r border-white/5">
              <Quote className="w-6 h-6 text-white/40 mb-2" />
              <p className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white">
                "Uma marca não se torna inesquecível apenas pelo que vende, mas pelo que representa."
              </p>
              <span className="block mt-2 text-xs font-mono text-nike-gray">
                Princípio fundamental de posicionamento institucional da Nike Inc.
              </span>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p>
                A construção do valor de marca da Nike (Brand Equity) não foi acidental. O símbolo <strong>Swoosh</strong>, criado por Carolyn Davidson em 1971 por meros US$ 35, tornou-se tão universalmente assimilado pela mente do consumidor que a empresa pôde, na década de 1990, remover completamente a palavra "NIKE" de suas campanhas e produtos, mantendo reconhecimento espontâneo absoluto.
              </p>
              <p>
                Enquanto concorrentes disputavam preço ou aspectos laboratoriais, a Nike ocupou um território psicológico sagrado: <em>a busca incessante pela excelência pessoal</em>. Ao associar seu logotipo ao arquétipo do herói, o Swoosh deixou de ser uma marca registrada comercial para se tornar uma declaração de atitude, disciplina e ambição.
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#121212] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-2">
                <Eye className="w-5 h-5 text-white" />
                <h3 className="font-display text-lg uppercase text-white">Reconhecimento Desacompanhado</h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A Nike é uma das poucas marcas globais (ao lado da Apple) cujo símbolo é reconhecido sem necessidade de texto, gerando uma taxa de retenção visual de 97% nos principais mercados mundiais.
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-2">
                <Compass className="w-5 h-5 text-white" />
                <h3 className="font-display text-lg uppercase text-white">Posicionamento de Diferenciação</h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Distanciamento deliberado da guerra de preços. A Nike compete por valor simbólico, permitindo manter margens brutas médias acima de 44% no setor de vestuário e calçados.
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="w-5 h-5 text-white" />
                <h3 className="font-display text-lg uppercase text-white">Construção de Valor (Brand Value)</h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Avaliada consistentemente pela Brand Finance e Interbrand como a marca de vestuário mais valiosa do mundo, ultrapassando os US$ 30 bilhões apenas em valor intangível.
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-5 h-5 text-white" />
                <h3 className="font-display text-lg uppercase text-white">Onipresença Cultural</h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Presente nos Jogos Olímpicos, na NBA, na Champions League, nos palcos do hip-hop e nas semanas de moda de Paris, unificando alta performance e vanguarda estética.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
