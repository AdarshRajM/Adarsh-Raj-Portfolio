import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Trophy, Code, Terminal, Database, FileCode2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Achievements = () => {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  // Custom Icon mapping for the badges
  const getBadgeIcon = (name) => {
    switch(name) {
      case 'Problem Solving': return <Code size={20} />;
      case 'C++': return <FileCode2 size={20} />;
      case 'Java': return <Terminal size={20} />;
      case 'Python': return <Database size={20} />; // Using standard icons to represent data/logic
      case '10 Days of JS': return <FileCode2 size={20} />;
      case 'C language': return <Terminal size={20} />;
      default: return <Trophy size={20} />;
    }
  };

  return (
    <section id="achievements" className="h-full flex flex-col pt-8">
      <div className="mb-12 relative z-10 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
          Achievements
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-600 mt-4 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => {
          // Identify if this is the multiple badges achievement to render custom UI
          const isMultipleBadges = achievement.title.includes("Earned multiple badges");
          
          return (
            <TiltCard key={index} delay={index * 0.1}>
              <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-slate-700/50 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)] transition-all h-full flex flex-col overflow-hidden group/card" style={{ transform: "translateZ(30px)" }}>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                {/* Cover Image for Leetcode and HackerRank Shields */}
                {achievement.image && (
                  <div className="w-full h-48 overflow-hidden bg-slate-950 relative group/img rounded-t-[2rem] flex items-center justify-center p-4 pb-0" style={{ transform: "translateZ(40px)" }}>
                    {/* Subtle corner glares */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Zoomed in object-contain with max-width restriction for perfect framing */}
                    <img src={achievement.image} alt={achievement.title} className="max-w-[85%] max-h-[90%] object-contain object-bottom transition-transform duration-1000 group-hover/img:scale-110 drop-shadow-[0_10px_25px_rgba(255,255,255,0.05)] z-20" loading="lazy" />
                  </div>
                )}
                
                <div className="p-8 flex flex-col items-start flex-grow relative z-20" style={{ transform: "translateZ(50px)" }}>
                  
                  {/* Icon for non-image items */}
                  {!achievement.image && (
                    <div className="mb-6" style={{ transform: "translateZ(60px)" }}>
                      <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/30 border border-white/20 dark:border-slate-700/50 text-white transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-300">
                        <Trophy size={28} />
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight group-hover/card:text-orange-500 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
                    Recognized for exceptional performance and competitive problem-solving capabilities.
                  </p>

                  {/* Custom Hexagonal Badges UI for HackerRank */}
                  {isMultipleBadges && (
                    <div className="mt-auto w-full pt-4 border-t border-slate-200 dark:border-slate-700/50" style={{ transform: "translateZ(60px)" }}>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">My Badges</p>
                      <div className="flex flex-wrap justify-between gap-1">
                        {['Problem Solving', 'C++', 'Java', 'Python', '10 Days of JS', 'C language'].map((badge, i) => {
                          const isPython = badge === 'Python';
                          return (
                            <div key={i} className="flex flex-col items-center group/badge transform transition-all hover:z-10 w-[15%] min-w-[50px]">
                              {/* Actual CSS Hexagon Shape */}
                              <div 
                                className={`relative flex items-center justify-center w-auto aspect-[1/1.15] w-full mb-1 transition-transform duration-300 group-hover/badge:-translate-y-2 group-hover/badge:scale-110
                                ${isPython ? 'bg-gradient-to-br from-yellow-400 to-amber-500 drop-shadow-md' : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'}`}
                                style={{
                                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                }}
                              >
                                <div className={`${isPython ? 'text-slate-900 drop-shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}>
                                  {getBadgeIcon(badge)}
                                </div>
                              </div>
                              
                              <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 text-center leading-tight h-6 flex items-center break-words max-w-full px-0.5">{badge}</span>
                              
                              <div className="flex gap-[1px] mt-0.5">
                                {[1,2,3].map(star => <span key={`s${star}`} className="text-[8px] text-amber-500">★</span>)}
                                {isPython && [4,5].map(star => <span key={`s${star}`} className="text-[8px] text-amber-500">★</span>)}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
