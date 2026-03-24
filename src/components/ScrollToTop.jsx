import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsHovered(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-8 right-8 z-[100] flex flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="mb-3 px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold rounded-lg shadow-xl tracking-wider uppercase border border-white/10 dark:border-slate-800/10 pointer-events-none"
              >
                Ascend
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button with Glow */}
          <div className="relative group">
            {/* Animated Glow Rings */}
            <div className="absolute -inset-2 bg-gradient-to-t from-primary-600 to-indigo-500 rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-t from-indigo-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            <button
              onClick={scrollToTop}
              className="relative p-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-white/20 dark:border-slate-800/20 rounded-full shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 flex items-center justify-center overflow-hidden"
              aria-label="Ascend to top"
            >
              {/* Internal Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent dark:from-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div
                animate={isHovered ? { y: [0, -4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowUp size={24} className="group-hover:text-primary-400 dark:group-hover:text-primary-600 transition-colors duration-300" strokeWidth={2.5} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
