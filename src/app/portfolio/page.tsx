"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TiltCard } from "@/components/shared/TiltCard";
import { MagneticButton } from "@/components/shared/MagneticButton";

const categories = ["all", "web", "mobile", "saas", "ai"] as const;
type Category = (typeof categories)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <TiltCard>
        <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <MagneticButton
                as="a"
                href={project.link}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-foreground text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Visit Project
              </MagneticButton>
            </div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white capitalize">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden bg-grid dark:bg-grid-dark">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                Work
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              A showcase of our best projects across different domains and technologies.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
