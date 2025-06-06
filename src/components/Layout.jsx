import React from 'react';
import Hero from './Hero';
import BusinessJourney from './BusinessJourney';
import CustomerJourney from './CustomerJourney';
import DemoCTA from './DemoCTA';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Hero />
      <BusinessJourney />
      <CustomerJourney />
      <DemoCTA />
      <Footer />
    </>
  );
}
