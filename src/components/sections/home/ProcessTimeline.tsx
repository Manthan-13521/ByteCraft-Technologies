"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="How We Work"
            title="Our Process"
            description="A proven methodology that ensures successful delivery of every project."
          />
        </AnimatedSection>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="hidden md:flex absolute left-4 top-1 -translate-x-1/2 h-9 w-9 rounded-full bg-background border-2 border-primary items-center justify-center">
                  <step.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2 md:hidden">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary">Step {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 hidden md:block">{step.title}</h3>
                  <h3 className="text-lg font-semibold mb-1 md:hidden">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
