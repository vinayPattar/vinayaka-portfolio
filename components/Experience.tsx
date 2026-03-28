import React from 'react';
import { GlassCard } from './GlassCard';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceData {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
  techStack: string[];
}

const experienceData: ExperienceData[] = [
  {
    role: "Full Stack Developer Intern",
    company: "PSYC Aerospace and Defence Pvt Ltd.",
    location: "Bengaluru",
    dates: "Aug 2025 – Present",
    highlights: [
      "Developed and deployed multiple full-stack web applications using React (TypeScript), Node.js, and Python, contributing across frontend, backend, and integration layers.",
      "Implemented secure authentication mechanisms, RESTful APIs, and database operations using Supabase, PostgreSQL, and MongoDB.",
      "Designed and delivered internal tools to streamline workflows and automate operational processes, improving overall efficiency.",
      "Managed end-to-end development and deployment on AWS, focusing on performance optimization, reliability, and production stability."
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "Supabase", "MongoDB", "AWS"]
  },
  {
    role: "Android Developer Intern",
    company: "NanoPix ISS (P) Ltd.",
    location: "Hubballi",
    dates: "June 2024 – Oct 2024",
    highlights: [
      "Contributed to the development of a multilingual Android application by integrating Google APIs to support over 10 languages.",
      "Implemented dynamic, application-wide language switching, significantly improving accessibility and user experience for non-English users.",
      "Developed a Java Swing–based desktop automation tool to analyze Android source code and inject localization methods programmatically.",
      "Automated localization workflows, reducing manual coding effort by approximately 50% and improving development efficiency."
    ],
    techStack: ["Java Swing", "Android API", "Automation", "Google APIs"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Experience Log</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent opacity-30"></div>

        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-24 pb-12 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-[27px] top-6 h-3 w-3 rounded-full bg-white shadow-[0_0_10px_#ffffff]"></div>

            <GlassCard className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors">{exp.role}</h3>
                  <div className="flex items-center text-lg text-neutral-300 mt-1">
                    <Briefcase size={16} className="mr-2 opacity-70" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-neutral-400 font-mono space-y-1">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {exp.dates}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <ul className="space-y-3">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300 leading-relaxed text-sm md:text-base">
                      <ChevronRight size={18} className="text-neutral-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.techStack.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-300 font-mono border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};