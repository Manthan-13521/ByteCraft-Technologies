"use client";

import { useEffect, useRef } from "react";

export function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(37, 99, 235, 0.06), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 hidden lg:block"
    />
  );
}
