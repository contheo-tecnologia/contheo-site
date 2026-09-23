import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const clientLogos = [
  {
    name: "Impetro — Indústria e Comércio de Lubrificantes",
    src: "/clients/impetro.png",
    width: 140,
    height: 34,
    className: "h-7 sm:h-8 w-auto object-contain",
  },
  {
    name: "Invertronic — Soluções Industriais",
    src: "/clients/invertronic.png",
    width: 110,
    height: 38,
    className: "h-7 sm:h-8 w-auto object-contain",
  },
  {
    name: "Tech Motors",
    src: "/clients/tech_motors.png",
    width: 50,
    height: 52,
    className: "h-10 sm:h-11 w-auto object-contain",
  },
  {
    name: "HE Só Cabeçotes",
    src: "/clients/so_cabecotes.png",
    width: 75,
    height: 50,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
];

const repeatedLogos = [
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
];

export function SocialProof() {
  return (
    <section className="bg-white py-6 sm:py-7 relative overflow-hidden border-y border-slate-200 shadow-sm">
      <div className="container-custom relative z-10">

        <FadeIn>
          <div className="flex flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Label */}
            <div className="text-slate-800 font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap shrink-0 border-r border-slate-200 pr-6 sm:pr-8">
              Empresas parceiras
            </div>

            {/* Marquee de logos em uma única linha */}
            <div className="relative overflow-hidden w-full flex-1">
              {/* Fades laterais */}
              <div
                className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #FFFFFF, transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #FFFFFF, transparent)" }}
              />

              <div className="animate-marquee whitespace-nowrap items-center gap-14 sm:gap-20">
                {repeatedLogos.map((client, i) => (
                  <div
                    key={i}
                    className="opacity-75 hover:opacity-100 transition-all duration-200 transform hover:scale-105 cursor-pointer select-none shrink-0 flex items-center justify-center px-4"
                    title={client.name}
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className={client.className}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
