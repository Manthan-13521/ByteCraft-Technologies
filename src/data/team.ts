export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Manthan Jaiswal",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer passionate about building scalable digital products with modern technologies.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    bio: "Designs intuitive and beautiful interfaces that delight users and drive engagement.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Arun Kumar",
    role: "Backend Engineer",
    bio: "Specializes in building robust, scalable APIs and cloud infrastructure.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Sneha Patel",
    role: "AI/ML Engineer",
    bio: "Develops intelligent automation solutions powered by machine learning and NLP.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];
