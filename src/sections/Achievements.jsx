import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Trophy } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Achievements = () => {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="h-full flex flex-col pt-8">
      <div className="mb-8 relative z-10 w-full">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white inline-flex flex-col">
          Achievements
          <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-indigo-600 mt-2 rounded-full"></div>
        </h2>
      </div>

      <div className="grid gap-6">
        {achievements.map((achievement, index) => (
          <TiltCard key={index} delay={index * 0.1}>
            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all h-full" style={{ transform: "translateZ(30px)" }}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0" style={{ transform: "translateZ(50px)" }}>
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 text-white transform group-hover:scale-110 transition-transform duration-300">
                    <Trophy size={24} />
                  </div>
                </div>
                <div style={{ transform: "translateZ(40px)" }}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {achievement}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Recognized for exceptional performance and competitive problem-solving capabilities.
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
