import React from 'react';
import { motion } from 'framer-motion';
import { collections } from '../../data/collections';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  return (
    <section id="collections" className="bg-[#1A1210] py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_60%)]"></div>
      
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
          <motion.div variants={fadeUp} className="text-gold text-xs font-poppins tracking-[0.4em] uppercase mb-4">Our Catalogue</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-playfair text-cream">
            Dressed for Every <span className="text-gold italic">Occasion</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-px bg-gold/50 mx-auto mt-8"></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {collections.map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              whileHover="hover"
              className="group relative overflow-hidden cursor-pointer rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
              style={{ height: '420px' }}
            >
              {/* Full background image */}
              <motion.img 
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover" 
                loading="lazy"
                width="400"
                height="600"
              />
              
              {/* Gold overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-charcoal/95 transition-colors duration-500"></div>
              
              {/* Inner Gold Border Glow */}
              <div className="absolute inset-0 border border-gold/0 rounded-[20px] group-hover:border-gold/40 transition-colors duration-700 z-20 pointer-events-none"></div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-gold/90 text-[0.65rem] font-poppins tracking-[0.3em] uppercase">
                    {item.arrivals}+ Designs
                  </div>
                </div>
                
                <h3 className="font-playfair text-3xl text-cream mb-4 drop-shadow-md group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <div className="text-cream font-poppins text-xs uppercase tracking-widest flex items-center gap-2 pt-4 border-t border-cream/20 group-hover:border-gold/40 group-hover:text-gold transition-colors duration-300">
                  View Collection 
                  <motion.span variants={{ hover: { x: 8 } }} className="transition-transform duration-300">
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
