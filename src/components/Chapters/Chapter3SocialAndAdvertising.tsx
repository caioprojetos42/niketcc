import React from 'react';
import { Film, Share2, Smartphone, TrendingUp, Sparkles, Video } from 'lucide-react';

export const Chapter3SocialAndAdvertising: React.FC = () => {
  return (
    <section id="capitulo-03" className="relative bg-[#080808] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">03 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>DIGITAL CULTURE & GEN-Z ENGAGEMENT</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 03 — Publicidade e Redes Sociais
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: Como a Nike conquista a lealdade da juventude através de cinema comercial e narrativas digitais
          </p>
        </div>

        {/* Strategic Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-neutral-300">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              A publicidade da Nike nunca operou na lógica de catálogo. Em vez de focar nas funcionalidades de um cadarço ou no peso de uma espuma, seus comerciais são tratados como <strong>peças cinematográficas de alta intensidade dramática</strong>. A linguagem é visceral, a montagem é hiper-rítmica e a trilha sonora dita o pulso da cultura jovem.
            </p>
            <p>
              Com a chegada das redes sociais e das novas gerações (Millennials e Geração Z), a Nike adaptou com maestria sua comunicação: de comerciais de 60 segundos na televisão para micro-conteúdos no TikTok e Instagram, cocriação com influenciadores da cultura urbana e experiências imersivas em plataformas virtuais como o Roblox (Nikeland).
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#121212] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-nike-accent flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Engajamento Nativo Digital</span>
              </span>
              <h3 className="font-display text-2xl uppercase text-white">
                O Algoritmo da Relevância
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A Nike é a marca esportiva mais seguida do Instagram no mundo (com mais de 300 milhões de seguidores na conta principal e dezenas de ramificações como @nikerunning, @nikefootball e @nikewomen).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs font-mono text-nike-gray">
              <span>ENGAGEMENT SCORE</span>
              <span className="text-white font-bold">#1 em Desejo na Gen-Z</span>
            </div>
          </div>
        </div>

        {/* 3 Benchmark Campaigns Spotlight */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white mb-8 flex items-center space-x-3">
            <Video className="w-6 h-6 text-white" />
            <span>Casos Marcantes da Publicidade Contemporânea</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Campaign 1: Dream Crazy */}
            <div className="bg-[#141414] border border-white/5 hover:border-white/20 p-6 rounded-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-nike-gray mb-3">
                  <span>2018</span>
                  <span className="bg-white/10 text-white px-2 py-0.5 rounded">EMMY WINNER</span>
                </div>
                <h4 className="font-display text-2xl uppercase text-white mb-2">
                  "Dream Crazy"
                </h4>
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  Estrelada por Colin Kaepernick & Serena Williams
                </p>
                <blockquote className="text-xs italic text-neutral-300 border-l border-white/30 pl-3 mb-4">
                  "Acredite em algo. Mesmo que isso signifique sacrificar tudo."
                </blockquote>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  A Nike assumiu um posicionamento sociopolítico de imenso risco que resultou em boicotes conservadores temporários, mas gerou <strong>US$ 6 bilhões em valorização de mercado</strong> e consagrou a lealdade inabalável dos consumidores mais jovens.
                </p>
              </div>
            </div>

            {/* Campaign 2: You Can't Stop Us */}
            <div className="bg-[#141414] border border-white/5 hover:border-white/20 p-6 rounded-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-nike-gray mb-3">
                  <span>2020</span>
                  <span className="bg-white/10 text-white px-2 py-0.5 rounded">VIRAL MASTERPIECE</span>
                </div>
                <h4 className="font-display text-2xl uppercase text-white mb-2">
                  "You Can't Stop Us"
                </h4>
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  Montagem de tela dividida com 72 atletas sincronizados
                </p>
                <blockquote className="text-xs italic text-neutral-300 border-l border-white/30 pl-3 mb-4">
                  "Não importa o que aconteça com o mundo, o esporte nos unirá."
                </blockquote>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Lançada no ápice da quarentena global, a peça mesclou 4.000 horas de filmagens em uma sincronia milimétrica perfeita entre esportes masculinos, femininos e paralímpicos, ultrapassando <strong>50 milhões de visualizações em 48 horas</strong>.
                </p>
              </div>
            </div>

            {/* Campaign 3: Write The Future */}
            <div className="bg-[#141414] border border-white/5 hover:border-white/20 p-6 rounded-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-nike-gray mb-3">
                  <span>2010</span>
                  <span className="bg-white/10 text-white px-2 py-0.5 rounded">CANILLES GRAND PRIX</span>
                </div>
                <h4 className="font-display text-2xl uppercase text-white mb-2">
                  "Write The Future"
                </h4>
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  Dirigido por Alejandro González Iñárritu (Copa do Mundo)
                </p>
                <blockquote className="text-xs italic text-neutral-300 border-l border-white/30 pl-3 mb-4">
                  "Um único segundo de ação pode mudar para sempre o destino de uma nação."
                </blockquote>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Mesclando cultura pop (Homer Simpson, Roger Federer, Cristiano Ronaldo e Wayne Rooney), o filme estabeleceu o padrão máximo de como o esporte é um drama de consequências cósmicas na imaginação dos fãs.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
