import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    name: "Core Engineering",
    skills: ["Java", "SQL", "C++"],
    colorClass: "bg-neutral-300 shadow-neutral-300/50"
  },
  {
    name: "Backend Architecture",
    skills: ["Spring Boot", "Supabase", "Kafka", "Node.js", "Python"],
    colorClass: "bg-neutral-400 shadow-neutral-400/50"
  },
  {
    name: "Frontend Ecosystem",
    skills: ["ReactJS", "Tailwind CSS", "TypeScript"],
    colorClass: "bg-neutral-500 shadow-neutral-500/50"
  },
  {
    name: "DevOps & Cloud",
    skills: ["AWS (EC2/S3)", "Docker", "Git/GitHub", "PostgreSQL"],
    colorClass: "bg-neutral-200 shadow-neutral-200/50"
  }
];

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Technical Constellation
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              {/* Category Orb */}
              <div className="relative group cursor-pointer">
                <div className={`w-4 h-4 rounded-full ${category.colorClass} shadow-[0_0_20px] transition-all duration-500 group-hover:scale-150`}></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-sm font-bold tracking-widest uppercase text-neutral-400 whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity">
                  {category.name}
                </div>
              </div>

              {/* Connecting Line */}
              <div className="h-16 w-[2px] bg-gradient-to-b from-white/20 to-transparent"></div>

              {/* Skills List */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="
                      px-4 py-2 rounded-full 
                      bg-white/5 border border-white/5 
                      backdrop-blur-sm
                      text-neutral-300 font-mono text-sm border-white/20
                      hover:bg-white/10 hover:border-white/10 hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                      transition-all duration-300 transform hover:-translate-y-1
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};