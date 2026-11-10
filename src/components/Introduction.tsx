import React, { useState } from 'react';
import { Calendar, Globe2, Trophy, Flame, Compass, ChevronRight } from 'lucide-react';

interface Milestone {
  year: string;
  tag: string;
  title: string;
  description: string;
  impact: string;
  stat: string;
  statLabel: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '1964',
    tag: 'ORIGEM',
    title: 'Blue Ribbon Sports & O Waffle Iron',
    description: 'Fundada pelo treinador de atletismo Bill Bowerman e pelo corredor Phil Knight na Universidade de Oregon, a empresa começou distribuindo calçados japoneses Onitsuka Tiger no porta-malas de um carro.',
    impact: 'Obsessão por calçados mais leves que reduzissem frações de segundo dos atletas.',
    stat: '$1.200',
    statLabel: 'Investimento inicial somado de Knight e Bowerman',
  },
  {
    year: '1971',
    tag: 'IDENTIDADE',
    title: 'O Nascimento do Swoosh ($35)',
    description: 'Carolyn Davidson, estudante de design gráfico da Portland State University, cria o Swoosh. O nome Nike é inspirado na deusa grega alada da vitória. Knight disse: "Não amei de início, mas vai crescer em mim".',
    impact: 'Criação do símbolo mais reconhecível e replicado da história do design moderno.',
    stat: '$35',
    statLabel: 'Valor pago à designer Carolyn Davidson pelo logo',
  },
  {
    year: '1984',
    tag: 'REVOLUÇÃO',
    title: 'A Parceria Michael Jordan',
    description: 'A Nike aposta suas fichas em um novato do Chicago Bulls. O tênis Air Jordan 1 preto e vermelho é banido pela NBA por violar regras de uniforme. A Nike paga cada multa de $5.000 por jogo e transforma o calçado em ato de rebeldia.',
    impact: 'A transição de um produto esportivo para um ícone cultural e o nascimento do império sneaker.',
    stat: '$126M',
    statLabel: 'Vendas no primeiro ano do Air Jordan (meta era $3M)',
  },
  {
    year: '1988',
    tag: 'SLOGAN CULTURAL',
    title: 'O Manifesto "Just Do It"',
    description: 'Criado pela agência Wieden+Kennedy e inspirado nas últimas palavras de um condenado ("Let\'s do it"), o slogan estreou com o maratonista Walt Stack de 80 anos correndo na Golden Gate Bridge.',
    impact: 'Reposicionou a Nike de calçados para a celebração do esforço e determinação humana universal.',
    stat: '80 Anos',
    statLabel: 'Idade do atleta na primeira peça publicitária',
  },
  {
    year: '2000s',
    tag: 'ESCALA GLOBAL',
    title: 'Domínio do Futebol & Superestrelas',
    description: 'A Nike quebra o monopólio histórico europeu no futebol com o patrocínio da Seleção Brasileira (1996), Ronaldo Fenômeno, Cristiano Ronaldo, LeBron James, Serena Williams e Tiger Woods.',
    impact: 'Consolidação de presença em todos os continentes e modalidades olímpicas de ponta.',
    stat: '+170',
    statLabel: 'Países com presença e distribuição direta',
  },
  {
    year: 'Hoje',
    tag: 'ECOSSISTEMA',
    title: 'Cultura, SNKRS & Inovação Radical',
    description: 'Com o projeto Breaking2 (Eliud Kipchoge correndo maratona abaixo de 2h) e o ecossistema digital Nike App / SNKRS, a marca lidera a interseção entre alta performance biomecânica e lifestyle global.',
    impact: 'A marca é citada como a número um em desejo de compra entre a Geração Z mundial.',
    stat: '$51.4B',
    statLabel: 'Faturamento anual consolidado em escala global',
  },
];

export const Introduction: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(2); // Default to Jordan 1984

  return (
    <section id="introducao" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Pill & Tag */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="w-8 h-[1px] bg-white/40" />
          <span>Capítulo 00 // Panorama Histórico</span>
        </div>

        {/* Section Monumental Title */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-white">
            Não é apenas uma marca.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600">
              É um movimento.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
            A Nike deixou de ser apenas uma empresa de artigos esportivos para se transformar em um{' '}
            <strong className="text-white font-semibold">símbolo global de desempenho, superação e identidade</strong>. 
            Seu crescimento está diretamente relacionado à capacidade inigualável de conectar produtos de alta tecnologia, atletas lendários, emoções primordiais e a cultura de rua contemporânea.
          </p>
        </div>

        {/* Five Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {[
            {
              icon: Compass,
              step: '01',
              title: 'Fundação Atlética',
              desc: 'Nascida nas pistas de corrida de Eugene, Oregon, com foco estrito em otimização biomecânica.',
            },
            {
              icon: Flame,
              step: '02',
              title: 'Identidade Visual',
              desc: 'O Swoosh transmite velocidade, dinamismo e fluidez antes de qualquer palavra ser dita.',
            },
            {
              icon: Trophy,
              step: '03',
              title: 'Consolidação Esportiva',
              desc: 'Aliança indissociável com os campeões e momentos mais icônicos do esporte moderno.',
            },
            {
              icon: Globe2,
              step: '04',
              title: 'Expansão Global',
              desc: 'Transformação de marca americana em corporação transcultural com alcance em mais de 170 nações.',
            },
            {
              icon: Calendar,
              step: '05',
              title: 'Referência Cultural',
              desc: 'Transcendência do ginásio para as passarelas, música urbana, cinema e linguagem cotidiana.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-nike-gray mb-4">
                  <span className="font-mono text-xs text-white/50">{item.step}</span>
                  <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg tracking-wide uppercase text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Timeline Experience */}
        <div className="mt-16 bg-[#121212] rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-nike-accent font-semibold block mb-1">
                Linha do Tempo Interativa
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                Os Marcos da Hegemonia
              </h3>
            </div>
            <p className="text-xs text-nike-gray font-mono max-w-sm">
              Clique nas eras abaixo para inspecionar os momentos em que a marca reescreveu as regras do marketing.
            </p>
          </div>

          {/* Timeline Pills Selector */}
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 no-scrollbar">
            {MILESTONES.map((m, index) => {
              const active = selectedMilestone === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMilestone(index)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 border flex items-center space-x-2 ${
                    active
                      ? 'bg-white text-black border-white shadow-lg font-bold'
                      : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{m.year}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${active ? 'bg-black/10 text-black' : 'bg-white/10 text-neutral-400'}`}>
                    {m.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focal Milestone Detail Card */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171717] p-6 sm:p-8 rounded-xl border border-white/5">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-nike-gray">
                <span className="text-white font-bold">{MILESTONES[selectedMilestone].year}</span>
                <span>•</span>
                <span className="uppercase text-neutral-300">{MILESTONES[selectedMilestone].tag}</span>
              </div>
              
              <h4 className="font-display text-2xl sm:text-4xl uppercase tracking-wide text-white">
                {MILESTONES[selectedMilestone].title}
              </h4>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {MILESTONES[selectedMilestone].description}
              </p>

              <div className="pt-2 flex items-start space-x-3 text-xs text-neutral-400 border-t border-white/5">
                <ChevronRight className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Impacto de longo prazo: </strong>
                  {MILESTONES[selectedMilestone].impact}
                </p>
              </div>
            </div>

            {/* Stat Callout */}
            <div className="lg:col-span-4 bg-[#0d0d0d] p-6 rounded-xl border border-white/10 flex flex-col justify-center text-center">
              <span className="font-display text-4xl sm:text-5xl text-white tracking-tight">
                {MILESTONES[selectedMilestone].stat}
              </span>
              <span className="text-xs font-mono text-nike-gray uppercase tracking-wider mt-2">
                {MILESTONES[selectedMilestone].statLabel}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
