import {
  Globe,
  Smartphone,
  Layout,
  Palette,
  Bot,
  Cloud,
  Code2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern frameworks and best practices.",
    icon: Globe,
    color: "#2563EB",
    features: [
      "Responsive Design",
      "Next.js & React",
      "Progressive Web Apps",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
    color: "#7C3AED",
    features: [
      "iOS & Android",
      "React Native",
      "Flutter Development",
      "App Store Deployment",
      "Push Notifications",
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    description:
      "Scalable software-as-a-service platforms with multi-tenant architecture and subscription management.",
    icon: Layout,
    color: "#059669",
    features: [
      "Multi-tenant Architecture",
      "Subscription Billing",
      "User Dashboards",
      "Analytics & Reporting",
      "Third-party Integrations",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user-centered design principles and modern aesthetics.",
    icon: Palette,
    color: "#D97706",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Design Systems",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by machine learning and artificial intelligence.",
    icon: Bot,
    color: "#DC2626",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Process Automation",
      "Predictive Analytics",
      "Chatbot Development",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Robust cloud infrastructure and DevOps solutions for scalable, reliable deployments.",
    icon: Cloud,
    color: "#0284C7",
    features: [
      "AWS/Azure/GCP",
      "Cloud Migration",
      "Containerization",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
  },
  {
    id: "api-development",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for performance, security, and developer experience.",
    icon: Code2,
    color: "#0891B2",
    features: [
      "REST & GraphQL",
      "API Security",
      "Documentation",
      "Rate Limiting",
      "Webhook Integration",
    ],
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Ongoing maintenance and support to keep your digital products secure and up-to-date.",
    icon: Wrench,
    color: "#6B7280",
    features: [
      "Security Updates",
      "Performance Monitoring",
      "Backup Solutions",
      "Content Updates",
      "24/7 Support",
    ],
  },
];
