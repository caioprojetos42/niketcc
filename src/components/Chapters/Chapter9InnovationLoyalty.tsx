import React from 'react';
import { Cpu, Repeat, Users, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Chapter9InnovationLoyalty: React.FC = () => {
  return (
    <section id="capitulo-09" className="relative bg-[#101010] text-white py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-nike-gray mb-4">
          <span className="text-white font-bold">09 // PILAR ESTRATÉGICO</span>
          <span>•</span>
          <span>RADICAL INNOVATION & ECOSYSTEM RETENTION</span>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-white">
            Capítulo 09 — Inovação e Fidelização
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Tema: Como a Nike reinventa tecnologias continuamente e constrói um ecossistema digital que retém o cliente por décadas
          </p>
        </div>

        {/* Narrative Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-neutral-300">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              O marketing de alta intensidade e os patrocínios milionários atraem a atenção inicial, mas <strong>é a excelência em inovação de produto que sustenta a retenção perpétua</strong>. A Nike nunca se permitiu ser apenas uma empresa de imagem: seu laboratório de pesquisa em Beaverton (Nike Explore Team Sport Research Lab) conta com dezenas de fisiologistas, engenheiros biomecânicos e cientistas de dados.
            </p>
            <p>
              Para além do hardware (o tênis), a marca construiu um fosso competitivo (moat) com o seu ecossistema digital: aplicativos como <strong>Nike Run Club (NRC)</strong> e <strong>Nike Training Club (NTC)</strong> acompanham o treino diário do atleta, transformando a Nike de uma compradora esporádica em uma parceira diária de saúde e superação.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#161616] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-nike-accent flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4" />
                <span>O Programa Nike Membership</span>
              </span>
              <h3 className="font-display text-2xl uppercase text-white mb-2">
                Mais de 160 Milhões de Membros
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Os membros cadastrados no ecossistema da Nike gastam em média <strong>três vezes mais</strong> do que clientes casuais. Eles recebem acesso antecipado a lançamentos, treinos guiados por áudio, convites para provas de rua e testes de produtos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs font-mono text-nike-gray">
              <span>LTV (LIFETIME VALUE)</span>
              <span className="text-white font-bold">+300% em Membros Ativos</span>
            </div>
          </div>
        </div>

        {/* 3 Landmark Product Innovations */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white mb-8 flex items-center space-x-3">
            <Zap className="w-6 h-6 text-white" />
            <span>As Grandes Rupturas Tecnológicas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#141414] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono text-nike-accent uppercase block mb-2">1979 — PRESENTE</span>
              <h4 className="font-display text-2xl uppercase text-white mb-2">
                Tecnologia Nike Air
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Apresentada pelo engenheiro aeroespacial Frank Rudy, utilizou cápsulas de gás inerte pressurizado para absorção de impacto. Em 1987, Tinker Hatfield tornou a cápsula visível no Air Max 1, criando uma das maiores franquias da história do calçado.
              </p>
            </div>

            <div className="bg-[#141414] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono text-nike-accent uppercase block mb-2">2012 — SUSTENTABILIDADE</span>
              <h4 className="font-display text-2xl uppercase text-white mb-2">
                Tecnologia Flyknit
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tear digital que tricota o cabedal inteiro em fios contínuos de poliéster reciclado, reduzindo o desperdício de material de corte em até 60% e criando um calçado ultraleve com ajuste semelhante a uma meia anatômica.
              </p>
            </div>

            <div className="bg-[#141414] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all">
              <span className="text-[10px] font-mono text-nike-accent uppercase block mb-2">2017 — REVOLUÇÃO BIOMECÂNICA</span>
              <h4 className="font-display text-2xl uppercase text-white mb-2">
                Vaporfly & Alphafly (Breaking2)
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Combinação de placa de fibra de carbono rígida com espuma de alta resiliência ZoomX, comprovadamente melhorando a economia energética do corredor em 4%. A tecnologia quebrou todos os recordes mundiais da maratona.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Thesis */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-display text-2xl uppercase text-white">
              A Inovação como Escudo Contra a Obsolescência
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              Nenhuma marca de vestuário consegue manter a relevância global por mais de seis décadas sem uma disciplina fanática de reinventar seus próprios sucessos antes que a concorrência o faça.
            </p>
          </div>
          <div className="flex-shrink-0 px-6 py-3 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider">
            Relevância Perpétua
          </div>
        </div>

      </div>
    </section>
  );
};
