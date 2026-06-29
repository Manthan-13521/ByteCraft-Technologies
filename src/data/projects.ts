export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "mobile" | "saas" | "ai";
  image: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for enterprise data visualization with interactive charts and AI-powered insights.",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket"],
    link: "#",
  },
  {
    id: "fitness-tracker",
    title: "FitFlow App",
    description:
      "Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["React Native", "Firebase", "HealthKit"],
    link: "#",
  },
  {
    id: "shopwave",
    title: "ShopWave",
    description:
      "A complete e-commerce SaaS platform with inventory management, payment processing, and order fulfillment.",
    category: "saas",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    id: "sentiment-ai",
    title: "SentimentAI",
    description:
      "AI-powered sentiment analysis tool that processes customer feedback and provides actionable insights.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
    link: "#",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "Collaborative project management platform with kanban boards, Gantt charts, and team communication.",
    category: "saas",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    id: "medconnect",
    title: "MedConnect",
    description:
      "Telemedicine platform connecting patients with healthcare providers through video consultations.",
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    technologies: ["React", "Twilio", "AWS", "Docker"],
    link: "#",
  },
  {
    id: "artvista",
    title: "ArtVista",
    description:
      "An AR-powered mobile app that lets users visualize artwork in their space before purchasing.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    technologies: ["Swift", "ARKit", "CoreML", "Firebase"],
    link: "#",
  },
  {
    id: "cognibot",
    title: "CogniBot",
    description:
      "Intelligent customer service chatbot with natural language understanding and multi-language support.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1531746790095-e5cb1572e298?w=800&q=80",
    technologies: ["Python", "GPT-4", "LangChain", "Redis"],
    link: "#",
  },
];
