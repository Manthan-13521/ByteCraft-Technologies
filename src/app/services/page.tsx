"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TiltCard } from "@/components/shared/TiltCard";
import { services, type Service } from "@/data/services";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <TiltCard>
        <div
          style={{
            background: `linear-gradient(135deg, ${service.color}08, ${service.color}02)`,
            borderColor: `${service.color}20`,
          }}
          className="relative overflow-hidden rounded-2xl border p-6 sm:p-8 h-full hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px at 50% 0%, ${service.color}10, transparent)`,
            }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <Icon className="h-7 w-7" style={{ color: service.color }} />
            </div>

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="space-y-2.5">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-sm">
                  <div
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: service.color }}
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: service.color }}
              >
                Learn More
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden bg-grid dark:bg-grid-dark">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Everything You Need to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                Succeed Online
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From concept to launch, we provide end-to-end digital services that transform ideas into impactful digital products.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
