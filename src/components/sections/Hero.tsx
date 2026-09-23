"use client";

import React, { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PartnerBadges } from "@/components/ui/PartnerBadges";

export function Hero() {
  const WA = "https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Contheo.";
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-88px)] flex flex-col justify-center pt-32 pb-10 sm:pt-36 sm:pb-12 overflow-hidden bg-[#030610] text-white selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* 1. Base Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft cyan/teal orb right */}
        <div
          className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full opacity-25 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #00E5C9 0%, #008272 50%, transparent 70%)",
          }}
        />
        {/* Soft dark obsidian vignette left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-35 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #05141B 0%, #030610 70%)",
          }}
        />
        {/* Subtle center ambient light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-15 blur-[150px]"
          style={{
            background: "radial-gradient(ellipse at center, #00F0D0 0%, #00BFA6 35%, transparent 70%)",
          }}
        />
      </div>

      {/* 2. Delicate Static Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3. Subtle & Elegant Mouse Torch (Paleta Contheo) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 201, 0.14) 0%, rgba(0, 191, 166, 0.07) 35%, transparent 75%)`,
          }}
        />
      </div>

      {/* 4. Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030610]/70 via-transparent to-[#030610] pointer-events-none z-0" />

      <div className="container-custom relative z-10 max-w-5xl mx-auto text-center my-auto">
        <FadeIn>
          {/* Main Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.2] mb-4 font-heading">
            Gestão empresarial integrada com IA
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0D0] via-[#00E5C9] to-[#CBD5E1] drop-shadow-[0_0_35px_rgba(0,229,201,0.25)]">
              Da operação ao nível estratégico, um único parceiro.
            </span>
          </h1>

          {/* Subtitle with highlighted keywords */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-7 font-normal">
            A Contheo é a consultoria de tecnologia que se adapta à sua operação: atuamos com total{" "}
            <strong className="text-white font-semibold underline decoration-[#00E5C9]/60 decoration-2 underline-offset-4">flexibilidade</strong> para o seu processo de{" "}
            <strong className="text-white font-semibold underline decoration-[#CBD5E1]/60 decoration-2 underline-offset-4">indústria, serviços ou comércio</strong>, operamos com total{" "}
            <strong className="text-white font-semibold">segurança</strong> para os seus dados e{" "}
            <strong className="text-white font-semibold">eficiente</strong> do apontamento de processos ao fechamento estratégico.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8">
            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,201,0.35)] group"
            >
              <span>Ver a Contheo em ação</span>
              <svg className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#00E5C9]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(0,229,201,0.2)]"
            >
              <span>Falar com um especialista</span>
            </a>
          </div>

          {/* Bottom Hero Partners Row */}
          <div className="pt-5 sm:pt-6 border-t border-white/10 w-full flex justify-center">
            <PartnerBadges />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
