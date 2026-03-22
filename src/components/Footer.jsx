import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-card dark:bg-dark-card py-8 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-500">
              Adarsh<span className="text-light-text dark:text-dark-text"> Raj</span>
            </p>
            <p className="mt-2 text-sm text-light-muted dark:text-dark-muted">
              Building scalable web applications and solving real-world problems.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={portfolioData.hero.socials.github} target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.hero.socials.email} className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
          <p className="text-sm text-light-muted dark:text-dark-muted">
            &copy; {currentYear} {portfolioData.hero.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
