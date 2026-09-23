import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const solutions = [
  {
    num: "01", span: "lg:col-span-1",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Automação de Processos",
    desc: "Eliminamos o trabalho manual repetitivo da sua operação conectando sistemas e criando robôs (RPA) que trabalham 24/7 sem erros.",
    items: ["Integração via APIs REST", "Robôs de software (RPA)", "Bots de WhatsApp e e-mail", "Automação de relatórios e rotinas"],
    accent: "#00BFA6",
  },
  {
    num: "02", span: "lg:col-span-1",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Aprimoramento Operacional",
    desc: "Mapeamos e redesenhamos seus fluxos operacionais para máxima eficiência, eliminando gargalos antes da implementação técnica.",
    items: ["Mapeamento AS-IS / TO-BE", "Padronização BPM", "Definição de KPIs de desempenho", "Redução de desperdícios"],
    accent: "#0B2545",
  },
  {
    num: "03", span: "lg:col-span-1",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Sistemas de Gestão (EIP/CRM)",
    desc: "Sistemas dedicados às regras reais do seu negócio. Do controle de estoque ao painel executivo.",
    items: ["EIP Modular sob medida", "CRM para equipes comerciais", "Dashboards em tempo real", "Modernização de sistemas legados"],
    accent: "#00BFA6",
  },
  {
    num: "04", span: "lg:col-span-1",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
    title: "Sites e Plataformas Web",
    desc: "Presença digital moderna e ultra-rápida. Design orientado a UX/UI, alta taxa de conversão e otimização avançada para o Google (SEO).",
    items: ["Sites corporativos e Landing Pages", "Portais e plataformas web B2B", "SEO técnico on-page", "Painel de gestão intuitivo"],
    accent: "#64748B",
  },
  {
    num: "05", span: "lg:col-span-2",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: "Mídia e Marketing Digital",
    desc: "Estratégia e execução orientada a dados para acelerar suas vendas e expandir seu alcance no mercado com previsibilidade.",
    items: ["Gestão de Tráfego Pago (Google Ads & Meta Ads)", "Funis de vendas automatizados", "Relatórios de ROI em tempo real", "Estratégia de posicionamento digital"],
    accent: "#00BFA6",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-[#F8FAFC] py-24 relative overflow-hidden scroll-mt-12 border-b border-slate-200/80">
      <div className="container-custom relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="pill-primary mb-5">Nossas Soluções</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-xl">
                Tudo que sua empresa precisa para{" "}
                <span className="text-gradient">crescer com tecnologia</span>
              </h2>
            </div>
            <p className="text-slate-600 max-w-xs md:text-right text-sm leading-relaxed font-normal">
              Atuamos como seu braço estratégico de tecnologia e inovação contínua.
            </p>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {solutions.map((svc, idx) => (
            <FadeIn key={idx} className={svc.span}>
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-contheo-primary hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer shadow-sm">

                {/* Number watermark */}
                <div
                  className="absolute top-6 right-6 text-7xl font-black opacity-[0.07] select-none font-heading text-slate-900"
                >
                  {svc.num}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105 bg-slate-50 border border-slate-200 shadow-sm text-contheo-primary shrink-0"
                  >
                    {svc.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-normal">{svc.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {svc.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 shrink-0 mt-0.5 text-contheo-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Contheo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-contheo-primary group-hover:text-contheo-dark transition-colors"
                  >
                    Falar com especialista
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 rounded-b-3xl bg-contheo-primary"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
