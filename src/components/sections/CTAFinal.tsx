import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTAFinal() {
  const WA = "https://wa.me/5516988617310?text=Olá!%20Estou%20no%20site%20da%20Contheo%20e%20gostaria%20de%20agendar%20meu%20diagnóstico%20gratuito.";

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden bg-[#030712] text-white border-t border-slate-800/80">
      {/* Ambient Top Light Beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-25 pointer-events-none blur-[140px]"
        style={{
          background: "radial-gradient(ellipse at center, #00E5C9 0%, #008272 50%, transparent 70%)",
        }}
      />

      {/* Subtle Ambient Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-[1.15] tracking-tight mb-3 sm:mb-4 font-heading">
            Pronto para transformar{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0D0] via-[#00E5C9] to-[#CBD5E1]">
              sua operação?
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-normal">
            Agende um diagnóstico gratuito de <strong className="text-white font-semibold">15 minutos</strong> — o tempo necessário para avaliarmos se o seu negócio se encaixa no plano de trabalho da Contheo e onde podemos acelerar seus resultados.
          </p>

          {/* Primary Action Button */}
          <div className="flex justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-[#00A892] via-[#00E5C9] to-[#00F0D0] hover:brightness-105 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_35px_rgba(0,229,201,0.35)] hover:shadow-[0_0_45px_rgba(0,229,201,0.5)] group"
            >
              <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
