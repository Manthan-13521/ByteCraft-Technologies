import { Lightbulb, Search, Code2, TestTube, Rocket, HeartHandshake, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and vision to align our strategy with your needs.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Our designers craft beautiful, intuitive interfaces that delight users and reflect your brand identity.",
    icon: Lightbulb,
  },
  {
    title: "Develop",
    description: "We build robust, scalable solutions using cutting-edge technologies and best engineering practices.",
    icon: Code2,
  },
  {
    title: "Test",
    description: "Rigorous quality assurance ensures your product is bug-free, secure, and performs optimally.",
    icon: TestTube,
  },
  {
    title: "Deploy",
    description: "We handle deployment with CI/CD pipelines, ensuring smooth rollouts with zero downtime.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Post-launch support and maintenance keep your product running smoothly as your business grows.",
    icon: HeartHandshake,
  },
];
