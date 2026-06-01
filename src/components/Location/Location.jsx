import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { fadeLeft, fadeRight } from '../../utils/animations';

const Location = () => {
  return (
    <section id="contact" className="bg-[#F7F1E8] py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Details */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col justify-center">
          <div className="text-gold text-xs font-poppins tracking-[0.4em] uppercase mb-4">Find Us</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-charcoal mb-10">
            Visit Our <span className="text-gold italic">Showroom</span>
          </h2>
          
          <div className="space-y-8 mb-12 bg-cream p-8 border border-gold/20 shadow-[0_15px_50px_rgba(212,175,55,0.05)]">
            {/* Address */}
            <div className="flex gap-5 items-start group">
              <div className="text-gold mt-1 p-3 bg-maroon-deep border border-gold/30 shadow-md group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-poppins font-semibold text-[0.7rem] text-charcoal/60 mb-2 uppercase tracking-[0.2em]">Address</div>
                <h4 className="font-playfair text-xl text-maroon-deep mb-2">Kala Kalyani Textiles</h4>
                <p className="font-poppins text-sm text-charcoal/80 leading-relaxed font-light">
                  Near Campion School Bus Stop<br />
                  Ponekkara Road, Edappally<br />
                  Kochi, Kerala 682024
                </p>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex gap-5 items-start group">
              <div className="text-gold mt-1 p-3 bg-maroon-deep border border-gold/30 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-poppins font-semibold text-[0.7rem] text-charcoal/60 mb-2 uppercase tracking-[0.2em]">Working Hours</div>
                <p className="font-poppins text-sm text-charcoal/80 font-light">Open Daily · 9:30 AM to 8:30 PM</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex gap-5 items-start group">
              <div className="text-gold mt-1 p-3 bg-maroon-deep border border-gold/30 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-poppins font-semibold text-[0.7rem] text-charcoal/60 mb-2 uppercase tracking-[0.2em]">Phone</div>
                <a href="tel:+918281503855" className="font-poppins text-lg text-maroon-deep font-medium hover:text-gold transition-colors">
                  082815 03855
                </a>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="https://www.google.com/maps/search/?api=1&query=Kala+Kalyani+Textiles,+Ponekkara+Road,+Edappally,+Kochi" target="_blank" rel="noreferrer" className="flex-1 bg-maroon-deep text-cream font-poppins text-[0.7rem] font-medium tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 hover:bg-maroon hover:-translate-y-1 hover:shadow-lg text-center flex items-center justify-center gap-2">
              <MapPin size={16} /> Get Directions
            </a>
            <a href="tel:+918281503855" className="flex-1 bg-cream border border-gold text-charcoal font-poppins text-[0.7rem] font-medium tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 hover:bg-gold/10 hover:-translate-y-1 hover:shadow-lg text-center flex items-center justify-center gap-2">
              <Phone size={16} /> Call Now
            </a>
            <a href="https://wa.me/918281503855" target="_blank" rel="noreferrer" className="w-full bg-gold border border-gold/50 text-maroon-deep font-poppins text-[0.7rem] font-bold tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-lg text-center flex items-center justify-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </motion.div>
        
        {/* Right Side: Embedded Map */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[650px] w-full p-2 bg-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gold/20 rounded-sm">
          <div className="absolute -inset-4 bg-gold/10 blur-xl -z-10 rounded-full"></div>
          
          <div className="w-full h-full relative overflow-hidden border border-gold/10">
            {/* The Google Map Iframe */}
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Kala%20Kalyani%20Textiles,%20Near%20Campion%20School%20Bus%20Stop,%20Ponekkara%20Road,%20Edappally,%20Kochi,%20Kerala%20682024&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="absolute inset-0 grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-700"
              title="Kala Kalyani Textiles Map Location"
            ></iframe>
            
            {/* Overlay Gradient for Luxury Styling */}
            <div className="absolute inset-0 border border-gold/20 pointer-events-none mix-blend-overlay"></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Location;
