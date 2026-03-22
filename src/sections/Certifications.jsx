import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';

const Certifications = () => {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="h-full flex flex-col pt-8">
      <div className="mb-12 relative z-10 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
          Certifications
          <div className="h-1 w-20 bg-gradient-to-l from-indigo-600 to-purple-600 mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <TiltCard key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-3xl border border-indigo-100 dark:border-indigo-500/20 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all h-full flex flex-col overflow-hidden group/card" 
              style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0 rounded-3xl pointer-events-none"></div>
              
              {cert.image && (
                <div className="w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-indigo-50/50 dark:border-indigo-900/30 text-center relative group/cert z-10" style={{ transform: "translateZ(40px)" }}>
                  <div className="absolute top-3 right-3 z-30 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Verified
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover origin-center transform transition-transform duration-700 group-hover/cert:scale-110 group-hover/cert:-rotate-1" loading="lazy" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow justify-between z-10 relative" style={{ transform: "translateZ(50px)" }}>
                <div className="flex gap-4 items-start mb-6">
                  {!cert.image && (
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg border border-white/20 text-white transform group-hover/card:rotate-12 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300"></div>
                        <Award size={24} className="relative z-10" />
                      </div>
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold flex items-center justify-between text-sm w-full bg-slate-100/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/50">
                      <span className="truncate pr-2">{cert.issuer}</span>
                      <CheckCircle2 size={16} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                    </p>
                  </div>
                </div>

                {cert.link && (
                  <div className="mt-auto pt-2" style={{ transform: "translateZ(60px)" }}>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl text-sm border border-slate-200 dark:border-slate-700 hover:border-transparent group-hover/card:bg-slate-200 dark:group-hover/card:bg-slate-700"
                    >
                      View / Download
                      <ExternalLink size={16} className="opacity-70" />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
