"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { techStack } from "@/data/techstack";

const categories = [...new Set(techStack.map((t) => t.category))];

export function TechStackSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Technology"
            title="Our Tech Stack"
            description="Modern tools and technologies we use to build cutting-edge digital products."
          />
        </AnimatedSection>

        <div className="space-y-8 mt-12">
          {categories.map((category, ci) => (
            <AnimatedSection key={category} delay={ci * 0.1}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack
                    .filter((t) => t.category === category)
                    .map((tech, ti) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.03 }}
                        whileHover={{ y: -2 }}
                        className="px-4 py-2 rounded-xl glass-card text-sm font-medium border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 relative overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="shrink-0 px-6 py-3 rounded-xl bg-muted/50 text-muted-foreground text-sm font-medium border border-border/50"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
