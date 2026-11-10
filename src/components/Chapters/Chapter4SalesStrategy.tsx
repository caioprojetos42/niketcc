import React from 'react';
import { ShoppingBag, Flame, Layers, Store, Smartphone, ShieldCheck } from 'lucide-react';

export const Chapter4SalesStrategy: React.FC = () => {
  return (
    <section id="capitulo-04" className="relative bg-[#0d0d0d] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">04 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>DTC REVENUE & SCARCITY ARCHITECTURE</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 04 — Estratégias de Vendas
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: Como a Nike orquestra escassez programada, canais diretos (DTC) e experiências de compra imersivas
          </p>
        </div>

        {/* Narrative Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-neutral-300">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Aumentar vendas em escala multibilionária sem degradar o prestígio da marca é um dos equilíbrios mais complexos do varejo moderno. A resposta da Nike foi arquitetada em dois eixos complementares: <strong>escassez programada no topo da pirâmide</strong> e <strong>distribuição de alta eficiência na base</strong>.
            </p>
            <p>
              Ao lançar o aplicativo <strong>SNKRS</strong> em 2015, a marca transformou o ato de comprar um tênis em um evento com hora marcada, sorteios algorítmicos e filas virtuais de milhões de pessoas. Esse frenesi gera cobertura midiática gratuita e reverbera sobre os calçados de linha regular vendidos no varejo diário.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#141414] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-nike-accent flex items-center space-x-2 mb-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Pivot Direct-to-Consumer (DTC)</span>
              </span>
              <h3 className="font-display text-2xl uppercase text-white mb-2">
                O Controle dos Dados e das Margens
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A Nike reduziu sua dependência de grandes redes multimarcas e passou a canalizar seus produtos para canais proprietários (Nike.com, Nike App e lojas próprias). O resultado: <strong>margens de lucro até duas vezes maiores</strong> e posse integral do histórico de navegação e preferências do cliente.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs font-mono text-nike-gray">
              <span>PARTICIPAÇÃO DTC</span>
              <span className="text-white font-bold">~44% das Vendas Globais</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Sales Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg uppercase text-white mb-2">
              O Ecossistema SNKRS
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Mecanismos de gamificação, sorteios "The Draw" e geolocalização "SNKRS Stash" que eliminam estoques parados e esgotam edições especiais em questão de segundos.
            </p>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg uppercase text-white mb-2">
              Colaborações Hype
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Alianças estratégicas com nomes como Travis Scott, Virgil Abloh (Off-White), Sacai e grifes de alta costura como Dior e Tiffany, transformando calçados em ativos de investimento no mercado secundário.
            </p>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg uppercase text-white mb-2">
              House of Innovation
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Flagship stores em Nova York, Paris e Xangai onde a loja física funciona como um templo de design: customização "Nike By You", checkout instantâneo pelo app e pisos dedicados a testes com atletas.
            </p>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg uppercase text-white mb-2">
              Gestão de Estoque Ágil
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Uso de inteligência de demanda preditiva e RFID em centenas de milhões de pares para minimizar liquidações de preço e manter a integridade do valor percebido da marca.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
