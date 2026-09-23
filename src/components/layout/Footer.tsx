import React from "react";
import { ContheoLogo } from "@/components/ui/ContheoLogo";

const solutions = [
  "Automação de Processos",
  "Aprimoramento Operacional",
  "Sistemas de Gestão (EIP/CRM)",
  "Sites e Plataformas Web",
  "Mídia e Marketing Digital",
];

const company = [
  { label: "Sobre a Contheo", href: "#sobre"      },
  { label: "Cases de Sucesso", href: "#cases"       },
  { label: "Contato",          href: "#contato"     },
];

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-slate-900">
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand Col */}
          <div className="md:col-span-1">
            <ContheoLogo size="default" className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
              Tecnologia que transforma negócios. Ajudamos empresas a escalar com automação inteligente, processos otimizados e sistemas dedicados.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/5516988617310",
                  icon: <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-contheo-bright bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-contheo-bright mb-6">Soluções</h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s}>
                  <a
                    href="#solucoes"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-contheo-bright/40 group-hover:bg-contheo-bright transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-contheo-bright mb-6">Empresa</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-contheo-bright/40 group-hover:bg-contheo-bright transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Atendimento */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-contheo-bright mb-6">Contato</h4>
            <ul className="space-y-3.5 mb-7">
              <li className="flex items-center gap-2.5">
                <span className="text-xs text-contheo-bright">✉</span>
                <a href="mailto:contheo@contheo.com.br" className="text-sm text-slate-300 hover:text-white transition-colors">
                  contheo@contheo.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs text-contheo-bright">📱</span>
                <a href="https://wa.me/5516988617310" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Celular: (16) 9886-17310
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs text-contheo-bright">🌐</span>
                <span className="text-sm text-slate-300">
                  Atendimento 100% Virtual / Remoto
                </span>
              </li>
            </ul>

            <a
              href="https://wa.me/5516988617310?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00A892] via-[#00BFA6] to-[#00E5C9] hover:brightness-105 transition-all hover:scale-[1.03]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 pt-8 border-t border-slate-800">
          <p>© 2026 Contheo Consultoria em Tecnologia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-contheo-bright transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-contheo-bright transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
