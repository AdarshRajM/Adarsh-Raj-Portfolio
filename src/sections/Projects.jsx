import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Code } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  // Extract unique technologies for styling or basic filtering if desired. 
  // Custom filter logic: Check if project touches standard tags we define.
  const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

  const getFilteredProjects = () => {
    if (filter === 'All') return projects;
    return projects.filter(project => {
      const tech = project.technologies.map(t => t.toLowerCase());
      if (filter === 'Full Stack') return tech.includes('react.js') && (tech.includes('node.js') || tech.includes('spring boot'));
      if (filter === 'Backend') return tech.includes('java') || tech.includes('php') || tech.includes('node.js');
      if (filter === 'Frontend') return tech.includes('html') && !tech.includes('php') && !tech.includes('node.js');
      return true; // Fallback
    });
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
            Featured Projects
            <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} delay={0.1} className="h-full">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex flex-col h-full transform transition-all duration-300"
                  style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                >
                  {/* Project Image Box */}
                  <div className="relative h-56 group/image rounded-t-2xl overflow-hidden" style={{ transform: "translateZ(40px)" }}>
                    <div className="absolute inset-0 bg-slate-900/40 group-hover/image:bg-transparent transition-colors z-10 duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover/image:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6 z-20">
                      <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                        <Code size={18} /> View Source
                      </span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-8 flex flex-col flex-grow rounded-b-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.title.split('–')[0].trim()}
                    </h3>
                    
                    {project.title.includes('–') && (
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 uppercase tracking-wider">
                        {project.title.split('–')[1].trim()}
                      </p>
                    )}

                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                      {descriptionParser(project.description)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8" style={{ transform: "translateZ(40px)" }}>
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-lg border border-primary-100 dark:border-primary-800/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50 transition-transform" style={{ transform: "translateZ(60px)" }}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-colors font-semibold border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-indigo-600 text-white rounded-xl hover:from-primary-700 hover:to-indigo-700 transition-all font-semibold shadow-md shadow-primary-500/20"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Helper to make paragraphs readable
const descriptionParser = (text) => {
  return text.split('. ').map((sentence, index, array) => (
    <React.Fragment key={index}>
      {sentence}{index !== array.length - 1 ? '.' : ''}
      <br className="mb-2" />
    </React.Fragment>
  ));
};

export default Projects;
