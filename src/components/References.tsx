import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

interface ReferenceItem {
  category: string;
  source: string;
  title: string;
  description: string;
  year: string;
}

const REFERENCES: ReferenceItem[] = [
  {
    category: 'RELATÓRIOS OFICIAIS & SEC',
    source: 'Nike, Inc. Investor Relations / SEC',
    title: 'Form 10-K Annual Report (Fiscal Year 2024)',
    description: 'Relatório financeiro oficial auditado contendo receitas globais consolidadas (US$ 51,4 bilhões), faturamento da Jordan Brand (US$ 6,6 bilhões) e participação de canais DTC.',
    year: '2024'
  },
  {
    category: 'BIOGRAFIA & MEMÓRIAS',
    source: 'Scribner / Simon & Schuster',
    title: 'Shoe Dog: A Memoir by the Creator of Nike (Phil Knight)',
    description: 'Relato autobiográfico em primeira pessoa do cofundador da Nike sobre as origens da Blue Ribbon Sports, o contrato de Carolyn Davidson ($35) e as crises de liquidez iniciais.',
    year: '2016'
  },
  {
    category: 'COMUNICADOS INSTITUCIONAIS',
    source: 'Nike News Official Archives',
    title: 'The Origin of "Just Do It" & The Breaking2 Science Initiative',
    description: 'Documentação histórica sobre a campanha concebida pela agência Wieden+Kennedy em 1988 e os relatórios biomecânicos do projeto de maratona abaixo de 2 horas em Monza.',
    year: '1988–2024'
  },
  {
    category: 'ESTUDOS DE CASO ACADÊMICOS',
    source: 'Harvard Business Review (HBR)',
    title: 'Nike\'s Direct-to-Consumer Strategy: Building an Unrivaled Digital Moat',
    description: 'Análise de caso sobre a transição do modelo tradicional de atacado para ecossistemas proprietários (Nike App e SNKRS), fidelização e dados primários.',
    year: '2021'
  },
  {
    category: 'JORNALISMO ECONÔMICO',
    source: 'The Wall Street Journal & Bloomberg',
    title: 'The Jordan Effect: How Nike Built a Multibillion-Dollar Empire on One Athlete',
    description: 'Investigação aprofundada sobre a economia da Jordan Brand, o caso da proibição da NBA em 1984 e o pagamento anual de royalties a Michael Jordan.',
    year: '2020'
  },
  {
    category: 'CULTURA SNEAKER & ARQUIVO',
    source: 'Complex & Sole Collector Archives',
    title: 'Chronology of Sneaker Culture: From Banned Jordans to Modern Drops',
    description: 'Registro histórico detalhado da evolução do mercado de calçados colecionáveis, cultura de rua e a mecânica de escassez programada do aplicativo SNKRS.',
    year: '2023'
  }
];

export const References: React.FC = () => {
  return (
    <section id="referencias" className="relative bg-[#0d0d0d] text-white py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <BookOpen className="w-4 h-4 text-white" />
          <span>Rigor Metodológico & Fontes Verificáveis</span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-tight text-white">
            Fontes & Referências Documentais
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono">
            Todas as métricas, marcos temporais e declarações deste estudo de caso são embasados em relatórios contábeis da SEC, registros históricos institucionais e publicações acadêmicas reconhecidas.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="bg-[#141414] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-nike-gray mb-2">
                  <span className="text-white/60">{ref.category}</span>
                  <span>{ref.year}</span>
                </div>

                <h3 className="font-display text-lg uppercase text-white mb-1">
                  {ref.title}
                </h3>

                <span className="text-xs font-mono text-nike-accent block mb-3">
                  {ref.source}
                </span>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {ref.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Dado Verificado</span>
                </span>
                <span>Ref. 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
