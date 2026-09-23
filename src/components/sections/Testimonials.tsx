import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Diretor de Operações",
    company: "VarejoX Distribuidora",
    initials: "CE",
    color: "#00BFA6",
    quote: "A automação de WhatsApp e a integração de estoque que a Contheo implementou economizaram o trabalho de 2 atendentes e zeraram nossos erros de pedido. Tivemos retorno do investimento em menos de 60 dias.",
  },
  {
    name: "Mariana Silva",
    role: "CEO & Fundadora",
    company: "Clínica Saúde+",
    initials: "MS",
    color: "#0B2545",
    quote: "Os sistemas prontos de mercado não se adaptavam aos nossos fluxos de atendimento. A Contheo desenhou e implantou um EIP sob medida para a clínica. Hoje temos controle total e em tempo real.",
  },
  {
    name: "Rafael Costa",
    role: "Fundador",
    company: "RC Logística & Transportes",
    initials: "RC",
    color: "#00A892",
    quote: "Refizemos nossa plataforma web e todo o funil de aquisição digital com a Contheo. Nossos leads qualificados triplicaram em 2 meses. Uma equipe extremamente técnica, ágil e focada em resultado.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16 relative overflow-hidden border-b border-slate-200/80">
      <div className="container-custom relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#00BFA6]/10 text-[#008272] border border-[#00BFA6]/25 mb-3 mx-auto w-fit shadow-sm">
              Depoimentos & Parcerias
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              O que nossos clientes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008272] via-[#00A892] to-[#00BFA6]">
                dizem
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={i}>
              <div className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-contheo-primary hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm">

                {/* Subtle quote mark */}
                <div
                  className="absolute top-2 right-4 text-6xl font-black leading-none opacity-5 select-none font-heading text-contheo-primary"
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 flex-1 italic relative z-10 font-normal">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs text-slate-950 shrink-0 bg-gradient-to-r from-contheo-primary to-[#00E5C9]"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">{t.name}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{t.role} · {t.company}</div>
                  </div>
                </div>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-b-2xl bg-contheo-primary"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
