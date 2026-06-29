"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientText } from "@/components/shared/GradientText";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-accent p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <GradientText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white [&]:bg-none [&]:text-white">
                Let&apos;s Build Something Great Together
              </GradientText>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Ready to turn your idea into reality? Get in touch with us and let&apos;s create something amazing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-foreground font-medium text-base hover:bg-white/90 transition-all hover:shadow-xl"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
