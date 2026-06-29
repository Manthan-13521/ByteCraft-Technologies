"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Team"
            title="Meet Our Team"
            description="Talented individuals passionate about creating exceptional digital experiences."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="relative mx-auto h-20 w-20 rounded-full overflow-hidden mb-4 ring-2 ring-border group-hover:ring-primary/50 transition-all">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="font-semibold text-base">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5 mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
