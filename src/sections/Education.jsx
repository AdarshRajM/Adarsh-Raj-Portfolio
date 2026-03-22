import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, MapPin, CalendarDays } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
            Education
            <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="space-y-8 perspective-[1000px]">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden transform-gpu"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap size={150} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary-600 dark:text-primary-500" />
                      {edu.institution}
                    </span>
                    <span className="hidden sm:inline-block text-slate-300 dark:text-slate-600">|</span>
                    <span className="flex items-center gap-2 text-primary-600 dark:text-primary-500">
                      <CalendarDays size={18} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
