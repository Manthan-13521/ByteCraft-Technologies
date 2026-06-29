"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="Services We Offer"
            description="End-to-end digital solutions tailored to your business needs."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featured.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05}>
              <Link
                href="/services"
                className="group block glass-card rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-6 w-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors font-medium text-sm"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
