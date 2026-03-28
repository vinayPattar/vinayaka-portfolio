import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Freelance', href: '#freelance' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bg_void/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-to-tr from-glow_primary to-glow_secondary rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-glow_secondary transition-colors">
            Vinayaka.
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow_secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 ml-2"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg_void/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
              href="#contact"
              className="text-lg font-medium text-glow_primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </a>
        </div>
      )}
    </nav>
  );
};