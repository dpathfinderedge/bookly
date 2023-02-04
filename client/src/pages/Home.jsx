import React from 'react';
import { Featured, FeaturedProperty, Footer, Hero, Navbar, Newsletter, PropertyList } from '../components';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Featured />
      <PropertyList />
      <FeaturedProperty />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;