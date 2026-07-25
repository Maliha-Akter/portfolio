"use client";
import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

// Custom GitHub Icon
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TITLES = [
  "Full Stack Developer.",
  "AI Enthusiast.",
  "Software Engineer.",
  "React Developer."
];

const Banner = () => {
  // Typing Animation State
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentTitle = TITLES[titleIndex];
      
      if (!isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        if (currentText === currentTitle) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-white dark:bg-[#0B1220] transition-colors duration-300 overflow-hidden mt-20 py-24 lg:py-0"
    >
      {/* 1. Light Mode Background (Left to Right: Green to White) */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-white dark:opacity-0 transition-opacity duration-500"></div>

      {/* 2. Dark Mode Background (Radial Top Left) */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#162032]/80 via-[#0B1220] to-[#0B1220] transition-opacity duration-500"></div>

      {/* Grid & Dots Wrapper with Fade Mask */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      >
        {/* Light Grid - Gray in Light mode, Blue in Dark mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2B3A55_1px,transparent_1px),linear-gradient(to_bottom,#2B3A55_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.3] dark:opacity-[0.05] transition-colors duration-300"></div>
        
        {/* Small Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#2B3A55_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.5] dark:opacity-[0.15] transition-colors duration-300"></div>
      </div>

      {/* Blurred Mesh Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#16A34A] rounded-full mix-blend-screen filter blur-[128px] opacity-15"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[30rem] md:h-[30rem] bg-[#16A34A] dark:bg-[#0891B2] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-[#16A34A] font-mono text-base md:text-lg tracking-wide font-['JetBrains_Mono',monospace]">
                Hello, I'm
              </p>
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] transition-colors duration-300">
                Maliha Akter Miti
              </h1>
              
              {/* Animated Typing Header */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-[#94A3B8] font-['Space_Grotesk',sans-serif] min-h-[3rem] sm:min-h-[40px] flex items-center transition-colors duration-300">
                {currentText}
                <span className="animate-pulse text-[#16A34A] ml-1 font-light">|</span>
              </h2>

              <p className="text-slate-600 dark:text-[#CBD5E1] text-base sm:text-lg max-w-lg leading-relaxed pt-2 font-['Manrope',sans-serif] transition-colors duration-300">
                Building scalable web applications and AI-powered solutions. 
                Focused on writing clean code and creating intuitive user experiences.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 font-['Manrope',sans-serif]">
              <Link
                href="/" // Updated link as requested
                className="flex justify-center items-center gap-2 px-6 py-3.5 sm:py-3 bg-[#16A34A] text-white hover:bg-[#15803d] dark:bg-[#F59E0B] dark:hover:bg-[#D97706] dark:text-[#0B1220] rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-[#16A34A]/20 dark:shadow-[#F59E0B]/10 w-full sm:w-auto"
              >
                <Download size={20} />
                Download Resume
              </Link>
              <a
                href="#projects"
                className="flex justify-center items-center gap-2 px-6 py-3.5 sm:py-3 bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] text-slate-700 dark:text-[#F8FAFC] hover:border-[#16A34A] hover:text-[#16A34A] dark:hover:border-[#16A34A] dark:hover:text-white hover:bg-transparent rounded-2xl font-medium transition-all hover:-translate-y-1 shadow-sm dark:shadow-none w-full sm:w-auto"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4 justify-center sm:justify-start">
              <a href="https://github.com/Maliha-Akter" target="_blank" rel="noreferrer" className="text-slate-400 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#F8FAFC] hover:-translate-y-1 transition-all">
                <GithubIcon size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/maliha-akter-miti/" target="_blank" rel="noreferrer" className="text-slate-400 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#0891B2] hover:-translate-y-1 transition-all">
                <LinkedinIcon size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:maliha.miti.0276@gmail.com" className="text-slate-400 dark:text-[#94A3B8] hover:text-[#16A34A] hover:-translate-y-1 transition-all">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Right Side: Image/Illustration */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 group">
              {/* Back Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#16A34A] via-[#F59E0B] to-[#0891B2] rounded-2xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500"></div>
              
              {/* Glamorous Border Wrapper */}
              <div className="absolute inset-0 p-[3px] bg-gradient-to-tr from-[#16A34A] via-[#F59E0B] to-[#0891B2] rounded-2xl z-10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                {/* Inner Image Container */}
                <div className="w-full h-full bg-slate-50 dark:bg-[#162032] rounded-xl overflow-hidden relative">
                  <img 
                    src="https://i.ibb.co.com/93d5L3Yq/edited-removebg-preview.png" 
                    alt="Maliha Akter Miti" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;