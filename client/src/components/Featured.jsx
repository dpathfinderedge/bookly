import React from 'react';
import dummy from '../assets/hero.png';

const Card = ({heading, desc}) => {
  return (
    <div className="relative text-white overflow-hidden shrink-0 md:shrink w-[12rem] md:w-full md:h-[16rem] h-[12rem] rounded-xl">
      <img src={dummy} alt="/" className="w-full h-full object-cover" />
      <div className="absolute bottom-2 md:bottom-5 p-2">
        <h1 className="font-bold text-xl">{heading}</h1>
        <h3 className="font-bold">{desc}</h3>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <section className="w-full max-w-[1024px] mx-auto md:px-0 px-4 mt-24">  
      <div className="flex justify-between items-center space-x-6 w-full z-[1] overflow-x-scroll md:overflow-hidden">
        <Card heading="Dublin" desc="123 properties" />
        <Card heading="Reno" desc="533 properties" />
        <Card heading="Austin" desc="532 properties" />
      </div>
    </section>
  );
};

export default Featured;