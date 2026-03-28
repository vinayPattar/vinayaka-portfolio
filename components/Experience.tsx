import React from 'react';
import { GlassCard } from './GlassCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: "Android Developer Intern",
    company: "NanoPix ISS (P) Ltd.",
    location: "Hubballi",
    dates: "June 2024 – Oct 2024",
    highlight: "Contributed to the development of a multilingual Android application by integrating Google APIs to support over 10 languages.Implemented dynamic, application- wide language switching, significantly improving accessibility and user experience for non - English users.Developed a Java Swing–based desktop automation tool to analyze Android source code and inject localization methods programmatically.Automated localization workflows, reducing manual coding effort by approximately 50 % and improving development efficiency."
  },
  {
    role: "Full Stack Developer Intern",
    company: "PSYC Aerospace and Defence Pvt Ltd.",
    location: "Bengaluru",
    dates: "Aug 2025 – Present",
    highlight: "Developed and deployed multiple full-stack web applications using React (TypeScript), Node.js, and Python, contributing across frontend, backend, and integration layers.Implemented secure authentication mechanisms, RESTful APIs, and database operations using Supabase, PostgreSQL, and MongoDB. Designed and delivered internal tools to streamline workflows and automate operational processes, improving overall efficiency.Managed end-to-end development and deployment on AWS, focusing on performance optimization, reliability, and production stability."
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
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-glow_primary to-transparent opacity-30"></div>

        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-24 pb-12 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-[27px] top-6 h-3 w-3 rounded-full bg-glow_primary shadow-[0_0_10px_#6366f1]"></div>

            <GlassCard className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-glow_primary transition-colors">{exp.role}</h3>
                  <div className="flex items-center text-lg text-slate-300 mt-1">
                    <Briefcase size={16} className="mr-2 opacity-70" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-text_secondary font-mono space-y-1">
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

              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-slate-300 leading-relaxed">
                  Key Achievement: <span className="text-white font-semibold">{exp.highlight}</span>
                </p>
                <div className="mt-4 flex gap-2">
                  {['Java Swing', 'Android API', 'Automation'].map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 font-mono border border-white/5">
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