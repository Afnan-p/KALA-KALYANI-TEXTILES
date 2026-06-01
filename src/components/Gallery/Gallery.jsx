import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../data/gallery';
import { staggerContainer, fadeUp } from '../../utils/animations';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gradient-to-b from-[#FDFBF7] to-cream py-28 relative border-t border-gold/10">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.div variants={fadeUp} className="text-gold text-xs font-poppins tracking-[0.4em] uppercase mb-4">Store Gallery</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal">
            Inside <span className="text-gold italic">Kala Kalyani</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-px bg-gold mx-auto mt-8"></motion.div>
        </motion.div>

        {/* Pinterest-style Masonry Layout with 20px Spacing */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.15 }}
              className={`relative overflow-hidden break-inside-avoid w-full ${img.aspect} cursor-pointer group rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-700 bg-charcoal`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100" 
                loading="lazy"
              />

              {/* Dark Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Content Reveal */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30">
                <h3 className="font-playfair text-2xl text-cream mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-md">
                  {img.title}
                </h3>
                <span className="font-poppins text-[0.7rem] font-medium tracking-[0.2em] text-gold uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  View Collection <span className="text-lg leading-none mb-1">↗</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luxury Gold Divider at the absolute bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center translate-y-1/2 z-20">
        <div className="w-full max-w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute w-4 h-4 rotate-45 bg-cream border border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
