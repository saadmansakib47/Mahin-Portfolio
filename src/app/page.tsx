import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import EducationSection from "@/components/education/EducationSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ResearchSection from "@/components/research/ResearchSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import Footer from "@/components/footer/Footer";

import {
  heroData,
  skills,
  education,
  workExperience,
  researchProjects,
  achievements,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero">
          <HeroSection data={heroData} />
        </div>
        <SkillsSection skills={skills} />
        <EducationSection milestones={education} />
        <ExperienceSection experiences={workExperience} />
        <ResearchSection projects={researchProjects} />
        <AchievementsSection achievements={achievements} />
      </main>
      <Footer />
    </>
  );
}
