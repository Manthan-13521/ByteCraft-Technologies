"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Code2, Palette, Zap, Shield, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies to build fast, scalable, and maintainable products.",
    color: "#2563EB",
    rgb: "37, 99, 235",
  },
  {
    icon: Palette,
    title: "Pixel-Perfect Design",
    description: "Our designs are crafted with obsessive attention to detail and user experience.",
    color: "#7C3AED",
    rgb: "124, 58, 237",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology ensures we deliver high-quality products on time and within budget.",
    color: "#059669",
    rgb: "5, 150, 105",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "We implement robust security practices to protect your data and your users.",
    color: "#DC2626",
    rgb: "220, 38, 38",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "You get a committed team that understands your vision and works as your partner.",
    color: "#D97706",
    rgb: "217, 119, 6",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Every solution we build is designed to drive measurable business growth.",
    color: "#0891B2",
    rgb: "8, 145, 178",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Why Us"
            title="Why Choose ByteCraft?"
            description="We combine technical excellence with business acumen to deliver exceptional results."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.05}>
              <TiltCard>
                <SpotlightCard color={reason.rgb}>
                  <div className="glass-card rounded-2xl p-6 sm:p-8 group hover:border-primary/30 transition-all duration-300 h-full gradient-border">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
                      style={{ backgroundColor: `${reason.color}15` }}
                    >
                      <reason.icon className="h-6 w-6" style={{ color: reason.color }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
