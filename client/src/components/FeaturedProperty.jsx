import React from 'react';
import dummy from '../assets/hero.png';

const Card = ({ name, city, price }) => {
  return (
    <div className="flex flex-col space-y-2 shrink-0 md:shrink cursor-pointer">
      <img src={dummy} alt="/" className="w-full object-cover h-[9.5rem]" />
      <span className="font-bold">{name}</span>
      <span className="font-light">{city}</span>
      <span className="font-medium">{price}</span>
      <div className="">
        <button className="bg-primary-blue text-white border-0 p-0.5 mr-2">8.9</button>
        <span className="text-sm">Excellent</span>
      </div>
    </div>
  );
};

const FeaturedProperty = () => {

  return (
    <section className="w-full max-w-[1024px] mx-auto mt-7 md:px-0 px-4">
      <h1 className="font-bold text-xl">Home guests love</h1>
      <div className="flex justify-between items-center space-x-5 w-full mt-4 overflow-x-scroll md:overflow-hidden">
        <Card src={''} name="Aparthotel Stare Miastro" city="Madrid" price="Starting from $120" />
        <Card src={''} name="Aparthotel Stare Miastro" city="Madrid" price="Starting from $120" />
        <Card src={''} name="Aparthotel Stare Miastro" city="Madrid" price="Starting from $120" />
        <Card src={''} name="Aparthotel Stare Miastro" city="Madrid" price="Starting from $120" />
        <Card src={''} name="Aparthotel Stare Miastro" city="Madrid" price="Starting from $120" />
      </div>
    </section>
  );
};

export default FeaturedProperty;