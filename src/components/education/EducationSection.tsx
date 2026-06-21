"use client";

import type { EducationMilestone } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

interface EducationSectionProps {
  milestones: EducationMilestone[];
}

export default function EducationSection({
  milestones,
}: EducationSectionProps) {
  return (
    <section id="education" className="py-24 bg-navy-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Academic Path" title="Education" />

        <div className="relative mt-16">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-teal-500 via-navy-600 to-transparent" />

          <div className="flex flex-col gap-0">
            {milestones.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: EducationMilestone;
  index: number;
}) {
  const isRight = item.side === "right";

  return (
    <div className="relative flex items-center min-h-[140px]">
      {/* Left side */}
      <div className={`w-1/2 pr-10 ${isRight ? "opacity-0" : ""}`}>
        {!isRight && <MilestoneCard item={item} align="right" />}
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-navy-950 shadow-lg shadow-teal-500/30" />
        {/* Year badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs text-navy-400 font-mono">{item.period}</span>
        </div>
      </div>

      {/* Right side */}
      <div className={`w-1/2 pl-10 ${!isRight ? "opacity-0" : ""}`}>
        {isRight && <MilestoneCard item={item} align="left" />}
      </div>
    </div>
  );
}

function MilestoneCard({
  item,
  align,
}: {
  item: EducationMilestone;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group bg-navy-800 border border-navy-700 hover:border-teal-600 transition-all duration-300 rounded-xl p-5 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <h3
        className="font-semibold text-white text-base leading-tight mb-1"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {item.degree}
      </h3>
      <p className="text-teal-400 text-sm mb-2">{item.institution}</p>
      <div
        className={`flex items-center gap-2 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="text-xs text-navy-400">GPA</span>
        <span className="text-xs font-mono font-semibold text-white bg-navy-700 px-2 py-0.5 rounded">
          {item.gpa}
        </span>
      </div>
    </div>
  );
}
