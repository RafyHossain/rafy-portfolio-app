'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

// 🌟 FIX: Added 'Qualification' after 'Tech'
const links = ['Home', 'About', 'Tech', 'Qualification', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Smooth Scroll
  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* 🌟 Floating Dock Container */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex items-center justify-between md:justify-center p-1.5 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] w-full md:w-auto' 
            : 'bg-black/20 backdrop-blur-md border border-transparent w-full md:w-auto'
        }`}
      >
        
        {/* 🌟 FIX: Removed "Rafy" text and added a Minimalist Glowing Node as Logo/Home Button */}
        <button 
          onClick={() => handleScroll('Home')}
          aria-label="Home"
          className="pl-3 pr-4 md:pr-6 flex items-center justify-center group"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.3)] transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          </div>
        </button>

        {/* Desktop Links with Sliding Pill Effect */}
        <div className="hidden md:flex items-center gap-1 pr-2">
          {links.map((link) => (
            <button 
              key={link} 
              onClick={() => handleScroll(link)}
              className="relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full group"
            >
              {active === link && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${
                active === link 
                  ? 'text-white' 
                  : 'text-gray-400 group-hover:text-white'
              }`}>
                {link}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 pr-1">
          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* 🌟 Refined Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 w-[calc(100%-2rem)] max-w-md mx-auto bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[2rem] p-3 flex flex-col gap-1 md:hidden pointer-events-auto border border-white/10 shadow-2xl"
          >
            {links.map((link) => (
              <button 
                key={link} 
                onClick={() => handleScroll(link)}
                className={`px-6 py-4 rounded-2xl text-sm font-bold transition-all text-left flex items-center justify-between ${
                    active === link 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link}</span>
                {active === link && (
                  <motion.div 
                    layoutId="mobile-active-dot"
                    className="w-1.5 h-1.5 rounded-full bg-white" 
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}