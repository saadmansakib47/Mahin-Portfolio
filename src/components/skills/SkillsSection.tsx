"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Skill } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

interface SkillsSectionProps {
  skills: Skill[];
}

const SKILL_ICONS: Record<string, string> = {
  "MS Word": "📝",
  "MS Excel": "📊",
  SPSS: "📈",
  "Critical Thinking": "🧠",
  Communication: "🗣️",
  Leadership: "🎯",
  Teamwork: "🤝",
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(skills.length - 1, index));
    setActiveIndex(clamped);
  };

  const softSkills = skills.filter((s) => s.category === "Soft Skills");
  const software = skills.filter((s) => s.category === "Software");

  return (
    <section id="skills" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Expertise" title="Skills & Tools" />

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Track */}
          <div className="overflow-hidden" ref={trackRef}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${activeIndex * (200 + 24)}px + 50% - 100px))`,
              }}
            >
              {skills.map((skill, i) => (
                <SkillBubble
                  key={skill.name}
                  skill={skill}
                  isActive={i === activeIndex}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-navy-800 border border-navy-600 flex items-center justify-center text-navy-300 hover:text-teal-400 hover:border-teal-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === skills.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-navy-800 border border-navy-600 flex items-center justify-center text-navy-300 hover:text-teal-400 hover:border-teal-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Active skill name display */}
        <div className="text-center mt-6">
          <p className="text-teal-400 font-medium text-lg">
            {skills[activeIndex]?.name}
          </p>
          <p className="text-navy-400 text-sm mt-1">
            {skills[activeIndex]?.category}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {skills.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-teal-500"
                  : "w-2 h-2 bg-navy-600 hover:bg-navy-400"
              }`}
            />
          ))}
        </div>

        {/* Categories summary */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <SkillCategory title="Software" items={software} />
          <SkillCategory title="Soft Skills" items={softSkills} />
        </div>
      </div>
    </section>
  );
}

function SkillBubble({
  skill,
  isActive,
  onClick,
}: {
  skill: Skill;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 flex flex-col items-center justify-center rounded-full border-2 transition-all duration-500 cursor-pointer"
      style={{
        width: isActive ? "200px" : "120px",
        height: isActive ? "200px" : "120px",
        borderColor: isActive ? "#14b8a6" : "#163962",
        background: isActive
          ? "linear-gradient(135deg, #163962, #0e264b)"
          : "rgba(14,38,75,0.5)",
        boxShadow: isActive
          ? "0 0 40px rgba(20,184,166,0.2), inset 0 0 20px rgba(20,184,166,0.05)"
          : "none",
      }}
    >
      <span
        style={{ fontSize: isActive ? "48px" : "28px", lineHeight: 1 }}
        className="transition-all duration-500"
      >
        {SKILL_ICONS[skill.name] ?? "⚙️"}
      </span>
      {isActive && (
        <span className="text-teal-300 text-xs mt-3 font-medium tracking-wide">
          {skill.name}
        </span>
      )}
    </button>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: Skill[];
}) {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
      <h3 className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 bg-navy-700 border border-navy-600 rounded-lg text-navy-200 text-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
