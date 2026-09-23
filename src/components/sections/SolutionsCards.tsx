import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const solutionsList = [
  {
    title: "Gestão & IA",
    desc: "Inteligência artificial aplicada ao negócio, modelos preditivos e automações inteligentes para decisões ágeis e estratégicas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tecnologia integrada 'EIP'",
    desc: "Plataforma empresarial sob medida: unificação de finanças, estoque, compras e operações em tempo real, sem silos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Indústria, serviço e comércio",
    desc: "Controle de chão de fábrica, ordens de serviço, gestão de estoque e rastreabilidade ágil de ponta a ponta.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CRM",
    desc: "Pipeline de vendas estruturado, gestão do relacionamento com clientes, funil comercial e integração direta com WhatsApp.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

export function SolutionsCards() {
  return (
    <section id="solucoes" className="bg-[#050811] py-20 sm:py-24 relative overflow-hidden scroll-mt-12 text-white">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <FadeIn>
          <div className="max-w-3xl mb-14">
            {/* Tag / Category Indicator */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#00E5C9] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                SOLUÇÕES
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-heading">
              A consultoria de tecnologia que se adapta à sua operação
            </h2>

            {/* Subtitle */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Soluções modulares, inteligentes e flexíveis para levar empresas de manufatura, serviços e comércio ao próximo nível de eficiência.
            </p>
          </div>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsList.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between border border-slate-800/80 bg-slate-900/60 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#00E5C9]/15 hover:-translate-y-1.5 cursor-pointer">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                {/* Top Accent Bar inside card */}
                <div className="relative z-10">
                  <span className="inline-block w-8 h-1 bg-[#00E5C9] rounded-full group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Bottom Title & Description */}
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2 group-hover:text-[#00E5C9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Glow Border Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-[#00E5C9]/0 group-hover:border-[#00E5C9]/40 transition-colors duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
