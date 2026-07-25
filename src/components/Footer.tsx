import React from 'react';
import { Mail } from 'lucide-react';

// Custom SVG components to replace the removed Lucide brand icons
const Github = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] transition-colors duration-300 relative overflow-hidden border-t border-slate-200 dark:border-[#2B3A55]/60 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Identity */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] font-bold text-lg tracking-wide transition-colors duration-300">
            Maliha Akter Miti
          </h3>
          <p className="text-[#16A34A] font-mono text-xs font-semibold uppercase tracking-wider mt-1.5">
            Full Stack Developer
          </p>
        </div>

        {/* Small Social Icons */}
        <div className="flex items-center gap-5">
          <a 
            href="https://github.com/Maliha-Akter" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#16A34A] hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/maliha-akter-miti/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#16A34A] hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:maliha.miti.0276@gmail.com" 
            className="text-slate-500 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#16A34A] hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright & Tech Stack */}
        <div className="text-center md:text-right text-slate-500 dark:text-[#94A3B8] font-['Manrope',sans-serif] text-sm transition-colors duration-300">
          <p>© 2026</p>
          <p className="mt-1 flex items-center justify-center md:justify-end gap-1.5">
              <span className="text-slate-900 dark:text-[#F8FAFC] font-medium hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors cursor-default">All rights reserved.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;