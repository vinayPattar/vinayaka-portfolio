import React from 'react';
import { GlassCard } from './GlassCard';
import { FreelanceProject } from '../types';
import { CheckCircle2, Clock, Zap, Briefcase } from 'lucide-react';

const freelanceData: FreelanceProject[] = [
  {
    title: "Inventory Management Dashboard",
    client: "Retail Chain (Confidential)",
    duration: "2 Months",
    description: "Developed a custom Android-based inventory tracking system replacing their legacy paper-based workflow.",
    outcome: "Reduced stock discrepancy by 40% and cut daily audit time by 2 hours.",
    techStack: ["Android SDK", "Firebase Realtime DB", "Kotlin"],
    status: "Completed"
  },
  {
    title: "E-commerce API Integration",
    client: "Start-up Boutique",
    duration: "3 Weeks",
    description: "Integrated Shopify API with a custom Node.js middleware to sync orders with a third-party logistics provider.",
    outcome: "Automated order fulfillment for 500+ monthly orders.",
    techStack: ["Node.js", "Shopify API", "AWS Lambda"],
    status: "Completed"
  }
];

export const Freelance: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-16">
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
           <Briefcase size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Freelance Missions</h2>
          <p className="text-amber-200/60 text-sm font-mono mt-1">DELIVERING BUSINESS VALUE</p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/20 to-transparent ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {freelanceData.map((project, index) => (
          <GlassCard key={index} hoverEffect={true} className="border-l-4 border-l-amber-500/50 group">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 font-mono">Client: {project.client}</p>
              </div>
              <span className={`
                px-3 py-1 rounded-full text-xs font-bold border
                ${project.status === 'Completed' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}
              `}>
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Key Outcome Box */}
            <div className="bg-amber-500/5 rounded-lg p-4 border border-amber-500/10 mb-6">
              <div className="flex items-start space-x-3">
                <Zap size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wide mb-1">Impact</h4>
                  <p className="text-sm text-slate-200">{project.outcome}</p>
                </div>
              </div>
            </div>

            {/* Footer info */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-xs text-slate-500 font-mono">
                <Clock size={12} className="mr-1" />
                {project.duration}
              </div>
            </div>

          </GlassCard>
        ))}
      </div>
    </section>
  );
};