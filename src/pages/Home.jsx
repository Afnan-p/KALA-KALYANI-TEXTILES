import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import LazySection from '../components/LazySection';

// Lazy load below-the-fold components
const Collections = lazy(() => import('../components/Collections/Collections'));
const Gallery = lazy(() => import('../components/Gallery/Gallery'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const About = lazy(() => import('../components/About/About'));
const Location = lazy(() => import('../components/Location/Location'));
const Footer = lazy(() => import('../components/Footer/Footer'));

const Home = () => {
  return (
    <div className="overflow-x-hidden selection:bg-gold selection:text-maroon-deep">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-gold">Loading...</div>}>
        <LazySection height="100vh"><Collections /></LazySection>
        <LazySection height="100vh"><Gallery /></LazySection>
        <LazySection height="100vh"><Testimonials /></LazySection>
        <LazySection height="50vh"><About /></LazySection>
        <LazySection height="50vh"><Location /></LazySection>
        <LazySection height="30vh"><Footer /></LazySection>
      </Suspense>
    </div>
  );
};

export default Home;
