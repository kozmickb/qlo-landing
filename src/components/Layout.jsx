import React from 'react';
import Header from './Header';
import Hero from './Hero';
import BusinessJourney from './BusinessJourney';
import CustomerJourney from './CustomerJourney';
import DemoCTA from './DemoCTA';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <BusinessJourney />
      <CustomerJourney />
      <DemoCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
