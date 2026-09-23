import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const phases = [
  {
    id: "imersao",
    phase: "ETAPA 01 • IMERSÃO",
    title: "Mapeamento de processos e gargalos",
    desc: "Analisamos a fundo os fluxos de trabalho e dados da sua empresa para identificar desperdícios e estruturar o plano de ação ideal.",
  },
  {
    id: "arquitetura",
    phase: "ETAPA 02 • ARQUITETURA",
    title: "Construção e validação conjunta",
    desc: "Desenvolvemos telas, dashboards e automações para teste prático. Cada detalhe é validado com sua equipe antes de ir ao ar.",
  },
  {
    id: "integracao",
    phase: "ETAPA 03 • INTEGRAÇÃO",
    title: "Conexão de sistemas e capacitação",
    desc: "Conectamos suas ferramentas, migramos os dados com segurança e capacitamos os colaboradores com treinamentos focados na prática.",
  },
  {
    id: "escala",
    phase: "ETAPA 04 • ESCALA",
    title: "Monitoramento e evolução contínua",
    desc: "Acompanhamos indicadores de eficiência em tempo real e prestamos suporte ativo para calibrar novas melhorias conforme seu negócio cresce.",
  },
];

export function WhyContheo() {
  const WA = "https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20metodologia%20da%20Contheo.";

  return (
    <section id="por-que-contheo" className="bg-white py-12 sm:py-16 relative overflow-hidden text-slate-900 border-y border-slate-200">
      {/* Subtle Ambient Light Gradient in corner matching logo teal */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 201, 0.2) 0%, rgba(0, 168, 146, 0.08) 50%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        {/* Top Header Row */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-10 sm:mb-12">
            {/* Left Column: Eyebrow + Headline + Intro */}
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#00A892] rounded-full" />
                <span className="text-xs font-bold tracking-widest text-[#00A892] uppercase font-mono">
                  METODOLOGIA CONTHEO
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[1.15] mb-4 font-heading">
                Modernização ágil,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A892] via-[#00BFA6] to-[#0B2545]">
                  no ritmo do seu negócio.
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                <strong className="text-slate-900 font-semibold">Transformamos sua operação sem interromper sua rotina.</strong> Unimos diagnóstico preciso, engenharia de processos e suporte próximo para entregar ferramentas sob medida e sua equipe produtiva desde o primeiro dia.
              </p>
            </div>

            {/* Right Column: High-Tech Quantum AI Core & Holographic Orbital Gyroscope */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center group cursor-pointer">
                {/* Ambient Soft Glow underneath */}
                <div
                  className="absolute inset-0 bg-[#00E5C9]/15 rounded-full blur-2xl transform pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:bg-[#00E5C9]/25"
                  style={{
                    animation: "coreAuraPulse 4s ease-in-out infinite",
                  }}
                />


                <div className="absolute -bottom-3 z-20 px-3 py-0.5 rounded-full bg-[#00E5C9]/10 border border-[#00E5C9]/35 text-[#008272] shadow-sm text-[9px] font-mono font-bold tracking-widest uppercase">
                  MÉTODO ÁGIL & SEGURO
                </div>

                {/* High-Tech Holographic Orbital Gyroscope SVG */}
                <svg
                  viewBox="0 0 240 240"
                  className="w-full h-full relative z-10 drop-shadow-[0_15px_30px_rgba(0,191,166,0.2)] transition-transform duration-500 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                      <stop offset="35%" stopColor="#00F0D0" stopOpacity="0.9" />
                      <stop offset="70%" stopColor="#00E5C9" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#008272" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient id="gimbalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0D0" />
                      <stop offset="45%" stopColor="#00E5C9" />
                      <stop offset="75%" stopColor="#0B2545" />
                      <stop offset="100%" stopColor="#00F0D0" />
                    </linearGradient>

                    <linearGradient id="gimbalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00A892" />
                      <stop offset="50%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#00F0D0" />
                    </linearGradient>

                    <linearGradient id="gimbalGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#00E5C9" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>

                    <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0D0" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00E5C9" stopOpacity="0" />
                    </linearGradient>

                    <style dangerouslySetInnerHTML={{ __html: `
                      @keyframes coreAuraPulse {
                        0%, 100% { transform: scale(0.8); opacity: 0.2; }
                        50% { transform: scale(1.1); opacity: 0.45; }
                      }
                      @keyframes spinGimbal1 {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes spinGimbal2 {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(-360deg); }
                      }
                      @keyframes spinGimbal3 {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes radarRotate {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes corePulseAnim {
                        0%, 100% { transform: scale(0.95); opacity: 0.85; }
                        50% { transform: scale(1.12); opacity: 1; }
                      }
                      @keyframes hexPulse {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.06); opacity: 0.9; }
                      }
                      @keyframes beaconPulse {
                        0%, 100% { r: 3.5px; opacity: 0.8; }
                        50% { r: 5px; opacity: 1; }
                      }
                      @keyframes particleFloatA {
                        0%, 100% { transform: translate(0, 0); opacity: 0.6; }
                        50% { transform: translate(5px, -6px); opacity: 1; }
                      }
                      @keyframes particleFloatB {
                        0%, 100% { transform: translate(0, 0); opacity: 0.5; }
                        50% { transform: translate(-6px, 5px); opacity: 0.95; }
                      }
                    `}} />
                  </defs>

                  {/* 1. Outer HUD Compass & Telemetry Ring */}
                  <circle
                    cx="120"
                    cy="120"
                    r="104"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  
                  {/* Outer Orbit Tick Marks */}
                  <circle
                    cx="120"
                    cy="120"
                    r="112"
                    stroke="#CBD5E1"
                    strokeWidth="0.8"
                    strokeDasharray="1 12"
                    style={{ transformOrigin: "120px 120px", animation: "spinGimbal2 40s linear infinite" }}
                  />

                  {/* 4 Corner Crosshairs */}
                  <g stroke="#94A3B8" strokeWidth="1.2" opacity="0.75">
                    {/* Top-Left */}
                    <path d="M 28 36 L 28 28 L 36 28" fill="none" />
                    {/* Top-Right */}
                    <path d="M 212 36 L 212 28 L 204 28" fill="none" />
                    {/* Bottom-Left */}
                    <path d="M 28 204 L 28 212 L 36 212" fill="none" />
                    {/* Bottom-Right */}
                    <path d="M 212 204 L 212 212 L 204 212" fill="none" />
                  </g>

                  {/* 2. Outer 3D Gyroscope Gimbal Ring (Angle -30deg) */}
                  <g style={{ transformOrigin: "120px 120px", transform: "rotate(-30deg)" }}>
                    <g style={{ transformOrigin: "120px 120px", animation: "spinGimbal1 16s linear infinite" }}>
                      <ellipse
                        cx="120"
                        cy="120"
                        rx="94"
                        ry="32"
                        stroke="url(#gimbalGrad1)"
                        strokeWidth="1.8"
                        fill="none"
                      />
                      {/* Traveling Satellite Node 1 */}
                      <circle
                        cx="214"
                        cy="120"
                        r="3.5"
                        fill="#00F0D0"
                        style={{ animation: "beaconPulse 2s ease-in-out infinite" }}
                      />
                      <circle cx="214" cy="120" r="7" stroke="#00E5C9" strokeWidth="0.8" opacity="0.6" />
                      {/* Counter Node */}
                      <circle cx="26" cy="120" r="2.5" fill="#008272" />
                    </g>
                  </g>

                  {/* 3. Middle 3D Gyroscope Gimbal Ring (Angle +45deg) */}
                  <g style={{ transformOrigin: "120px 120px", transform: "rotate(45deg)" }}>
                    <g style={{ transformOrigin: "120px 120px", animation: "spinGimbal2 12s linear infinite" }}>
                      <ellipse
                        cx="120"
                        cy="120"
                        rx="80"
                        ry="28"
                        stroke="url(#gimbalGrad2)"
                        strokeWidth="1.8"
                        strokeDasharray="14 6"
                        fill="none"
                      />
                      {/* Traveling Satellite Node 2 */}
                      <circle
                        cx="120"
                        cy="92"
                        r="3.5"
                        fill="#00E5C9"
                        style={{ animation: "beaconPulse 2.5s ease-in-out infinite" }}
                      />
                      <circle cx="120" cy="92" r="6" stroke="#00F0D0" strokeWidth="0.8" opacity="0.6" />
                      {/* Counter Node */}
                      <circle cx="120" cy="148" r="2.5" fill="#64748B" />
                    </g>
                  </g>

                  {/* 4. Inner Gyroscope Ring (Angle +80deg) */}
                  <g style={{ transformOrigin: "120px 120px", transform: "rotate(80deg)" }}>
                    <g style={{ transformOrigin: "120px 120px", animation: "spinGimbal3 8s linear infinite" }}>
                      <ellipse
                        cx="120"
                        cy="120"
                        rx="64"
                        ry="22"
                        stroke="url(#gimbalGrad3)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="184" cy="120" r="2.5" fill="#00F0D0" />
                    </g>
                  </g>

                  {/* 5. Hexagonal Cyber Matrix Mesh around core */}
                  <g
                    style={{
                      transformOrigin: "120px 120px",
                      animation: "hexPulse 3.5s ease-in-out infinite",
                    }}
                  >
                    <polygon
                      points="120,78 156,99 156,141 120,162 84,141 84,99"
                      stroke="#00E5C9"
                      strokeWidth="1.2"
                      strokeDasharray="5 4"
                      fill="none"
                      opacity="0.75"
                    />
                    {/* Hexagon Vertex Nodes */}
                    <circle cx="120" cy="78" r="2" fill="#00F0D0" />
                    <circle cx="156" cy="99" r="2" fill="#00E5C9" />
                    <circle cx="156" cy="141" r="2" fill="#00A892" />
                    <circle cx="120" cy="162" r="2" fill="#008272" />
                    <circle cx="84" cy="141" r="2" fill="#00A892" />
                    <circle cx="84" cy="99" r="2" fill="#00E5C9" />
                  </g>

                  {/* 6. Central Quantum Holographic Reactor Core */}
                  {/* Outer Energy Sphere Aura */}
                  <circle
                    cx="120"
                    cy="120"
                    r="28"
                    fill="url(#coreGlow)"
                    style={{
                      transformOrigin: "120px 120px",
                      animation: "corePulseAnim 2.8s ease-in-out infinite",
                    }}
                  />

                  {/* Geodesic Wireframe Spherical Lines */}
                  <ellipse cx="120" cy="120" rx="24" ry="9" stroke="#00F0D0" strokeWidth="0.9" opacity="0.8" />
                  <ellipse cx="120" cy="120" rx="9" ry="24" stroke="#00E5C9" strokeWidth="0.9" opacity="0.8" />
                  <circle cx="120" cy="120" r="24" stroke="#008272" strokeWidth="1" strokeDasharray="3 3" opacity="0.65" />

                  {/* Optical Radar Scanner Line */}
                  <g style={{ transformOrigin: "120px 120px", animation: "radarRotate 3s linear infinite" }}>
                    <line
                      x1="120"
                      y1="120"
                      x2="120"
                      y2="88"
                      stroke="#00F0D0"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <polygon
                      points="120,120 112,88 128,88"
                      fill="url(#radarSweepGrad)"
                      opacity="0.35"
                    />
                  </g>

                  {/* Central Pure Glowing Core Nucleus */}
                  <circle cx="120" cy="120" r="8" fill="#00E5C9" />
                  <circle cx="120" cy="120" r="4.5" fill="#FFFFFF" />

                  {/* 7. Floating Telemetry Sparks / Data Photons */}
                  <g style={{ animation: "particleFloatA 4s ease-in-out infinite" }}>
                    <polygon points="195,65 198,61 201,65 198,69" fill="#00F0D0" opacity="0.85" />
                    <circle cx="48" cy="165" r="2" fill="#00E5C9" opacity="0.75" />
                  </g>
                  <g style={{ animation: "particleFloatB 4.6s ease-in-out infinite" }}>
                    <polygon points="45,80 48,77 51,80 48,83" fill="#64748B" opacity="0.8" />
                    <circle cx="188" cy="170" r="2" fill="#00A892" opacity="0.85" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2x2 Grid (4 Quadrants) */}
        <FadeIn>
          <div className="border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm mb-10 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {phases.map((item, index) => {
                const isFirstCol = index % 2 === 0;
                const isTopRow = index < 2;

                return (
                  <div
                    key={item.id}
                    className={`p-6 sm:p-8 relative overflow-hidden group transition-colors hover:bg-slate-50/70 ${
                      isFirstCol ? "md:border-r border-slate-200" : ""
                    } ${isTopRow ? "border-b border-slate-200" : ""}`}
                  >
                    {/* Eyebrow / Phase Tag */}
                    <span className="text-[#00A892] text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
                      {item.phase}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#00A892] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm relative z-10 font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Bottom Closing Section */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
              Mais do que implementar sistemas, estruturamos a base tecnológica para sua liderança tomar decisões rápidas e com total controle.
            </p>

            {/* Slogan */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-6 font-heading">
              Contheo, <span className="text-[#00A892]">Inteligência que move sua operação.</span>
            </h3>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-[#00A892] via-[#00BFA6] to-[#00E5C9] hover:brightness-105 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-[#00BFA6]/20"
              >
                <span>Falar com um especialista</span>
                <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Dúvidas?</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
