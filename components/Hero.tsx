
import React from 'react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 glass-card rounded-full border-indigo-500/30">
          <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            Available for New Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight leading-[1.1]">
         Full-Stack Developer with  <br />
          <span className="gradient-text">a focus on AI-driven solutions</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          
Building AI-powered, full-stack solutions that connect advanced models with scalable, user-focused products.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25 w-full sm:w-auto"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-card hover:bg-white/5 text-white rounded-xl font-semibold transition-all w-full sm:w-auto border-white/20"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
