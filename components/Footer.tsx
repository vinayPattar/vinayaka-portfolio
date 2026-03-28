import React from 'react';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-bg_void/80 backdrop-blur-xl pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-tr from-glow_primary to-glow_secondary rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Vinayaka.</span>
            </div>
            <p className="text-text_secondary max-w-md leading-relaxed">
              Full Stack Engineer focused on building scalable, secure, and performant web applications. 
              Turning complex problems into elegant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-slate-400 hover:text-glow_secondary transition-colors">Home</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-glow_secondary transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-glow_secondary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-glow_secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vinayaka. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0 flex items-center">
            Designed with <span className="text-red-500 mx-1">♥</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};