import React, { useState } from 'react';
import { Users, Target, Activity, Sparkles, Check } from 'lucide-react';

interface Segment {
  id: string;
  name: string;
  audience: string;
  driver: string;
  keyProducts: string;
  mainChannel: string;
  messaging: string;
}

const SEGMENTS: Segment[] = [
  {
    id: 'performance',
    name: 'Atletas de Elite & Praticantes Séries',
    audience: 'Corredores dedicados, jogadores de basquete, futebolistas e competidores',
    driver: 'Ganho marginal de frações de segundo, durabilidade biomecânica e obsessão por vencer',
    keyProducts: 'Vaporfly 3, Alphafly, Mercurial Superfly, Pegasus 41',
    mainChannel: 'Nike Running Club (NRC), eventos oficiais de maratona e testes em pista',
    messaging: '"Projetado para superar limites anatômicos e quebrar recordes pessoais."'
  },
  {
    id: 'sneakerhead',
    name: 'Comunidade Sneakerhead & Streetwear',
    audience: 'Jovens urbanos, entusiastas de moda, colecionadores e criadores de tendências',
    driver: 'Exclusividade de drops, status estético, herança cultural e raridade no mercado secundário',
    keyProducts: 'Air Jordan 1 Retro, Nike Dunk Low, Air Force 1 \'07, Collabs Travis Scott/Off-White',
    mainChannel: 'SNKRS App, redes sociais visuais (TikTok/Instagram) e lojas conceituais em capitais da moda',
    messaging: '"Uma declaração de autenticidade cultural que conecta as ruas ao topo do design."'
  },
  {
    id: 'wellness',
    name: 'Fitness & Bem-Estar Diário',
    audience: 'Praticantes de treinos funcionais, yoga, caminhada e bem-estar integral',
    driver: 'Saúde mental, longevidade física, conforto diário e hábitos de vida consistentes',
    keyProducts: 'Nike Invincible 3, Linha Nike Yoga Dri-FIT, Nike Metcon 9',
    mainChannel: 'Nike Training Club (NTC), parcerias com influenciadores fitness e e-commerce direto',
    messaging: '"Construa a sua melhor versão no seu próprio ritmo diário."'
  },
  {
    id: 'athleisure',
    name: 'Estilo de Vida Casual / Athleisure',
    audience: 'Profissionais modernos, estudantes e público geral que priorizam conforto',
    driver: 'Versatilidade entre home office, academia e encontros sociais informais',
    keyProducts: 'Moletom Club Fleece, Tech Fleece, Calçados Air Max 90 / 270',
    mainChannel: 'Grandes varejistas, Nike.com e lojas de departamento premium',
    messaging: '"O conforto esportivo como uniforme oficial da vida contemporânea."'
  }
];

export const Chapter6TargetAudience: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<number>(0);

  return (
    <section id="capitulo-06" className="relative bg-[#101010] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">06 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>TARGET SEGMENTATION & CONSUMER PSYCHOLOGY</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 06 — Nike e o Público-Alvo
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: Como a Nike mapeia tribos comportamentais e personaliza sua narrativa sem fragmentar a identidade central
          </p>
        </div>

        {/* Narrative Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-neutral-300">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              O público-alvo da Nike não é definido por faixas etárias estáticas ou códigos postais. A empresa opera sob uma sofisticada <strong>segmentação psicográfica</strong>: o que une seus consumidores é uma atitude mental compartilhada em relação ao esforço, à autoexpressão e à busca de excelência.
            </p>
            <p>
              Essa habilidade de dialogar simultaneamente com o maratonista olímpico de 30 anos e com o adolescente de 16 anos que consome moda urbana em Tóquio ou São Paulo é o maior triunfo da arquitetura de portfólio da marca.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#161616] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-nike-accent flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4" />
                <span>Personalização Algorítmica</span>
              </span>
              <h3 className="font-display text-2xl uppercase text-white mb-2">
                Uma Marca, Múltiplas Vozes
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ao cruzar dados de compras no Nike App, treinos registrados no Nike Run Club e engajamento no SNKRS, a marca entrega comunicações hiper-customizadas para cada perfil de usuário.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Segment Inspector */}
        <div className="bg-[#141414] rounded-2xl p-6 sm:p-10 border border-white/10">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-nike-accent font-semibold block mb-1">
                Matriz de Segmentação
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white">
                Os 4 Perfis Estratégicos de Consumo
              </h3>
            </div>
          </div>

          {/* Segment Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {SEGMENTS.map((seg, idx) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeSegment === idx
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span className={`text-[10px] font-mono block mb-1 uppercase ${activeSegment === idx ? 'text-black/60 font-bold' : 'text-neutral-500'}`}>
                  SEGMENTO 0{idx + 1}
                </span>
                <span className="font-display text-base uppercase leading-tight block">
                  {seg.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Segment Detail Card */}
          <div className="bg-[#1c1c1c] p-6 sm:p-8 rounded-xl border border-white/5 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
              <div>
                <h4 className="font-display text-3xl uppercase text-white">
                  {SEGMENTS[activeSegment].name}
                </h4>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Público Primário: <span className="text-white">{SEGMENTS[activeSegment].audience}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-neutral-500 font-mono block mb-1">MOTIVADOR CENTRAL:</span>
                <p className="text-neutral-200">{SEGMENTS[activeSegment].driver}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-neutral-500 font-mono block mb-1">PRODUTOS ÂNCORA:</span>
                <p className="text-white font-medium">{SEGMENTS[activeSegment].keyProducts}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-neutral-500 font-mono block mb-1">CANAL DE CONTATO:</span>
                <p className="text-neutral-200">{SEGMENTS[activeSegment].mainChannel}</p>
              </div>
            </div>

            <div className="pt-2 flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 bg-black/40 p-4 rounded-lg border border-white/10">
              <span className="font-mono text-nike-accent font-bold uppercase flex-shrink-0">Tom de Voz:</span>
              <p className="italic">{SEGMENTS[activeSegment].messaging}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
