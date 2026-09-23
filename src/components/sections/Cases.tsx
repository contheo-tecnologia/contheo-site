import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const cases = [
  {
    title: "Desenvolvimento de Mídia",
    category: "Mídia & Comunicação",
    image: "/images/cases/web-development.jpg",
    desc: "Criação e produção de mídia estratégica, comunicação visual e materiais de alto impacto para fortalecer a presença institucional e a autoridade da sua marca.",
    tags: ["Mídia Estratégica", "Comunicação Visual", "Posicionamento", "Branding Digital"],
    metric: "100%",
    metricLabel: "alinhamento com a identidade da marca",
    color: "#00BFA6",
  },
  {
    title: "Bot de Operação e Consulta",
    category: "Automação de Processos",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80",
    desc: "Automação inteligente para consultas em tempo real, triagem operacional, processamento de pedidos e relatórios de status via WhatsApp sem intervenção manual.",
    tags: ["WhatsApp API", "IA Integrada", "Consultas em Tempo Real", "Webhooks"],
    metric: "3h/dia",
    metricLabel: "economizadas por operador",
    color: "#00A892",
  },
  {
    title: "Plataforma Contheo EIP",
    category: "Sistema de Gestão",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    desc: "EIP modular sob medida para comércio e serviços corporativos, substituindo 4 ferramentas desconexas por um único sistema integrado com PDV, OS, Financeiro e CRM.",
    tags: ["FastAPI", "React", "PostgreSQL", "WhatsApp Bot"],
    metric: "100%",
    metricLabel: "dos processos operacionais unificados",
    color: "#0B2545",
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-[#050811] pt-12 sm:pt-16 pb-24 relative overflow-hidden border-b border-slate-800/80 text-white">
      {/* Top Ambient Glow connecting with SolutionsCards */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] opacity-15 pointer-events-none blur-[120px]"
        style={{
          background: "radial-gradient(ellipse at center, #00E5C9 0%, #008272 50%, transparent 70%)",
        }}
      />
      <div className="container-custom relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="pill-primary mb-5">Portfólio & Resultados</div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Projetos que{" "}
                <span className="text-gradient">transformaram</span><br />
                negócios reais
              </h2>
            </div>
            <a
              href="https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20conhecer%20mais%20cases%20da%20Contheo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-2xl text-sm font-bold border border-slate-700 bg-slate-900/80 text-white hover:border-contheo-primary hover:bg-slate-800 transition-colors shadow-sm"
            >
              Falar sobre meu projeto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Cards com Fotos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <FadeIn key={idx}>
              <div className="group bg-[#0D1527] rounded-3xl overflow-hidden border border-slate-800/90 hover:border-contheo-bright hover:shadow-2xl hover:shadow-contheo-primary/10 transition-all duration-300 h-full flex flex-col shadow-lg">

                {/* Foto do Case */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                    <span className="text-[11px] font-bold text-white">
                      {c.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1 font-normal">{c.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metric Highlight */}
                  <div className="flex items-center gap-4 pt-5 border-t border-slate-800">
                    <div className="text-3xl font-black font-heading text-contheo-bright">
                      {c.metric}
                    </div>
                    <div className="text-xs text-slate-400 font-medium leading-tight">
                      {c.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
