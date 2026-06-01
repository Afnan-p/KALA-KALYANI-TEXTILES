import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { Award, Gem, ShieldCheck } from 'lucide-react';

const Features = () => {
  const promiseData = [
    {
      icon: Award,
      title: "Heritage & Craftsmanship",
      desc: "Sourced exclusively from the finest master weavers of Kerala and Kanchipuram."
    },
    {
      icon: Gem,
      title: "Curated Premium Collections",
      desc: "Meticulously selected designs that define luxury ethnic fashion and elegance."
    },
    {
      icon: ShieldCheck,
      title: "Trusted By Families",
      desc: "Over a decade of delivering uncompromising quality and personal styling."
    }
  ];

  return (
    <section className="relative py-20 bg-maroon-deep overflow-hidden">
      {/* Subtle background luxury pattern & vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.div variants={fadeUp} className="text-gold text-[0.65rem] font-poppins tracking-[0.4em] uppercase mb-4">
            Why Choose Us
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-playfair text-cream tracking-wide">
            The Kala Kalyani <span className="text-gold italic">Promise</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-70"></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {promiseData.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-charcoal/95 backdrop-blur-md border border-gold/20 rounded-2xl p-10 lg:p-14 transition-all duration-700 hover:bg-charcoal hover:border-gold/50 hover:-translate-y-[6px] hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center text-center"
              >
                {/* Subtle gold glow behind icon */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-20 bg-gold/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="mb-8 text-gold transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-700 relative z-10">
                  <Icon size={48} strokeWidth={1} />
                </div>
                
                <h3 className="font-playfair text-2xl text-cream mb-5 group-hover:text-gold transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="font-poppins text-[0.9rem] text-cream/70 font-light leading-relaxed group-hover:text-cream/90 transition-colors duration-500">
                  {item.desc}
                </p>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-[-1px] right-[-1px] w-full h-full border-t-[1px] border-r-[1px] border-gold opacity-0 group-hover:opacity-40 transition-opacity duration-700 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
