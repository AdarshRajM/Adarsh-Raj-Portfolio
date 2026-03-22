import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

const Training = () => {
  const { trainings } = portfolioData;

  if (!trainings || trainings.length === 0) return null;

  return (
    <section id="training" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
            Training & Certifications
            <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{training.title}</h3>
                    <div className="text-lg text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
                      <BookOpen size={18} />
                      {training.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 w-fit">
                    <Calendar size={16} />
                    {training.duration}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  {training.details.map((detail, idx) => (
                    <p key={idx} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={18} />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
