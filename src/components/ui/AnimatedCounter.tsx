"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    let observer: IntersectionObserver;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(startAnimation);
      } else {
        setCount(target);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(startAnimation);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [target, duration]);

  return (
    <span ref={domRef} className={cn("inline-block", className)}>
      {prefix}{count}{suffix}
    </span>
  );
}
