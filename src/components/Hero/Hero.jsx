import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../../utils/animations';
import { MapPin, Star, Award } from 'lucide-react';

const Hero = () => {
  const particles = Array.from({ length: 20 });
  
  // Custom text reveal animation for luxury heading
  const textReveal = {
    hidden: { opacity: 0, y: 100, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] md:min-h-[92vh] lg:min-h-[95vh] flex items-center pt-32 pb-20 md:pt-24 md:pb-0 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center md:bg-fixed transform scale-105 md:motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 woven-pattern opacity-10 mix-blend-overlay"></div>
      
      {/* Floating Gold Particles - Hidden on mobile for performance */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/40 blur-[1px] hidden md:block"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`
          }}
          animate={{ y: [0, -60, 0], opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 8 + Math.random() * 15, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Content */}
        <motion.div className="md:col-span-7 lg:col-span-6 -mt-8 md:-mt-16 lg:-mt-24 flex flex-col items-center md:items-start text-center md:text-left" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-gold/30 bg-black/40 backdrop-blur-md px-5 py-2 rounded-none mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-gold text-[0.65rem] font-poppins tracking-[0.4em] uppercase">Trusted Kerala Textile Brand</span>
          </motion.div>
          
          <div className="overflow-hidden mb-1">
            <motion.h1 variants={textReveal} className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[5.5rem] text-cream font-playfair tracking-tight">
              Where Tradition
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h1 variants={textReveal} className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[5.5rem] text-gold font-playfair italic pr-0 md:pr-4">
              Meets Trend.
            </motion.h1>
          </div>
          
          <motion.p variants={fadeUp} className="text-cream/70 font-poppins text-sm sm:text-base md:text-lg max-w-lg leading-[1.8] mb-8 tracking-wide font-light mx-auto md:mx-0">
            Premium Collections for Men, Women & Kids in the Heart of Kochi. Experience the epitome of luxury ethnic fashion.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto px-4 sm:px-0">
            <a href="#collections" className="w-full sm:w-auto group relative overflow-hidden bg-gold text-maroon-deep font-poppins text-xs font-semibold tracking-[0.25em] uppercase px-8 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-center">
              <span className="relative z-10">Explore Collections</span>
              <div className="absolute inset-0 bg-cream/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </a>
            <a href="#contact" className="w-full sm:w-auto group border border-cream/30 bg-cream/5 backdrop-blur-sm text-cream font-poppins text-xs font-medium tracking-[0.25em] uppercase px-8 py-5 hover:bg-cream/10 hover:border-gold/50 transition-all duration-300 text-center">
              Contact Us
            </a>
          </motion.div>
          
          {/* Luxury Trust Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-10 pt-8 border-t border-gold/20 w-full">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-gold fill-gold drop-shadow-md" />)}
              </div>
              <div className="font-poppins text-xs text-cream/90 tracking-wide">
                <span className="text-gold font-bold">4.5</span> Rating
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gold/30"></div>
            <div className="flex items-center gap-3 font-poppins text-xs text-cream/90 tracking-wide">
              <Award size={18} className="text-gold" />
              <span><span className="text-gold font-bold">84+</span> Reviews</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gold/30"></div>
            <div className="flex items-center gap-2 font-poppins text-xs text-cream/90 tracking-wide">
              <MapPin size={16} className="text-gold" />
              <span>Edappally, Kochi</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Luxury Showcase Panel */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5 lg:col-span-6 relative mt-12 md:mt-0 block">
          <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full opacity-30 mix-blend-screen md:animate-pulse"></div>
          
          <motion.div 
            className="w-full lg:w-[90%] xl:w-[85%] mx-auto relative aspect-[3/4] p-2 bg-black/40 backdrop-blur-xl border border-gold/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            style={{ perspective: 1000, scale: 1.05 }}
          >
            <div className="absolute inset-0 border border-gold/10 m-3 pointer-events-none z-20"></div>
            
            <div className="w-full h-full relative overflow-hidden">
              <img 
                src="/hero-card.webp" 
                alt="Premium Kerala Saree Bridal Collection" 
                className="w-full h-full object-cover transform scale-105"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
                <span className="font-playfair italic text-gold text-3xl mb-3 drop-shadow-xl">Bridal Couture</span>
                <div className="w-12 h-px bg-gold mb-3"></div>
                <span className="font-poppins text-cream/80 text-[0.65rem] tracking-[0.3em] uppercase">Premium Fashion Showcase</span>
              </div>
            </div>
            

          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden lg:flex">
        <span className="text-gold/70 font-poppins text-[0.55rem] tracking-[0.3em] uppercase">Discover</span>
        <motion.div className="w-[1px] bg-gradient-to-b from-gold to-transparent" animate={{ height: [0, 50, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
      </div>
    </section>
  );
};

export default Hero;
