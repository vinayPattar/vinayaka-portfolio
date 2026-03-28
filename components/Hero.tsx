import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';

const badges = ["Spring Boot", "ReactJS", "AWS", "Supabase"];

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-32 pb-20 px-4 overflow-hidden">

      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto text-center z-10">

        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral-300"></span>
          </span>
          <span className="text-neutral-300 text-xs font-mono tracking-wider font-semibold">OPEN TO WORK</span>
        </div>

        {/* Main Typography */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Vinayaka.
        </h1>

        <p className="text-xl md:text-3xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Architecting <span className="text-white font-normal">secure backends</span> and crafting <span className="text-neutral-300 font-normal">immersive frontends</span> for the next generation of web.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              View My Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Let's Connect
          </a>
        </div>

        {/* Floating Code/Tech Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {badges.map((badge, index) => (
            <div
              key={badge}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-neutral-400 backdrop-blur-sm hover:text-white hover:border-white/50 transition-colors cursor-default"
            >
              <Terminal size={14} />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* Social Actions */}
        <div className="flex space-x-6 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <a href="https://github.com/vinayPattar" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-white/50 transition-all text-neutral-300 hover:text-white group">
            <Github size={24} className="transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/vinayaka-pattar/" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-white/50 transition-all text-neutral-300 hover:text-white group">
            <Linkedin size={24} className="transition-colors" />
          </a>
          <a href="mailto:vinaypattar383@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-white/50 transition-all text-neutral-300 hover:text-white group">
            <Mail size={24} className="transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#experience" className="absolute bottom-10 animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors">
        <ArrowDown className="text-neutral-500" size={24} />
      </a>
    </section>
  );
};