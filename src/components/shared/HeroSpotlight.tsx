"use client";

import { useEffect, useRef, useCallback } from "react";

export function HeroSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    if (mx === 0 && my === 0) return;

    const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 300);
    gradient.addColorStop(0, "rgba(56, 189, 248, 0.08)");
    gradient.addColorStop(0.5, "rgba(37, 99, 235, 0.03)");
    gradient.addColorStop(1, "rgba(37, 99, 235, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    const gradient2 = ctx.createRadialGradient(mx - 20, my - 20, 0, mx - 20, my - 20, 150);
    gradient2.addColorStop(0, "rgba(255, 255, 255, 0.03)");
    gradient2.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, w, h);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);

    const animate = () => {
      draw();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
}
