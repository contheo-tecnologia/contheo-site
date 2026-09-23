import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const rows = [
  ["Abordagem",      "Vende pacotes prontos genéricos", "Diagnóstico profundo + solução sob medida"],
  ["Entrega",        "Entrega o sistema e você se vira",  "Implementação + treinamento + sustentação"],
  ["Prazo",          "Meses sem visibilidade real",       "Entregas ágeis e incrementais em semanas"],
  ["Comunicação",    "Suporte burocrático por ticket",    "Acompanhamento direto e consultivo"],
  ["Visão",          "Foco exclusivo em código",          "Foco no resultado e lucro do negócio"],
  ["Propriedade",    "Caixa preta com dependência",       "100% seu, documentado e transferível"],
];

const differentials = [
  {
    title: "Foco em Resultado",
    desc: "Não vendemos apenas tecnologia, entregamos soluções que aumentam seu lucro líquido ou reduzem seus custos operacionais.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    title: "Entregas Rápidas",
    desc: "Sem projetos intermináveis. Você começa a ver e utilizar resultados reais em semanas, testando cada módulo em produção.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    title: "Comunicação Transparente",
    desc: "Contato direto com quem resolve seu problema. Sem intermediários, com reuniões ágeis e relatórios claros de progresso.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
  },
  {
    title: "Suporte Pós-Entrega",
    desc: "Não sumimos após o deploy. Acompanhamos o uso diário, garantimos estabilidade e evoluímos seu sistema continuamente.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
];

export function Differentials() {
  return (
    <section className="bg-[#080C14] py-24 relative overflow-hidden border-b border-slate-800/80">
      <div className="container-custom relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="pill-primary mb-6 mx-auto w-fit">Por que a Contheo?</div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              A diferença que você sente{" "}
              <span className="text-gradient">desde o primeiro dia</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Comparison table */}
          <FadeIn>
            <div className="rounded-3xl overflow-hidden border border-slate-700/80 bg-[#111928] shadow-xl">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#162238] border-b border-slate-700">
                <div className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider">Critério</div>
                <div className="p-4 text-xs font-bold text-center text-slate-400 uppercase tracking-wider border-x border-slate-700">
                  Mercado Comum
                </div>
                <div
                  className="p-4 text-xs font-bold text-center text-contheo-bright uppercase tracking-wider bg-contheo-primary/15"
                >
                  Contheo ✦
                </div>
              </div>

              {rows.map(([criterion, bad, good], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-t border-slate-800 ${i % 2 === 0 ? "bg-[#111928]" : "bg-[#141F33]"}`}
                >
                  <div className="p-4 text-sm font-semibold text-white">{criterion}</div>
                  <div className="p-4 border-x border-slate-800 flex flex-col items-center justify-center gap-1 text-center">
                    <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-[11px] text-slate-400 leading-tight">{bad}</span>
                  </div>
                  <div
                    className="p-4 flex flex-col items-center justify-center gap-1 text-center bg-contheo-primary/5"
                  >
                    <svg className="w-4 h-4 text-contheo-bright shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-[11px] text-white font-semibold leading-tight">{good}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Differential cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <FadeIn key={i}>
                <div className="group bg-[#111928] rounded-2xl p-6 border border-slate-700/80 hover:border-contheo-bright hover:bg-[#162238] hover:shadow-2xl hover:shadow-contheo-primary/10 transition-all duration-300 h-full flex flex-col shadow-lg">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-contheo-bright bg-contheo-primary/15 border border-contheo-primary/30 shrink-0"
                  >
                    {d.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-contheo-bright transition-colors">{d.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1 font-normal">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
