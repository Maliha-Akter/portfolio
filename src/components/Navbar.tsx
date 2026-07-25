"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Defaulting to true matches your previous dark mode default
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
          currentActive = htmlSection.getAttribute("id") || "";
        }
      });

      if (window.scrollY < 100) {
        currentActive = "home";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-xl border-b border-slate-200 dark:border-[#2B3A55] py-4 shadow-sm dark:shadow-none'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-['Space_Grotesk',sans-serif] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
          >
            Maliha<span className="text-[#16A34A]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`relative py-2 transition-colors text-sm font-medium font-['Manrope',sans-serif] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-md ${
                        isActive
                          ? 'text-[#16A34A] dark:text-[#16A34A]' 
                          : 'text-slate-600 dark:text-slate-300 hover:text-[#16A34A] dark:hover:text-[#16A34A]'
                      }`}
                    >
                      {link}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#16A34A] rounded-full transition-all" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Actions (Visible on all devices) */}
          <div className="flex items-center gap-4 border-slate-200 dark:border-[#2B3A55] md:pl-6 md:border-l">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500 hover:text-[#16A34A] dark:text-slate-400 dark:hover:text-[#16A34A] transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-[#1D293D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop Resume Button */}
            <Link
              href="/"
              className="hidden md:block px-5 py-2.5 bg-slate-900 dark:bg-[#1D293D] border border-transparent dark:border-[#2B3A55] text-white hover:bg-[#16A34A] dark:hover:border-[#16A34A] dark:hover:text-white transition-all duration-300 rounded-xl text-sm font-medium font-['Manrope',sans-serif] hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#16A34A]/20"
            >
              Resume
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-xl border-b border-slate-200 dark:border-[#2B3A55] shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-2 font-['Manrope',sans-serif]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors text-base font-medium px-4 py-3 rounded-xl ${
                  isActive
                    ? 'bg-green-50 dark:bg-[#16A34A]/10 text-[#16A34A]' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1D293D] hover:text-[#16A34A] dark:hover:text-[#16A34A]'
                }`}
              >
                {link}
              </a>
            );
          })}
          <div className="pt-4 mt-2 border-t border-slate-100 dark:border-[#2B3A55]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center w-full px-5 py-3.5 bg-[#16A34A] text-white rounded-xl font-medium hover:bg-[#15803d] transition-colors shadow-md shadow-[#16A34A]/20"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;