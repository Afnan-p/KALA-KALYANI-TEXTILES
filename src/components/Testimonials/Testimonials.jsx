import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { reviews } from '../../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight, Users, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-cream py-16 md:py-28 border-b border-gold/10 relative overflow-hidden">
      {/* Subtle Background Patterns & Luxury Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_2px,transparent_2px)] bg-[length:40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.div variants={fadeUp} className="text-gold text-xs font-poppins tracking-[0.4em] uppercase mb-4">Customer Stories</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal">
            Loved by <span className="text-gold italic">Kerala Families</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-px bg-gold/50 mx-auto mt-8"></motion.div>
        </motion.div>

        {/* Trust Strip Removed */}

        <div className="relative px-2 md:px-16">
          {/* Custom Navigation Arrows */}
          <button className="swiper-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-gold/40 bg-cream/90 backdrop-blur-md flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-deep transition-all duration-300 hidden md:flex cursor-pointer hover:scale-110 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
            <ChevronLeft size={28} strokeWidth={1.5} className="ml-[-2px]" />
          </button>
          
          <button className="swiper-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-gold/40 bg-cream/90 backdrop-blur-md flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-deep transition-all duration-300 hidden md:flex cursor-pointer hover:scale-110 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
            <ChevronRight size={28} strokeWidth={1.5} className="mr-[-2px]" />
          </button>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={40}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12 pt-10"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="bg-charcoal rounded-[24px] overflow-hidden p-8 md:p-12 h-[360px] flex flex-col relative transition-all duration-500 ease-out group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] border border-gold/10 hover:border-gold/50 cursor-grab active:cursor-grabbing transform-gpu">
                    
                    {/* Oversized Quote Icon Background */}
                    <div className="absolute -top-4 -right-4 text-gold/5 transform group-hover:text-gold/15 transition-all duration-700 pointer-events-none">
                      <Quote size={140} strokeWidth={0.5} />
                    </div>

                    {/* Rating row */}
                    <div className="flex items-center gap-1 mb-8 relative z-10">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={16} className="text-gold fill-gold drop-shadow-md" />
                      ))}
                      <span className="ml-3 font-poppins text-[0.65rem] text-cream/60 tracking-widest uppercase font-medium bg-white/5 px-2 py-1 rounded-sm">Verified</span>
                    </div>
                    
                    {/* Review Text */}
                    <div className="flex-1 overflow-hidden relative z-10 mb-8">
                      <p className="font-poppins font-light leading-[1.8] line-clamp-5 transition-colors duration-500 text-[0.95rem] text-cream/80 group-hover:text-cream">
                        "{r.text}"
                      </p>
                    </div>
                    
                    {/* Customer Avatar & Info */}
                    <div className="flex items-center gap-5 relative z-10 pt-8 border-t border-gold/10 mt-auto">
                      {/* Realistic Avatar Image via pravatar API based on name */}
                      <div className="relative">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${r.name.replace(/\s+/g, '')}`} 
                          alt={r.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold shadow-md shrink-0 transition-colors duration-300"
                          loading="lazy"
                          width="150"
                          height="150"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-gold text-maroon-deep rounded-full p-1 shadow-md">
                          <BadgeCheck size={12} strokeWidth={3} />
                        </div>
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <div className="font-poppins font-semibold tracking-wider mb-1 truncate transition-colors duration-500 text-cream group-hover:text-gold text-sm md:text-base">
                          {r.name}
                        </div>
                        <div className="font-poppins text-[0.65rem] tracking-[0.25em] text-cream/50 uppercase truncate">
                          {r.loc}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
