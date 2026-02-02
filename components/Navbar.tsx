
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] p-6 flex justify-center">
      <div className="glass-morphism rounded-full px-8 py-3 flex items-center justify-between w-full max-w-6xl shadow-2xl">
        <div 
          onClick={() => onNavigate('home')}
          className="text-2xl font-black gradient-text tracking-tighter cursor-pointer hover:scale-105 transition-transform"
        >
          JC.
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                currentPage === link.id ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/95 z-[55] flex flex-col items-center justify-center space-y-8 md:hidden">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsMenuOpen(false); }}
              className="text-2xl font-black uppercase tracking-widest text-slate-200"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="text-indigo-400 font-bold uppercase tracking-widest pt-10">Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
