"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  icon: string;
}

const icons = ["</>", "{ }", "()", "=>", "/*", "npm", "git", "API"];

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 28 + Math.random() * 20,
      rotation: Math.random() * 360,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      icon: icons[i % icons.length],
    }));
    setShapes(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 20, -10, 10, 0],
            rotate: [0, shape.rotation],
            opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          <span
            className="font-mono text-xs font-bold text-primary/20 dark:text-primary/10"
            style={{ fontSize: shape.size }}
          >
            {shape.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
