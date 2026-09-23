"use client";

import React, { useState } from "react";
import { ContheoLogo } from "@/components/ui/ContheoLogo";
import { cn } from "@/lib/utils";

const WA = "https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito.";

const navLinks = [
  { label: "Início",      href: "#"            , active: true },
  { label: "Soluções",    href: "#solucoes"    },
  { label: "Cases",       href: "#cases"       },
  { label: "Contato",     href: "#contato"     },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl bg-black border border-white/15 rounded-full px-5 sm:px-7 py-2.5 flex items-center justify-between shadow-2xl shadow-black transition-all">

        {/* Logo oficial negativa Contheo */}
        <a href="#" aria-label="Contheo Home" className="flex items-center py-0.5">
          <ContheoLogo size="default" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                l.active
                  ? "text-[#00E5C9] font-semibold border-b-2 border-[#00E5C9] pb-0.5"
                  : "text-slate-200 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00BFA6] via-[#00E5C9] to-[#00F0D0] hover:brightness-105 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-[#00E5C9]/25"
        >
          <span>Falar com especialista</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full text-slate-200 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-md mx-auto rounded-3xl bg-black border border-white/15 p-5 shadow-2xl shadow-black">
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-xl text-sm font-bold text-center text-slate-950 bg-gradient-to-r from-[#00BFA6] via-[#00E5C9] to-[#00F0D0]"
            >
              Falar com especialista →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
