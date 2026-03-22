import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  Code2, Server, Database, Wrench, Cpu, Lightbulb, Hexagon, Component, AlignLeft, LayoutPanelTop, 
  Network, HardDrive, LayoutTemplate, Layers, Frame,
  Clock, Users, Puzzle, RefreshCw, Zap, BrainCircuit
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const getSkillIcon = (skill) => {
  const deviconMap = {
    "C": "c/c-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    "Java": "java/java-original.svg",
    "JavaScript": "javascript/javascript-original.svg",
    "TypeScript": "typescript/typescript-original.svg",
    "Python": "python/python-original.svg",
    "PHP": "php/php-original.svg",
    "Kotlin": "kotlin/kotlin-original.svg",
    "HTML": "html5/html5-original.svg",
    "React.js": "react/react-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    "Express.js": "express/express-original.svg",
    "Spring Boot": "spring/spring-original.svg",
    "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
    "Bootstrap": "bootstrap/bootstrap-original.svg",
    "MySQL": "mysql/mysql-original.svg",
    "MongoDB": "mongodb/mongodb-original.svg",
    "Git": "git/git-original.svg",
    "GitHub": "github/github-original.svg",
    "Figma": "figma/figma-original.svg",
    "Android Studio": "androidstudio/androidstudio-original.svg"
  };

  if (deviconMap[skill]) {
    return { type: 'img', src: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconMap[skill]}` };
  }

  // Fallbacks or CS Fundamentals using Lucide
  const lucideMap = {
    "Data Structures and Algorithms": <Hexagon size={32} strokeWidth={1.5} />,
    "DBMS": <Database size={32} strokeWidth={1.5} />,
    "Operating Systems": <HardDrive size={32} strokeWidth={1.5} />,
    "Computer Networks": <Network size={32} strokeWidth={1.5} />,
    "Object-Oriented Programming": <Component size={32} strokeWidth={1.5} />,
    "Postman": <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11.458-3.042c-2.482 0-3.327 1.503-3.327 3.037 0 1.259.697 1.83 2.169 2.158l.745.166c1.077.234 1.353.498 1.353 1.054 0 .746-.662 1.229-1.636 1.229-1.258 0-1.841-.6-2.023-1.071l-1.93.996c.497 1.229 1.766 2.011 3.966 2.011 2.502 0 3.535-1.42 3.535-3.036 0-1.408-.856-1.954-2.279-2.264l-.622-.132c-.896-.184-1.258-.454-1.258-1.011 0-.616.63-1.099 1.575-1.099.994 0 1.574.454 1.79 1.026l1.838-.982c-.413-1.244-1.573-2.082-3.896-2.082z"/></svg>, // Generic placeholder icon
    "Netlify": <LayoutTemplate size={32} strokeWidth={1.5} />,
    "Vercel": <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 3l12 21H0z"/></svg>,
    "Render": <Layers size={32} strokeWidth={1.5} />,
    "Time Management": <Clock size={32} strokeWidth={1.5} />,
    "Leadership": <Users size={32} strokeWidth={1.5} />,
    "Problem-Solving": <Puzzle size={32} strokeWidth={1.5} />,
    "Adaptability": <RefreshCw size={32} strokeWidth={1.5} />,
    "Quick Learner": <BrainCircuit size={32} strokeWidth={1.5} />
  };

  return { type: 'icon', component: lucideMap[skill] || <Code2 size={32} strokeWidth={1.5} /> };
};

const SkillCategory = ({ title, icon, skills, delay }) => {
  return (
    <TiltCard delay={delay} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, type: "spring" }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-2xl transition-all h-full"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-center gap-3 mb-6" style={{ transform: "translateZ(40px)" }}>
          <div className="p-3 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl text-white shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ transform: "translateZ(35px)" }}>
          {skills.map((skill, index) => {
             const iconData = getSkillIcon(skill);
             return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-slate-50/80 dark:bg-slate-700/30 rounded-xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-indigo-50 dark:hover:from-primary-900/40 dark:hover:to-indigo-900/40 border border-slate-200/50 dark:border-slate-600/50 shadow-sm hover:shadow-md transition-all group"
              >
                {iconData.type === 'img' ? (
                  <img src={iconData.src} alt={skill} className="w-10 h-10 mb-3 object-contain group-hover:scale-110 group-hover:drop-shadow-md transition-all" loading="lazy" />
                ) : (
                  <div className="w-10 h-10 mb-3 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:scale-110 transition-all">
                    {iconData.component}
                  </div>
                )}
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </TiltCard>
  );
};

const Skills = () => {
  const { programming, frameworks, databases, tools, cs, soft } = portfolioData.skills;

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-[1000px]">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-12 text-center transform-gpu"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
            Technical Arsenal
            <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Programming Languages" icon={<Code2 size={24} />} skills={programming} delay={0.1} />
          <SkillCategory title="Frameworks & Libraries" icon={<Server size={24} />} skills={frameworks} delay={0.2} />
          <SkillCategory title="Databases" icon={<Database size={24} />} skills={databases} delay={0.3} />
          <SkillCategory title="Tools & Platforms" icon={<Wrench size={24} />} skills={tools} delay={0.4} />
          <SkillCategory title="CS Fundamentals" icon={<Cpu size={24} />} skills={cs} delay={0.5} />
          <SkillCategory title="Soft Skills" icon={<Lightbulb size={24} />} skills={soft} delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
