import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Void */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-neutral-300 rounded-full mix-blend-screen filter blur-[100px] opacity-5 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-neutral-400 rounded-full mix-blend-screen filter blur-[100px] opacity-5 animate-blob-delay"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-neutral-500 rounded-full mix-blend-screen filter blur-[100px] opacity-5 animate-blob"></div>

      {/* Grid Overlay for "Architectural" feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
};
