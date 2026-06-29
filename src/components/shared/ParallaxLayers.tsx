"use client";

import { useEffect, useRef } from "react";

export function ParallaxLayers() {
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!layersRef.current) return;
      const scrollY = window.scrollY;
      const children = layersRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const el = children[i] as HTMLElement;
        const speed = 0.03 + i * 0.02;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={layersRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/2 blur-3xl" />
    </div>
  );
}
