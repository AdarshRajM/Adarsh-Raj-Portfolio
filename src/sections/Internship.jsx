import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const Internship = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl transform -translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center tracking-tight">
            Professional Experience
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-600 to-indigo-600 mt-6 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative group"
            >
              {/* Gradient Border Illusion */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Glassmorphism Card */}
              <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Company Logo / Abstract Image Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-100 to-primary-100 dark:from-indigo-900/40 dark:to-primary-900/40 shadow-inner border border-white/20 dark:border-slate-700/50">
                      <Briefcase className="text-primary-600 dark:text-primary-400" size={40} />
                    </div>
                  </div>

                  {/* Header Details */}
                  <div className="flex-grow">
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                      {job.role}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {job.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                        <Calendar size={16} className="text-slate-500" />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                        <MapPin size={16} className="text-slate-500" />
                        {job.mode}
                      </span>
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-4 mb-8 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                      {job.description.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                      ))}
                    </div>

                    {/* Technologies Tag */}
                    <div className="mb-8">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-semibold border border-indigo-100 dark:border-indigo-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Section */}
                    {job.certificate && (
                      <div className="pt-8 border-t border-slate-200 dark:border-slate-700/50">
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <Award className="text-primary-500" size={24} />
                          Internship Certificate
                        </h5>
                        <div className="flex flex-col sm:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                          <div className="w-full sm:w-48 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-md group-hover:shadow-lg transition-shadow">
                            <img 
                              src={job.certificate.image} 
                              alt="Certificate Preview" 
                              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-grow flex justify-center sm:justify-start">
                            <motion.a 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={job.certificate.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium shadow-md hover:shadow-xl transition-all"
                            >
                              <ExternalLink size={18} />
                              View Certificate
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    )}
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

export default Internship;
