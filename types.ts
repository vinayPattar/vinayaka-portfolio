import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  tag: string;
  tech: string[];
  desc: string;
  icon: LucideIcon;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlight: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  colorClass: string;
}

export interface FreelanceProject {
  title: string;
  client: string;
  duration: string;
  description: string;
  outcome: string; // The business value delivered
  techStack: string[];
  status: "Completed" | "Ongoing";
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  link: string;
}