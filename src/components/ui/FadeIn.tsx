import React from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Renderização instantânea sem delays de rolagem para navegação super ágil
export function FadeIn({ children, className }: FadeInProps) {
  return (
    <div className={cn("w-full opacity-100", className)}>
      {children}
    </div>
  );
}
