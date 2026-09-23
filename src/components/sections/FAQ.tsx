"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function FAQ() {
  const faqs = [
    {
      q: "Como funciona o diagnóstico gratuito?",
      a: "É uma reunião online de 15 minutos com nossos especialistas — o tempo necessário para avaliarmos se a sua empresa se encaixa no plano de trabalho da Contheo e apontar as principais oportunidades de aceleração tecnológica, sem qualquer custo ou compromisso.",
    },
    {
      q: "Qual o prazo médio para desenvolver um sistema ou automação?",
      a: "Trabalhamos com metodologia ágil de entregas incrementais. O tempo total varia com o escopo, mas entregamos o primeiro módulo funcional (MVP) normalmente entre 3 a 6 semanas para você já validar e usar em produção.",
    },
    {
      q: "Vocês atendem empresas de qual porte e segmento?",
      a: "Atendemos desde empresas em fase de estruturação operacional que precisam organizar processos para crescer, até médias e grandes corporações que buscam automações avançadas e sistemas integrados sob medida.",
    },
    {
      q: "É possível automatizar processos sem substituir meu sistema ou EIP atual?",
      a: "Sim, com certeza. Desenvolvemos robôs (RPA), scripts e integrações via API que conectam o seu sistema atual a planilhas, WhatsApp, CRMs e bancos de dados sem necessidade de troca traumática de software.",
    },
    {
      q: "O site e plataforma web já vêm otimizados para o Google?",
      a: "Sim. Todos os nossos sites são construídos com Next.js e TypeScript, atingindo notas máximas no Google Core Web Vitals e com implementação completa de SEO técnico desde a primeira linha de código.",
    },
    {
      q: "Após a entrega, a Contheo oferece suporte contínuo?",
      a: "Sim. Disponibilizamos planos de sustentação e evolução contínua, garantindo monitoramento, backups automáticos, segurança e horas dedicadas para criação de novas funcionalidades conforme sua demanda.",
    },
    {
      q: "Vocês trabalham com contrato mensal ou escopo fechado por projeto?",
      a: "Trabalhamos em ambos os modelos. Para desenvolvimentos de sistemas e automações pontuais, atuamos com escopo e prazos fechados. Para sustentação, evolução contínua e mídia digital, atuamos no modelo de parceria mensal recorrente.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#080C14] py-24 relative overflow-hidden border-b border-slate-800/80">
      <div className="container-custom max-w-4xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="pill-primary mb-6 mx-auto w-fit">Dúvidas Frequentes</div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto font-normal">
              Tire suas dúvidas sobre nossos serviços de tecnologia e metodologia de trabalho.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx}>
              <div
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  openIndex === idx
                    ? "border-contheo-bright/60 bg-[#162238] shadow-lg shadow-contheo-primary/10 ring-1 ring-contheo-bright/30"
                    : "border-slate-800/90 bg-[#111928] hover:border-slate-700 hover:bg-[#141F32]"
                )}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between focus:outline-none gap-4"
                >
                  <span className="font-bold text-white text-base md:text-lg pr-4">{faq.q}</span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center transition-colors shrink-0",
                      openIndex === idx
                        ? "bg-contheo-bright text-slate-950 font-bold shadow-md shadow-contheo-bright/20"
                        : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                    )}
                  >
                    <svg
                      className={cn("w-4 h-4 transition-transform duration-200", openIndex === idx ? "rotate-180" : "")}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="px-7 pb-6">
                    <p className="text-slate-300 border-t border-slate-700/60 pt-4 leading-relaxed text-sm md:text-base font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
