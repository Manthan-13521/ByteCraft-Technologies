export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc.",
    content:
      "ByteCraft transformed our digital presence completely. Their team delivered a platform that exceeded our expectations and drove a 300% increase in user engagement.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "CTO",
    company: "DataPulse",
    content:
      "Working with ByteCraft was a game-changer. Their AI solutions streamlined our operations and saved us over 40% in operational costs within the first quarter.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Lead",
    company: "ScaleUp Labs",
    content:
      "The attention to detail and user-centric approach ByteCraft brings is remarkable. Our SaaS platform built by them has a 98% customer satisfaction rate.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];
