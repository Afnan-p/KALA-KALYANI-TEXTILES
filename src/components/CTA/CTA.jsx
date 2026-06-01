import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

const CTA = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-maroon-deep via-maroon to-maroon-deep text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-gold text-xs font-poppins tracking-[0.5em] uppercase mb-6">Visit Us Today</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-cream leading-tight mb-6">
            Discover Kerala's Finest <br/><span className="text-gold italic">Textile Collections</span>
          </h2>
          <p className="font-poppins text-cream/80 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Step into a world of premium ethnic fashion — where every thread tells the story of Kerala.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918281503855" className="bg-cream hover:bg-white text-maroon font-poppins text-xs font-medium tracking-[0.2em] uppercase px-8 py-4 transition-colors shadow-xl shadow-black/20">
              📞 Call Now
            </a>
            <a href="https://wa.me/918281503855" target="_blank" rel="noreferrer" className="bg-gold hover:opacity-90 text-maroon font-poppins text-xs font-medium tracking-[0.2em] uppercase px-8 py-4 transition-colors shadow-xl shadow-black/20">
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
