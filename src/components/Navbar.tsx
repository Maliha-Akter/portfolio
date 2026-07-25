"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

// Moved outside component to prevent recreation on every render
const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState(''); // NEW: Tracks active link

  // Handle scroll effect for glassmorphism AND active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // 1. Glassmorphism trigger
      setIsScrolled(window.scrollY > 20);

      // 2. Active Section trigger (Scroll Spy)
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";

      sections.forEach((section) => {
        // Need to assert section as HTMLElement to access offsetTop
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;

        // If we have scrolled past the section's top (minus a 150px offset for the navbar)
        if (window.scrollY >= sectionTop - 150) {
          currentActive = htmlSection.getAttribute("id") || "";
        }
      });

      // Default to "home" if we are at the absolute top
      if (window.scrollY < 100) {
        currentActive = "home";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Syncs React state with the HTML tag for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-gradient-to-r from-green-100/90 to-white/90 dark:from-[#0B1220]/90 dark:to-[#0B1220]/90 backdrop-blur-md border-b border-green-200/50 dark:border-[#2B3A55] py-4'
          : 'bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-[#16A34A] dark:text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Maliha<span className="text-slate-800 dark:text-[#16A34A]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`relative py-1 transition-colors text-sm font-medium font-['Manrope',sans-serif] ${isActive
                          ? 'text-[#15803d] dark:text-[#16A34A]' // Active Color: Darker green (Light) / Green (Dark)
                          : 'text-[#16A34A] dark:text-white hover:text-[#15803d] dark:hover:text-[#16A34A]' // Default & Hover
                        }`}
                    >
                      {link}
                      {/* Active Indicator Underline */}
                      {isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#15803d] dark:bg-[#16A34A] rounded-full transition-all" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-[#2B3A55] pl-6">

              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-[#16A34A] dark:text-white hover:text-[#15803d] dark:hover:text-[#16A34A] transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link
                href="/"
                className="px-5 py-2 bg-slate-50 dark:bg-[#162032] border border-[#16A34A] dark:border-[#2B3A55] text-[#16A34A] dark:text-white hover:bg-[#16A34A] hover:text-white dark:hover:border-[#16A34A] dark:hover:text-white transition-all rounded-2xl text-sm font-medium font-['Manrope',sans-serif] hover:-translate-y-0.5"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle & Theme Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-[#16A34A] dark:text-white hover:text-[#15803d] dark:hover:text-[#16A34A] transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className="text-[#16A34A] dark:text-white hover:text-[#15803d] dark:hover:text-[#16A34A] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#162032] border-b border-slate-200 dark:border-[#2B3A55] shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4 font-['Manrope',sans-serif]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors text-lg font-medium pl-2 border-l-2 ${isActive
                      ? 'text-[#15803d] dark:text-[#16A34A] border-[#15803d] dark:border-[#16A34A]' // Active State with left border
                      : 'text-[#16A34A] dark:text-white hover:text-[#15803d] dark:hover:text-[#16A34A] border-transparent'
                    }`}
                >
                  {link}
                </a>
              );
            })}
            
            <div className="pt-4 border-t border-slate-200 dark:border-[#2B3A55] flex items-center justify-between">
              <Link
                href="/"
                className="w-full text-center px-5 py-3 bg-[#16A34A] text-white rounded-2xl font-medium hover:bg-[#15803d] transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;