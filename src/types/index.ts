export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  paperUrl?: string;
  codeUrl?: string;
  tags: string[];
  status?: "in-progress" | "complete";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  label: string;
  iconKey: string;
  category: "language" | "framework" | "tool" | "other";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
  logo?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconKey: string;
}
