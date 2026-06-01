import React from 'react';
import { MessageCircle, MapPin, Phone, Instagram, Facebook, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/30 pt-24 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info Column */}
          <div className="lg:pr-6">
            <a href="#home" className="flex items-center gap-4 mb-6 group inline-flex">
              <img src="/logo.png" alt="Kala Kalyani Logo" className="h-16 w-auto" />
              <div className="flex flex-col items-start">
                <span className="font-playfair font-bold text-2xl tracking-widest text-gold drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-300">KALA KALYANI</span>
                <span className="text-[0.6rem] font-poppins tracking-[0.4em] text-cream/70 uppercase mt-1 group-hover:text-gold transition-colors duration-300">Textiles</span>
              </div>
            </a>
            
            <p className="font-poppins text-[0.85rem] font-light text-cream/80 leading-relaxed mb-8">
              Celebrating tradition through fashion. Kerala's trusted destination for premium ethnic wear and modern collections.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-col gap-2 mb-8 border-l-2 border-gold/30 pl-4 py-1">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold fill-gold" />)}
                </div>
                <span className="font-poppins text-xs font-medium text-gold/90">4.5 Google Rating</span>
              </div>
              <div className="font-poppins text-xs text-cream/60 tracking-wider">84+ Verified Reviews</div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-500">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/19jBWUp21d/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-500">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/918281503855" target="_blank" rel="noreferrer" className="w-full max-w-[40px] h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-500">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-gold/50"></span>
            </h4>
            <div className="flex flex-col gap-4 font-poppins text-[0.85rem] mt-4">
              {['Home', 'Collections', 'Gallery', 'About', 'Reviews', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-cream/70 hover:text-gold hover:translate-x-1 tracking-wide transition-all duration-300 w-fit">
                  {l}
                </a>
              ))}
            </div>
          </div>
          
          {/* Collections Column */}
          <div>
            <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide relative inline-block">
              Collections
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-gold/50"></span>
            </h4>
            <div className="flex flex-col gap-4 font-poppins text-[0.85rem] text-cream/70 mt-4">
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Women's Wear</a>
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Men's Wear</a>
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Kids Collection</a>
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Bridal Wear</a>
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Festival Specials</a>
              <a href="#collections" className="hover:text-gold hover:translate-x-1 transition-all duration-300 w-fit">Kasavu Sarees</a>
            </div>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-gold/50"></span>
            </h4>
            <div className="flex flex-col gap-5 font-poppins text-[0.85rem] text-cream/70 mt-4">
              <a href="https://maps.app.goo.gl/EdappallyCampionKalaKalyani" target="_blank" rel="noreferrer" className="flex gap-4 group">
                <span className="text-gold mt-1 group-hover:scale-110 group-hover:text-cream transition-all duration-300 shrink-0"><MapPin size={18} /></span>
                <span className="group-hover:text-gold transition-colors duration-300 leading-relaxed">
                  Near Campion School Bus Stop<br/>Ponekkara Road, Edappally<br/>Kochi, Kerala 682024
                </span>
              </a>
              <a href="tel:+918281503855" className="flex gap-4 group items-center">
                <span className="text-gold group-hover:scale-110 group-hover:text-cream transition-all duration-300 shrink-0"><Phone size={18} /></span>
                <span className="group-hover:text-gold transition-colors duration-300 font-medium tracking-wider">082815 03855</span>
              </a>
              <a href="https://wa.me/918281503855" target="_blank" rel="noreferrer" className="flex gap-4 group items-center">
                <span className="text-gold group-hover:scale-110 group-hover:text-cream transition-all duration-300 shrink-0"><MessageCircle size={18} /></span>
                <span className="group-hover:text-gold transition-colors duration-300 font-medium">WhatsApp Us</span>
              </a>
              <div className="flex gap-4 items-center">
                <span className="text-gold shrink-0"><Clock size={18} /></span>
                <span>Open Daily · 9:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom Strip */}
        <div className="border-t border-gold/15 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-poppins text-xs text-cream/40 tracking-wider">
            © 2025 Kala Kalyani Textiles. All Rights Reserved.
          </div>
          <div className="font-poppins font-medium text-[0.65rem] tracking-[0.25em] text-gold uppercase text-center">
            Kerala's Destination for Timeless Fashion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
