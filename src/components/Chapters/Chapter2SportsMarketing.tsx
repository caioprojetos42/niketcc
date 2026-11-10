import React, { useState } from 'react';
import { Trophy, CheckCircle2, ChevronRight, User } from 'lucide-react';

interface AthleteProfile {
  name: string;
  sport: string;
  contract: string;
  achievement: string;
  quote: string;
  strategicImpact: string;
}

const ATHLETES: AthleteProfile[] = [
  {
    name: 'Cristiano Ronaldo',
    sport: 'Futebol',
    contract: 'Contrato Vitalício (~US$ 1 Bilhão)',
    achievement: '5x Ballon d\'Or, Maior artilheiro de seleções da história',
    quote: '"Eu não tenho que provar nada a ninguém além de mim mesmo."',
    strategicImpact: 'A linha Nike Mercurial tornou-se a chuteira mais vendida do planeta, convertendo seguidores globais em compradores de produtos esportivos e lifestyle.'
  },
  {
    name: 'LeBron James',
    sport: 'Basquete',
    contract: 'Contrato Vitalício (US$ 1+ Bilhão)',
    achievement: '4x Campeão da NBA, Maior pontuador da história da liga',
    quote: '"O sucesso não vem sem a dedicação diária àquilo que você ama."',
    strategicImpact: 'Sustentou a hegemonia da Nike na NBA por mais de duas décadas pós-Jordan com sua linha LeBron Signature Shoes e influência social ativa.'
  },
  {
    name: 'Serena Williams',
    sport: 'Tênis',
    contract: 'Parceria Histórica de 20+ Anos',
    achievement: '23 Títulos de Grand Slam individuais',
    quote: '"Você tem que acreditar em si mesmo quando mais ninguém acredita."',
    strategicImpact: 'Redefiniu o vestuário e o marketing voltado a atletas femininas globais, integrando alta potência muscular, moda de passarela e combate a preconceitos.'
  },
  {
    name: 'Tiger Woods',
    sport: 'Golfe',
    contract: '27 anos de aliança global icônica',
    achievement: '15 Majors, 82 vitórias no PGA Tour',
    quote: '"O maior competidor que você enfrentará está no espelho."',
    strategicImpact: 'Transformou o golfe de um esporte tradicional conservador em um espetáculo atlético televisionado globalmente, impulsionando a Nike Golf a faturar centenas de milhões.'
  },
  {
    name: 'Eliud Kipchoge',
    sport: 'Maratona',
    contract: 'Parceria de Inovação Biomecânica',
    achievement: 'Quebrou a barreira das 2h na maratona (1:59:40 no Projeto INEOS 1:59)',
    quote: '"Nenhum ser humano é limitado."',
    strategicImpact: 'Validou cientificamente a linha Vaporfly/Alphafly com placa de carbono, criando o padrão que forçou a Federação Internacional de Atletismo a mudar suas regras.'
  }
];

export const Chapter2SportsMarketing: React.FC = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<number>(0);

  return (
    <section id="capitulo-02" className="relative bg-[#101010] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">02 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>ATHLETE ENDORSEMENTS & CREDIBILITY</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 02 — Marketing Esportivo
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: A influência de atletas lendários na construção de credibilidade e conversão de vendas
          </p>
        </div>

        {/* Narrative Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-neutral-300">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              O patrocínio esportivo da Nike não se resume a estampar um logotipo na camisa de uma estrela. O princípio estabelecido por Phil Knight e Bill Bowerman dita que <strong>a credibilidade atlética genuína é o alicerce indispensável de todas as vendas</strong>.
            </p>
            <p>
              Quando o público vê um maratonista bater um recorde mundial ou um craque marcar o gol da vitória nos acréscimos calçando Nike, o produto passa no teste mais rigoroso que existe: o teste da alta performance sob pressão extrema.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#161616] p-6 rounded-xl border border-white/10 space-y-3">
            <h3 className="font-display text-xl uppercase tracking-wide text-white flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-white" />
              <span>A Mecânica de Conversão por Transferência</span>
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span><strong>Transferência de Afeto:</strong> A lealdade emocional devotada ao atleta é transferida diretamente para a marca patrocinadora.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span><strong>Prova Social Máxima:</strong> Se o calçado atende ao atleta de ponta do planeta, ele é mais do que suficiente para o consumidor amador.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span><strong>Linhas Signature:</strong> Criação de subsistemas de produtos personalizados que geram franquias bilionárias contínuas.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Athletes Showcase */}
        <div className="bg-[#141414] rounded-2xl p-6 sm:p-10 border border-white/10">
          <div className="mb-6">
            <span className="text-xs font-mono tracking-widest uppercase text-nike-accent font-semibold block mb-1">
              Portfólio de Ícones Globais
            </span>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white">
              Selecione o Atleta para Analisar o Impacto Comercial
            </h3>
          </div>

          {/* Athlete Selector Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 no-scrollbar">
            {ATHLETES.map((ath, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedAthlete(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-xs font-mono transition-all border ${
                  selectedAthlete === idx
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {ath.name}
              </button>
            ))}
          </div>

          {/* Selected Athlete Showcase Card */}
          <div className="mt-8 bg-[#1a1a1a] p-6 sm:p-8 rounded-xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-3 text-xs font-mono text-nike-gray">
                <span className="bg-white/10 text-white px-2 py-0.5 rounded uppercase font-bold">
                  {ATHLETES[selectedAthlete].sport}
                </span>
                <span>•</span>
                <span className="text-neutral-400">{ATHLETES[selectedAthlete].contract}</span>
              </div>

              <h4 className="font-display text-3xl sm:text-4xl uppercase text-white">
                {ATHLETES[selectedAthlete].name}
              </h4>

              <p className="text-xs sm:text-sm font-mono text-neutral-400">
                Feito Histórico: <span className="text-white">{ATHLETES[selectedAthlete].achievement}</span>
              </p>

              <blockquote className="italic text-base sm:text-lg text-neutral-200 border-l-2 border-white/40 pl-4 py-1">
                {ATHLETES[selectedAthlete].quote}
              </blockquote>

              <div className="pt-2 text-xs text-neutral-300">
                <strong className="text-white block mb-1 uppercase font-mono">Estratégia & Retorno de Negócio:</strong>
                <p className="leading-relaxed">{ATHLETES[selectedAthlete].strategicImpact}</p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0a0a0a] p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <User className="w-8 h-8 text-white" />
              </div>
              <span className="font-display text-xl uppercase text-white">
                Aliança Estratégica
              </span>
              <span className="text-xs font-mono text-neutral-400 leading-tight">
                Garantia de relevância intergeracional e proteção contra oscilações de mercado
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
