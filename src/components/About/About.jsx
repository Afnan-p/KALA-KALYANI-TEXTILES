import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../utils/animations';

const About = () => {
  return (
    <section id="about" className="bg-cream py-28 overflow-hidden">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
            <div className="absolute inset-0 border border-gold/30 overflow-hidden shadow-2xl bg-maroon-deep">
              <img 
                src="/about-bg.jpg" 
                alt="Kala Kalyani Heritage" 
                className="absolute top-0 left-0 w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none"></div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 glass-card bg-maroon-deep/90 p-4 md:p-6 backdrop-blur-xl border border-gold/40 max-w-[160px] md:max-w-[200px] z-10 shadow-2xl">
              <div className="font-poppins text-[0.65rem] md:text-xs text-gold uppercase tracking-widest text-center leading-relaxed drop-shadow-md">Est. <br/> Edappally,<br/> Kochi</div>
            </motion.div>
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-gold text-xs font-poppins tracking-[0.4em] uppercase mb-4">Our Heritage</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal mb-8">
            Our <span className="text-gold italic">Story</span>
          </h2>
          <div className="space-y-6 font-poppins text-[0.95rem] text-charcoal/80 leading-[1.9] mb-10 font-light">
            <p>For generations, Kala Kalyani has been more than just a textile showroom—we are a part of your family's most cherished memories. Rooted deeply in the rich heritage of Kerala, we take pride in weaving stories of love, tradition, and celebration.</p>
            <p>From the timeless grace of handloom Kasavu sarees that bless auspicious beginnings, to our vibrant designer collections that light up modern festivities, we are dedicated to curating the finest fabrics with uncompromising quality.</p>
            <p>Trust isn't built in a day; it is earned through years of personal relationships, honest pricing, and a genuine passion for making every customer feel truly special on their big day.</p>
          </div>
          <div className="flex gap-6 mb-10 pb-10 border-b border-gold/20">
            {[ { v: '4.5★', l: 'Rating' }, { v: '84+', l: 'Reviews' }, { v: '10+', l: 'Years' } ].map((s, i) => (
              <div key={i} className="flex-1">
                <div className="text-xl font-playfair text-gold mb-1">{s.v}</div>
                <div className="text-[0.65rem] font-poppins uppercase tracking-widest text-charcoal/60">{s.l}</div>
              </div>
            ))}
          </div>
          <button className="border border-maroon text-maroon hover:bg-gold hover:border-gold hover:text-cream transition-all font-poppins text-sm uppercase tracking-[0.2em] px-8 py-4">
            Learn More About Us →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
