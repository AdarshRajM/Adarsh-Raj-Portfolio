import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, title, tagline, socials } = portfolioData.hero;

  // 3D Parallax hover effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* 2026 Modern Animated Gradient Background (Blue, Purple, Indigo) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -60, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 80, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[650px] h-[650px] bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-2xl relative"
          >
            {/* Minimalist Floating Shapes inside Card Area */}
            <div className="absolute top-8 right-8 w-12 h-12 border-[3px] border-indigo-400/40 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-12 right-16 w-8 h-8 bg-purple-400/30 rounded-lg rotate-45 animate-pulse"></div>
            
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800/50 backdrop-blur-md">
              Welcome to my space
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">{name}</span>.
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6">
              {title}
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              {tagline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12 relative z-20">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/uc?export=download&id=1Gnr9UHoH-G47s6ebK4T67lgaA0tOJ8A5" 
                className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium flex items-center gap-2 transition-colors shadow-xl shadow-slate-900/20 dark:shadow-white/10 border border-transparent"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium flex items-center gap-2 transition-colors shadow-lg"
                >
                  <FolderOpen size={20} />
                  View Projects
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-5">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm transform hover:-translate-y-1">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={22} />
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm transform hover:-translate-y-1">
                <span className="sr-only">GitHub</span>
                <Github size={22} />
              </a>
              <a href={socials.email} className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all shadow-sm transform hover:-translate-y-1">
                <span className="sr-only">Email</span>
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-end relative perspective-[1000px]"
          >
            {/* Glowing Effect Behind Image */}
            <div className="absolute inset-0 bg-blue-500/30 dark:bg-indigo-500/30 blur-3xl rounded-full transform scale-110 pointer-events-none"></div>
            
            {/* Developer Illustration / Abstract Profile Geometry - Now with 3D Interaction */}
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-md aspect-square rounded-[3rem] bg-white/20 dark:bg-slate-800/30 border border-white/50 dark:border-slate-600/50 backdrop-blur-3xl flex items-center justify-center shadow-2xl p-6 cursor-pointer"
            >
              <motion.div
                style={{
                  transform: "translateZ(50px)",
                }}
                className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner border border-white/20 dark:border-slate-600/30 bg-slate-100 dark:bg-slate-800"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" 
                  alt="Developer Setup Interface" 
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              </motion.div>

              {/* Decorative Code Badge - High 3D Pop */}
              <motion.div 
                style={{
                  transform: "translateZ(80px)",
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] flex items-center gap-3 border border-slate-100 dark:border-slate-700/50"
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide">Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
