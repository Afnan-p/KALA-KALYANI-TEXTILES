import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Collections from '../components/Collections/Collections';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import Location from '../components/Location/Location';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="overflow-x-hidden selection:bg-gold selection:text-maroon-deep">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <Collections />
      <Gallery />
      <Testimonials />
      <About />
      <Location />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
};

export default Home;
