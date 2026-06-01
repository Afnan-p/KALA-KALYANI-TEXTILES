import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Collections', 'Gallery', 'About', 'Reviews', 'Contact'];

  return (
    <nav className={`fixed w-full z-[100] top-0 transition-all duration-500 ${scrolled ? 'bg-black/30 backdrop-blur-xl border-b border-gold/20 py-3 shadow-2xl' : 'bg-gradient-to-b from-black/50 to-transparent pt-3 pb-4'}`}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex justify-between items-center">
        <a href="#" className="flex items-center group z-50 cursor-pointer">
          <img src="/logo.webp" alt="Kala Kalyani Logo" className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300 -mr-2 md:-mr-4" />
          <div className="flex flex-col items-center justify-center pt-1">
            <span className="font-playfair font-bold text-xl md:text-2xl tracking-widest text-cream drop-shadow-md group-hover:text-gold transition-colors duration-500 mb-[2px]">KALA KALYANI</span>
            <div className="flex items-center gap-2 w-full justify-center">
              <div className="h-[1px] w-4 bg-gold"></div>
              <span className="text-[0.6rem] font-poppins tracking-[0.4em] text-gold uppercase">Textiles</span>
              <div className="h-[1px] w-4 bg-gold"></div>
            </div>
          </div>
        </a>
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link font-poppins text-[0.7rem] tracking-[0.2em] uppercase text-cream/90 hover:text-gold transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="https://wa.me/918281503855" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-gold/50 bg-black/20 backdrop-blur-md hover:bg-gold hover:text-maroon-deep text-gold font-poppins text-xs tracking-widest uppercase px-6 py-3 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
        <button className="md:hidden text-cream hover:text-gold transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-gold/30 overflow-hidden shadow-2xl">
            <div className="flex flex-col items-center py-8 gap-8">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-playfair italic text-2xl text-cream hover:text-gold transition-colors">
                  {link}
                </a>
              ))}
              <a href="https://wa.me/918281503855" className="mt-4 flex items-center gap-2 bg-gold text-maroon-deep font-poppins text-sm tracking-widest uppercase px-8 py-4 w-11/12 justify-center shadow-lg">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
