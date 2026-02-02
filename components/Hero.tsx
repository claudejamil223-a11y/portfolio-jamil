
import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleDownloadCV = () => {
    window.open(PORTFOLIO_OWNER.cvLink, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-indigo-500/30 p-2 overflow-hidden bg-slate-900">
            <img 
              src={PORTFOLIO_OWNER.profileImage} 
              alt={PORTFOLIO_OWNER.name}
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Jamil+Maiga&background=6366f1&color=fff&size=200";
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="px-4 py-1.5 text-[10px] font-black tracking-wider text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full">
            Assistant Engineer Intern (May 2025)
          </div>
          <div className="px-4 py-1.5 text-[10px] font-black tracking-wider text-purple-400 uppercase bg-purple-400/10 border border-purple-400/20 rounded-full">
            Gap Year Program (Sept 2025)
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white">
          Bridging Engineering <br />
          <span className="gradient-text">& Management</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          I am <span className="text-white font-medium">{PORTFOLIO_OWNER.name}</span>. 
          A student at <span className="text-indigo-400">Centrale Casablanca</span> & <span className="text-purple-400">ESSEC Business School</span>. {PORTFOLIO_OWNER.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="px-8 py-3 glass-morphism text-slate-200 font-semibold rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto text-center"
          >
            View Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
