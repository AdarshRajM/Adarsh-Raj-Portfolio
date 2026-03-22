import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
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
          <div className="h-1 w-20 bg-gradient-to-l from-indigo-600 to-purple-600 mt-4 rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <TiltCard key={index} delay={index * 0.1}>
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
              
              {cert.image && (
                <div className="w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-center relative group/cert" style={{ transform: "translateZ(40px)" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover/cert:scale-110" loading="lazy" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow justify-between" style={{ transform: "translateZ(50px)" }}>
                <div className="flex gap-4 items-start mb-4">
                  {!cert.image && (
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 text-white transform group-hover:rotate-12 transition-transform duration-300">
                        <Award size={24} />
                      </div>
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center justify-between text-sm">
                      {cert.issuer}
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    </p>
                  </div>
                </div>

                {cert.link && (
                  <div className="mt-auto" style={{ transform: "translateZ(60px)" }}>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold transition-colors shadow-sm text-sm"
                    >
                      View / Download
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
