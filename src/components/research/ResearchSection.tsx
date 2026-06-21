"use client";

import { FlaskConical } from "lucide-react";
import type { ResearchProject } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

interface ResearchSectionProps {
  projects: ResearchProject[];
}

export default function ResearchSection({ projects }: ResearchSectionProps) {
  return (
    <section id="research" className="py-24 bg-navy-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Academic Work" title="Research Projects" />

        <div className="mt-12 grid md:grid-cols-2 gap-6 relative">
          {projects.map((project, i) => (
            <ResearchCard key={i} project={project} index={i + 1} />
          ))}

          {/* Divider between cards on desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-navy-700 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}

function ResearchCard({
  project,
  index,
}: {
  project: ResearchProject;
  index: number;
}) {
  return (
    <div className="group bg-navy-800 border border-navy-700 hover:border-teal-600 transition-all duration-300 rounded-2xl p-7 flex flex-col gap-4">
      {/* Top row */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
          <FlaskConical size={18} />
        </div>
        <span className="text-teal-500 text-xs font-mono font-semibold mt-2 tracking-wider">
          Study {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-white font-semibold text-base leading-relaxed"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {project.title}
      </h3>

      {/* Type badge */}
      <div className="mt-auto pt-2">
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-navy-700 border border-navy-600 text-navy-300">
          {project.type}
        </span>
      </div>
    </div>
  );
}
