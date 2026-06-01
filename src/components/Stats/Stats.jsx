import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { Star, Users, Award, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';

const CountUpStat = ({ end, suffix }) => {
  const { count, ref } = useCountUp(end);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const statsData = [
    { value: 84, suffix: '+', label: 'Google Reviews', icon: Star },
    { value: 1000, suffix: '+', label: 'Happy Customers', icon: Users },
    { value: 10, suffix: '+', label: 'Years of Trust', icon: Award },
    { value: 4, suffix: '.5★', label: 'Google Rating', icon: BadgeCheck }
  ];

  return (
    <section className="relative py-16 bg-cream overflow-hidden z-20">
      {/* Luxury Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,1)_2px,transparent_2px)] bg-[length:30px_30px] opacity-[0.03]"></div>

      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.div variants={fadeUp} className="text-gold text-[0.65rem] font-poppins tracking-[0.4em] uppercase mb-3">
            Trusted By Thousands of Families
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-playfair text-charcoal">
            A Legacy of <span className="text-gold italic">Trust & Elegance</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-12 h-px bg-gold/50 mx-auto mt-6"></motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                 className="group relative bg-charcoal border border-gold/15 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2.5 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
               >
                 {/* Icon */}
                 <div className="mb-4 text-gold transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                   <Icon size={32} strokeWidth={1.25} />
                 </div>
                 
                 {/* Number */}
                 <div className="font-playfair text-4xl md:text-5xl text-gold mb-2 drop-shadow-sm">
                   <CountUpStat 
                     end={stat.value} 
                     suffix={
                       <span className="text-gold/70 text-2xl md:text-3xl relative -top-2">
                         {stat.suffix}
                       </span>
                     } 
                   />
                 </div>
                 
                 {/* Label */}
                 <div className="font-poppins text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-cream/70 font-medium group-hover:text-cream transition-colors duration-300">
                   {stat.label}
                 </div>
               </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;
