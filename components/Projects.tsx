import React from 'react';
import { GlassCard } from './GlassCard';
import { Project } from '../types';
import { ShieldCheck, Share2, Map, ExternalLink, Github, Code2 } from 'lucide-react';

const projects: Project[] = [
  {
    title: "Secure Notes App",
    tag: "Security Focused",
    tech: ["Spring Boot", "OAuth2", "AWS", "PostgreSQL"],
    desc: "Enterprise-grade secure note storage. Features Multi-Factor Authentication (MFA) and granular audit logging to ensure data integrity and compliance.",
    icon: ShieldCheck,
    imageUrl: "/notes.png",
    githubLink: "https://github.com",
    liveLink: "#"
  },
  {
    title: "Expense Microservices",
    tag: "Distributed System",
    tech: ["React Native", "Spring Boot", "Kafka", "JWT"],
    desc: "High-throughput expense tracking system. Uses Kafka for asynchronous event streaming between Auth and Expense services, ensuring resilience.",
    icon: Share2,
    imageUrl: "https://images.unsplash.com/photo-1554224155-98406858d0cb?auto=format&fit=crop&q=80&w=1000",
    githubLink: "https://github.com",
    liveLink: "#"
  },
  {
    title: "Housing Locator",
    tag: "Social Impact",
    tech: ["ReactJS", "Node.js", "MongoDB", "Firebase"],
    desc: "Real-estate platform helping users discover affordable housing options based on location, property type, and budget.",
    icon: Map,
    imageUrl: "/homify.png",
    githubLink: "https://github.com",
    liveLink: "https://housing-app-three.vercel.app/"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-16 justify-end">
        <div className="h-[1px] flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
        <div className="flex items-center space-x-2">
          <Code2 className="text-glow_secondary" />
          <h2 className="text-3xl font-bold text-white text-right">Featured Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <GlassCard key={index} hoverEffect={true} noPadding={true} className="flex flex-col h-full group">
              {/* Image Section with Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-bg_void/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Floating Tag */}
                {/* <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-bg_void/80 backdrop-blur-md text-white border border-white/10 shadow-lg">
                  {project.tag}
                </div> */}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-glow_secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-text_secondary text-sm mb-6 flex-grow leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] font-mono text-slate-300 bg-white/5 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-gradient-to-r from-glow_primary to-indigo-600 text-white font-semibold text-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all active:scale-95"
                  >
                    <span>View Live</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                  >
                    <span>Source Code</span>
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};