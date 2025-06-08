import StickyHeader from './StickyHeader';
import React from 'react';
import Hero from './Hero';
import BusinessJourney from './BusinessJourney';
import CustomerJourney from './CustomerJourney';
import StickyCTA from './StickyCTA';
import Testimonials from './Testimonials';
import DemoCTA from './DemoCTA';
import EarlyAccess from './EarlyAccess';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SmoothScroll from './SmoothScroll';


export default function Layout() {
  return (
    <>
      <StickyHeader />
      <Hero />
      <BusinessJourney />
      <CustomerJourney />
      <StickyCTA />
      <Testimonials />
      <DemoCTA />
      <EarlyAccess />
      <Footer />
      <ScrollToTop />
      <SmoothScroll />
    
    </>
  );
}
