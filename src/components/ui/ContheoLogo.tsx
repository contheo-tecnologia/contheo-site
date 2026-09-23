"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContheoLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  size?: "default" | "large" | "small";
  showSymbolOnly?: boolean;
}

export function ContheoLogo({
  className,
  variant = "light",
  size = "default",
  showSymbolOnly = false,
  ...props
}: ContheoLogoProps) {
  // Tamanhos da logo ajustados para ficarem bem maiores e imponentes
  // default: h-11 md:h-12 (44px/48px), large: h-14 md:h-16, small: h-9
  const heightClass =
    size === "large"
      ? "h-14 md:h-16"
      : size === "small"
      ? "h-8 md:h-9"
      : "h-11 md:h-12";

  if (showSymbolOnly) {
    const symbolSize = size === "large" ? 64 : size === "small" ? 36 : 48;
    return (
      <div
        className={cn(
          "relative flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105",
          className
        )}
        style={{ width: symbolSize, height: symbolSize }}
        {...props}
      >
        <Image
          src="/logo-symbol.png"
          alt="Contheo Símbolo"
          width={128}
          height={128}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center shrink-0 select-none cursor-pointer transition-opacity duration-200 hover:opacity-95",
        heightClass,
        className
      )}
      {...props}
    >
      <Image
        src="/logo-contheo-negative.png"
        alt="Contheo Tecnologia"
        width={300}
        height={85}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
