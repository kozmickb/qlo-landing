import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CustomerJourney from './CustomerJourney';
import BusinessJourney from './BusinessJourney';
import DemoCTA from './DemoCTA';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Hero />
      <Features />
      <CustomerJourney />
      <BusinessJourney />
      <DemoCTA />
      <Footer />
    </>
  );
}
