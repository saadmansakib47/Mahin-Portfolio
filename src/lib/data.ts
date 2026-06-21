import type {
  HeroData,
  Skill,
  EducationMilestone,
  WorkExperience,
  ResearchProject,
  Achievement,
} from "@/types/portfolio";

export const heroData: HeroData = {
  name: "Mahin Ibn Mahmud",
  title: "Public Health Professional",
  quote:
    '"The health of the people is really the foundation upon which all their happiness and all their powers as a state depend."',
  about:
    "Dedicated public health graduate (CGPA 3.89) at Daffodil International University, with hands-on experience in community health advisory, research, and event leadership. Passionate about evidence-based health initiatives and effective cross-community communication.",
  contact: {
    phone: "+880 15816 33525",
    email: "mahinmahmud64@gmail.com",
    linkedin: "linkedin.com/in/mahin-ibn-mahmud",
    address: "Mirpur-10, Dhaka",
  },
  photoPath: "/assets/mahin.png",
};

export const skills: Skill[] = [
  { name: "MS Word", category: "Software" },
  { name: "MS Excel", category: "Software" },
  { name: "SPSS", category: "Software" },
  { name: "Critical Thinking", category: "Soft Skills" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Leadership", category: "Soft Skills" },
  { name: "Teamwork", category: "Soft Skills" },
];

export const education: EducationMilestone[] = [
  {
    degree: "B.Sc. in Public Health",
    institution: "Daffodil International University",
    period: "Jul 2023 – Present",
    gpa: "3.89 / 4.00",
    side: "right",
  },
  {
    degree: "HSC — Science",
    institution: "Dhaka Residential Model College",
    period: "2021",
    gpa: "5.00 / 5.00",
    side: "left",
  },
  {
    degree: "SSC — Science",
    institution: "Dhaka Residential Model College",
    period: "2019",
    gpa: "5.00 / 5.00",
    side: "right",
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Health Advisor",
    organization: "Hope for Health Organization",
    period: "Ongoing",
    bullets: [
      "Guide 50+ students on health awareness and lifestyle practices.",
      "Support community outreach strategy and programme planning.",
    ],
  },
  {
    role: "Active Member — Public Health Club",
    organization: "Daffodil International University",
    period: "Ongoing",
    bullets: [
      "Organise community awareness events and health campaigns.",
      "Led event decoration for the DIU Public Health Fest.",
    ],
  },
];

export const researchProjects: ResearchProject[] = [
  {
    title:
      "Lifestyle Choices, Reproductive Health Knowledge, PCOS & Self-Breast Examination among Undergraduates in Bangladesh",
    type: "Mixed Method Investigation",
  },
  {
    title:
      "Personal Hygiene Knowledge & Practices among School-Going Children in Bangladesh",
    type: "Cross-Sectional Study",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Dean's Award",
    detail: "Daffodil International University",
    year: "Fall 2023",
    type: "award",
  },
  {
    title: "Public Health Champions Award",
    detail: "Daffodil International University",
    year: "Fall 2024",
    type: "award",
  },
  {
    title: "1st Runners-Up",
    detail: "World Diabetes Day Quiz",
    year: "2025",
    type: "award",
  },
  {
    title: "Volunteer",
    detail: "DRMC IT Fest",
    year: "2021",
    type: "volunteer",
  },
  {
    title: "Volunteer",
    detail: "Public Health Champions Award Day",
    year: "2024",
    type: "volunteer",
  },
];
