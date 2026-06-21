"use client";

import { Trophy, Heart } from "lucide-react";
import type { Achievement } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  const awards = achievements.filter((a) => a.type === "award");
  const volunteer = achievements.filter((a) => a.type === "volunteer");

  return (
    <section id="achievements" className="py-24 bg-navy-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Achievements & Volunteering" />

        <div className="mt-12 space-y-10">
          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-navy-400">
                Awards
              </span>
              <div className="flex-1 h-px bg-navy-700" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {awards.map((a, i) => (
                <AwardCard key={i} achievement={a} />
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart size={16} className="text-rose-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-navy-400">
                Volunteering
              </span>
              <div className="flex-1 h-px bg-navy-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {volunteer.map((a, i) => (
                <VolunteerCard key={i} achievement={a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="group relative bg-navy-800 border border-navy-700 hover:border-yellow-500/50 rounded-2xl p-5 transition-all duration-300 overflow-hidden">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10">
        <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4">
          <Trophy size={14} className="text-yellow-400" />
        </div>
        <h3 className="text-white font-semibold text-sm leading-tight mb-1">
          {achievement.title}
        </h3>
        <p className="text-navy-400 text-xs mb-3">{achievement.detail}</p>
        <span className="text-xs font-mono text-teal-500 bg-teal-500/10 px-2 py-0.5 rounded-md">
          {achievement.year}
        </span>
      </div>
    </div>
  );
}

function VolunteerCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="group flex items-center gap-4 bg-navy-800 border border-navy-700 hover:border-rose-500/40 rounded-2xl p-5 transition-all duration-300">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
        <Heart size={14} className="text-rose-400" />
      </div>
      <div>
        <p className="text-navy-300 text-sm font-medium">{achievement.detail}</p>
        <p className="text-navy-500 text-xs mt-0.5">{achievement.year}</p>
      </div>
    </div>
  );
}
