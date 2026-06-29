"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = children.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Tag className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
