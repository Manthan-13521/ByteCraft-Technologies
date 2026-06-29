import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { TechStackSection } from "@/components/sections/home/TechStackSection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { FAQ } from "@/components/sections/home/FAQ";
import { ContactCTA } from "@/components/sections/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <TechStackSection />
      <WhyChooseUs />
      <PortfolioPreview />
      <TeamSection />
      <ProcessTimeline />
      <FAQ />
      <ContactCTA />
    </>
  );
}
