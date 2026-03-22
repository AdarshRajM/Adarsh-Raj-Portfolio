import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { User, CheckCircle } from 'lucide-react';

const About = () => {
  const { description, strengths } = portfolioData.about;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
            <User className="text-primary-600 dark:text-primary-500" size={32} />
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center perspective-[1000px]">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.3 }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {description}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I thrive in collaborative environments and enjoy tackling complex challenges to build robust, scalable web applications that improve user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm transform-gpu"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Core Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary-600 dark:text-primary-500 flex-shrink-0" size={20} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
             <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative rounded-2xl shadow-2xl overflow-hidden group border-2 border-primary-500/20"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <img src="/profile.png" alt="Profile" className="w-full max-w-sm rounded-2xl object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
