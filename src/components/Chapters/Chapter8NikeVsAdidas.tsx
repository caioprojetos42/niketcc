import React from 'react';
import { Scale, Check, Minus } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  nike: {
    highlight: string;
    details: string;
  };
  adidas: {
    highlight: string;
    details: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Identidade Visual & Símbolo',
    nike: {
      highlight: 'O Swoosh (Fluidez & Vitória)',
      details: 'Símbolo orgânico, assimétrico e dinâmico que transmite movimento contínuo mesmo estático.'
    },
    adidas: {
      highlight: 'As Três Listras (Estrutura & Engenharia)',
      details: 'Símbolo geométrico e simétrico derivado originalmente de faixas de reforço estrutural em sapatilhas de couro.'
    }
  },
  {
    dimension: 'Posicionamento Central',
    nike: {
      highlight: 'Heroísmo, Atitude & Superação Pessoal',
      details: 'Foco na determinação individual, provocação de limites e mentalidade "Just Do It".'
    },
    adidas: {
      highlight: 'Engenharia, Tradição & Herança do Futebol',
      details: 'Ênfase em autenticidade histórica europeia, paixão coletiva pelo jogo ("Impossible Is Nothing").'
    }
  },
  {
    dimension: 'Marketing Esportivo & Atletas',
    nike: {
      highlight: 'Culto a Superestrelas Globais Individuais',
      details: 'Construção de marcas pessoais colossais (Michael Jordan, Cristiano Ronaldo, LeBron James, Serena Williams).'
    },
    adidas: {
      highlight: 'Monopólio de Entidades e Torneios',
      details: 'Patrocínio oficial histórico da FIFA World Cup e da UEFA Champions League, além de lendas como Lionel Messi.'
    }
  },
  {
    dimension: 'Campanhas Publicitárias',
    nike: {
      highlight: 'Manifestos Cinematográficos de Alto Impacto',
      details: 'Comerciais que abordam questões culturais e políticas com edição hiper-rítmica e tom motivacional visceral.'
    },
    adidas: {
      highlight: 'Celebração de Estilo Urbano e Subculturas',
      details: 'Campanhas focadas na cultura de arquibancada, nostalgia vintage e música (como a histórica parceria com Run-DMC).'
    }
  },
  {
    dimension: 'Cultura Sneaker & Lifestyle',
    nike: {
      highlight: 'Drops de Escassez e Hype Extremo (SNKRS)',
      details: 'Domínio do basquete retrô (Air Jordan, Dunk, Air Force 1) e parcerias com ícones do hip-hop.'
    },
    adidas: {
      highlight: 'Sucessos Retrô Orgânicos (Adidas Originals)',
      details: 'Consagração atemporal de silhuetas de arquivo europeias como Samba, Gazelle, Superstar e Stan Smith.'
    }
  },
  {
    dimension: 'Estratégia Comercial & Canais',
    nike: {
      highlight: 'Foco Agressivo no Direct-to-Consumer (DTC)',
      details: 'Migração de clientes para canais próprios (Nike.com e SNKRS), buscando margens elevadas e controle de dados.'
    },
    adidas: {
      highlight: 'Distribuição Mista Atacado & Varejo Direto',
      details: 'Equilíbrio resiliente entre canais próprios e ampla capilaridade em redes esportivas tradicionais e franquias.'
    }
  },
  {
    dimension: 'Faturamento Global Verificável',
    nike: {
      highlight: 'US$ 51,4 Bilhões (Exercício Fiscal 2024)',
      details: 'Líder incontestável do setor de calçados e vestuário esportivo em receita total e valor de mercado.'
    },
    adidas: {
      highlight: '€ 21,4 Bilhões (~US$ 23 Bilhões)',
      details: 'Segunda maior força global, com sólida liderança regional na Europa Ocidental e forte herança em futebol de campo.'
    }
  }
];

export const Chapter8NikeVsAdidas: React.FC = () => {
  return (
    <section id="capitulo-08" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">08 // ANÁLISE COMPARATIVA</span>
          <span>•</span>
          <span>THE TITANS OF ATHLETIC APPAREL</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 08 — Nike versus Adidas
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: O duelo de titãs que forjou as estratégias modernas de marketing esportivo mundial
          </p>
        </div>

        <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed mb-12">
          A rivalidade entre Nike e Adidas é a mais emblemática do comércio mundial esportivo. Não se trata de uma disputa sobre qual calçado é melhor, mas de <strong>dois modelos civilizatórios de branding: a ousadia individualista norte-americana contra a precisão artesanal e coletiva europeia</strong>.
        </p>

        {/* Two-Column Comparison Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-[#121212] p-6 rounded-xl border border-white/20 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                <path d="M21.707 5.293c-.266-.266-.694-.287-.984-.047C17.65 7.818 12.87 9.8 8.5 9.8c-2.45 0-4.5-.66-6.1-1.95a.75.75 0 0 0-1.19.78C2.5 13.5 6.5 17 12 17c4.66 0 8.7-2.6 10.15-7.85.12-.44-.06-.91-.44-1.15z" />
              </svg>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  NIKE, INC.
                </h3>
                <span className="text-xs font-mono text-neutral-400">Beaverton, Oregon, EUA (1964)</span>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-white text-black font-bold rounded">
              LÍDER GLOBAL
            </span>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Three Stripes SVG */}
              <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                <path d="M2 18h3.5L12 6h-3.5L2 18zm6.5 0H12L17.5 8.5H14L8.5 18zm6.5 0h3.5L24 11h-3.5L15 18z" />
              </svg>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-neutral-200">
                  ADIDAS AG
                </h3>
                <span className="text-xs font-mono text-neutral-400">Herzogenaurach, Alemanha (1949)</span>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-white/10 text-white rounded">
              GIGANTE EUROPEU
            </span>
          </div>
        </div>

        {/* Detailed Comparative Table */}
        <div className="space-y-4 mt-6">
          {COMPARISON_DATA.map((row, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-white/5 hover:border-white/15 p-6 rounded-xl transition-all"
            >
              <div className="text-xs font-mono tracking-widest uppercase text-nike-accent mb-4 font-semibold">
                DIMENSÃO: {row.dimension}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nike Details */}
                <div className="border-l-2 border-white pl-4 space-y-1">
                  <span className="font-display text-lg text-white block">
                    {row.nike.highlight}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {row.nike.details}
                  </p>
                </div>

                {/* Adidas Details */}
                <div className="border-l-2 border-neutral-600 pl-4 space-y-1">
                  <span className="font-display text-lg text-neutral-200 block">
                    {row.adidas.highlight}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {row.adidas.details}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Analytical Takeaway */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-neutral-400 leading-relaxed">
          <strong className="text-white block font-mono uppercase mb-1">Conclusão Estratégica do Confronto:</strong>
          A Nike construiu uma vantagem financeira de faturamento mais de duas vezes superior à Adidas porque entendeu precocemente que o consumidor do século XXI compra emoção, narrativa heróica e escassez digital com maior disposição a preços premium do que puras especificações técnicas de produto.
        </div>

      </div>
    </section>
  );
};
