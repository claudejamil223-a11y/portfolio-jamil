
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Design'>('All');
  
  const filteredSkills = filter === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="text-slate-400 max-w-md">My toolbox consists of the latest industry-standard technologies to build modern applications.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['All', 'Frontend', 'Backend', 'Design'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-200">{skill.name}</span>
              <span className="text-sm text-indigo-400 font-bold">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
