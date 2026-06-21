"use client";

import { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import type { WorkExperience } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 bg-navy-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="Professional" title="Work Experience" />

        <div className="mt-12 flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  defaultOpen,
}: {
  experience: WorkExperience;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-navy-800 border border-navy-700 hover:border-navy-500 transition-all duration-300 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
          <Briefcase size={18} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-base leading-tight">
            {experience.role}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-teal-400 text-sm">{experience.organization}</span>
            <span className="w-1 h-1 rounded-full bg-navy-500" />
            <span className="text-navy-400 text-sm">{experience.period}</span>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`text-navy-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 pt-0 border-t border-navy-700">
          <ul className="mt-4 flex flex-col gap-3">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 mt-2" />
                <span className="text-navy-200 text-sm leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
