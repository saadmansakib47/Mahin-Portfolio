export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  address: string;
}

export interface HeroData {
  name: string;
  title: string;
  quote: string;
  about: string;
  contact: ContactInfo;
  photoPath: string;
}

export interface Skill {
  name: string;
  category: "Software" | "Soft Skills";
}

export interface EducationMilestone {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  side: "left" | "right";
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface ResearchProject {
  title: string;
  type: string;
}

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  type: "award" | "volunteer";
}
