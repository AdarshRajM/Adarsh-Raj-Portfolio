import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Trophy } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Achievements = () => {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="h-full flex flex-col pt-8">
      <div className="mb-12 relative z-10 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
          Achievements
          <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mt-4 rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <TiltCard key={index} delay={index * 0.1}>
            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden" style={{ transform: "translateZ(30px)" }}>
              {achievement.image && (
                <div className="w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-white/20 dark:border-slate-700/50 text-center relative group/img rounded-t-2xl" style={{ transform: "translateZ(40px)" }}>
                  <img src={achievement.image} alt={achievement.title || achievement} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" loading="lazy" />
                </div>
              )}
              <div className="p-6 flex gap-4 items-start flex-grow" style={{ transform: "translateZ(40px)" }}>
                {!achievement.image && (
                  <div className="flex-shrink-0" style={{ transform: "translateZ(50px)" }}>
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 text-white transform group-hover:scale-110 transition-transform duration-300">
                      <Trophy size={24} />
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {achievement.title || achievement}
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
