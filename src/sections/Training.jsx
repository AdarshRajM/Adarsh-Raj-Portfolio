import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { BookOpen, Calendar, CheckCircle2, Award, Zap } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Training = () => {
  const { trainings } = portfolioData;

  if (!trainings || trainings.length === 0) return null;

  return (
    <section id="training" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4 border border-primary-100 dark:border-primary-800/50">
            <Zap size={16} className="text-amber-500" />
            Continuous Learning
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white inline-flex flex-col items-center tracking-tight">
            Training & Certifications
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-600 to-indigo-600 mt-6 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {trainings.map((training, index) => (
            <TiltCard key={index} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group h-full flex flex-col"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                {/* Glow Background on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500 z-0"></div>
                
                {/* Card Content */}
                <div className="relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden">
                  
                  {/* Abstract Corner Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-indigo-500/10 dark:from-primary-500/20 dark:to-indigo-500/20 rounded-bl-[100px] pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
                  
                  <div className="flex items-start gap-4 mb-6 relative">
                    <div className="flex-shrink-0" style={{ transform: "translateZ(50px)" }}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-100 to-primary-100 dark:from-indigo-900/60 dark:to-primary-900/60 shadow-inner border border-white/40 dark:border-slate-700 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        <Award size={28} />
                      </div>
                    </div>
                    <div className="flex-grow pt-1" style={{ transform: "translateZ(40px)" }}>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {training.title}
                      </h3>
                      <div className="text-base text-primary-600 dark:text-primary-400 font-bold flex items-center gap-2">
                        <BookOpen size={18} />
                        {training.institution}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6" style={{ transform: "translateZ(35px)" }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                      <Calendar size={16} className="text-slate-500 dark:text-slate-400" />
                      {training.duration}
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-200/50 dark:border-slate-700/50 flex-grow" style={{ transform: "translateZ(45px)" }}>
                    {training.details.map((detail, idx) => (
                      <p key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                        <CheckCircle2 className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" size={20} />
                        <span className="font-medium opacity-90">{detail}</span>
                      </p>
                    ))}
                  </div>

                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
