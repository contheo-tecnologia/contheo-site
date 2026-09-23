import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos sua operação, processos e objetivos em profundidade. Identificamos gargalos e oportunidades reais de ganho de eficiência.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Diagnóstico empresarial e levantamento de processos",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    duration: "1 semana",
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "Desenhamos a arquitetura da solução com escopo, tecnologias e cronograma claros. Você valida e aprova cada etapa.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Planejamento estratégico e arquitetura de sistemas",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    duration: "1–2 semanas",
  },
  {
    num: "03",
    title: "Implementação",
    desc: "Desenvolvimento ágil com entregas incrementais e testes contínuos. Sua equipe acompanha e vê valor prático em produção rapidamente.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Implementação de tecnologia, sistemas e IA",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    duration: "3–8 semanas",
  },
  {
    num: "04",
    title: "Suporte e Evolução",
    desc: "Treinamos seus colaboradores, garantimos sustentação contínua e evoluímos novas funcionalidades conforme sua empresa cresce.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Suporte contínuo, treinamento e evolução da equipe",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    duration: "Contínuo",
  },
];

export function HowWeWork() {
  return (
    <section id="metodologia" className="relative py-20 sm:py-24 overflow-hidden bg-white border-y border-slate-200 text-slate-900">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00E5C9]/10 text-[#008272] border border-[#00E5C9]/30 mb-4 shadow-sm">
              Nossa Metodologia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Como transformamos seu negócio{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008272] via-[#00A892] to-[#00BFA6]">
                em 4 etapas
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Abordagem consultiva completa: do mapeamento detalhado dos processos à implementação e acompanhamento contínuo da sua equipe.
            </p>
          </div>
        </FadeIn>

        {/* Steps grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <FadeIn key={idx}>
              <div className="group bg-[#F8FAFC] hover:bg-white rounded-3xl p-5 h-full border border-slate-200/90 hover:border-[#00E5C9]/70 hover:shadow-xl hover:shadow-[#00E5C9]/10 transition-all duration-300 flex flex-col shadow-sm">

                {/* Card Photo with Overlays & Badges */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/80 shrink-0 bg-slate-100">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Badges on photo */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-xs font-black text-white font-heading shadow-sm">
                    {step.num}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#008272]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {step.duration}
                  </div>
                </div>

                {/* Title and Icon */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#008272] bg-[#00E5C9]/10 border border-[#00E5C9]/25 shrink-0">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1 font-normal">{step.desc}</p>

                {/* Bottom accent line */}
                <div className="mt-5 h-[2px] w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-[#008272] group-hover:to-[#00E5C9] transition-all rounded-full" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center mt-14">
            <a
              href="https://wa.me/5516988617310?text=Olá!%20Quero%20iniciar%20o%20diagnóstico%20da%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-slate-900/15"
            >
              <svg className="w-5 h-5 text-[#00E5C9]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Iniciar meu diagnóstico gratuito
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
