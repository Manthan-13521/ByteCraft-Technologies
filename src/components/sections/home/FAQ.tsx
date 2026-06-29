"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion className="w-full space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-border data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-sm sm:text-base py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
