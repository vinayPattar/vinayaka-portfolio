import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false, noPadding = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl 
        border border-glass_border 
        rounded-2xl 
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        transition-all duration-500 ease-out
        ${!noPadding ? 'p-6 md:p-8' : ''}
        ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]' : ''}
        ${className}
      `}
    >
      {/* Noise texture overlay for texture depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className={`relative z-10 ${noPadding ? 'h-full' : ''}`}>
        {children}
      </div>
    </div>
  );
};