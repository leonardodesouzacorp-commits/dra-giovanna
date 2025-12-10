import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <a href="#inicio" className="z-50 relative">
          <Logo className="h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide text-text-main transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contato" 
            className="px-6 py-2 bg-gold text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-gold-dark transition-colors shadow-md"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Toggle - Only visible when menu is closed */}
        <button 
          className="md:hidden z-50 text-text-main p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>

        {/* Mobile Nav Overlay - Z-Index higher than header to cover it */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-background z-[60] flex flex-col items-center justify-center min-h-screen"
            >
              {/* Close Button positioned absolutely in the overlay */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-text-main hover:text-gold transition-colors"
                aria-label="Fechar menu"
              >
                <X size={32} />
              </button>

              <nav className="flex flex-col items-center gap-8">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a 
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-3xl font-light text-text-main hover:text-gold transition-colors tracking-wide"
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a 
                    href="#contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-10 py-4 bg-gold text-white text-lg font-medium uppercase tracking-widest rounded-full shadow-lg"
                  >
                    Agendar Consulta
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};