import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Trabalho manual excessivo",
    desc: "Sua equipe perde horas por dia copiando dados entre planilhas e sistemas que não conversam entre si.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Decisões sem dados reais",
    desc: "Relatórios demoram, têm erros e quando chegam já estão desatualizados. Você decide no feeling.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
      </svg>
    ),
    title: "Sistemas isolados e caros",
    desc: "Você paga por 3 ou 4 ferramentas que não se integram — gerando retrabalho constante e custos desnecessários.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
      </svg>
    ),
    title: "Gargalos que travam o crescimento",
    desc: "O faturamento sobe, mas a operação não suporta. Os mesmos erros se repetem e a escala fica inviável.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
    title: "Presença digital que não converte",
    desc: "Seu site é desatualizado, não ranqueia no Google e não atrai clientes qualificados para a equipe comercial.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Custo alto, margem comprimida",
    desc: "O volume de trabalho aumenta, mas as despesas operacionais sobem mais rápido, esmagando o lucro líquido.",
  },
];

export function Problem() {
  const WA = "https://wa.me/5516988617310?text=Olá!%20Reconheço%20alguns%20cenários%20do%20site%20e%20gostaria%20de%20ajuda.";

  return (
    <section className="bg-[#080C14] py-24 relative overflow-hidden border-b border-slate-800/80">
      <div className="container-custom relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="pill-primary mb-6 mx-auto w-fit">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              Cenários que eliminamos
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Reconhece algum desses{" "}
              <span className="text-gradient">desafios?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              São os gargalos operacionais mais frequentes que diagnosticamos e resolvemos para nossos clientes.
            </p>
          </div>
        </FadeIn>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problems.map((prob, idx) => (
            <FadeIn key={idx}>
              <div className="group relative bg-[#111928] rounded-3xl p-7 border border-slate-700/80 hover:border-contheo-bright hover:bg-[#162238] hover:shadow-2xl hover:shadow-contheo-primary/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-lg">

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-contheo-bright bg-contheo-primary/15 border border-contheo-primary/30 shrink-0"
                  >
                    {prob.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-contheo-bright transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 font-normal">{prob.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-contheo-primary to-contheo-bright transition-all duration-300 rounded-b-3xl" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Link */}
        <FadeIn>
          <div className="text-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-contheo-primary hover:text-[#0B2545] transition-colors group text-base"
            >
              <span>Isso tem solução — vamos conversar agora?</span>
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
