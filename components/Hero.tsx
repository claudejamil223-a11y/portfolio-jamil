
import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full">
          Seeking PFA Internship (3-4 Months)
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
          Bridging <span className="gradient-text">Data Science</span> <br />
          & Industrial Strategy.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          Hi, I'm <span className="text-white font-medium">{PORTFOLIO_OWNER.name}</span>. 
          Student Engineer at <span className="text-indigo-400">École Centrale Casablanca</span>. {PORTFOLIO_OWNER.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV / PDF
          </button>
          <a
            href="#projects"
            className="px-8 py-3 glass-morphism text-slate-200 font-semibold rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto"
          >
            Explore Projects
          </a>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noopener noreferrer">
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-8 h-8 invert" alt="GitHub" />
          </a>
          <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noopener noreferrer">
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-8 h-8" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 print:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
