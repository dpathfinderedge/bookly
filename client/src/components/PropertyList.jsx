import React from 'react';
import dummy from '../assets/hero.png';

const Card = ({ src, heading, parag }) => {
  return (
    <div className="overflow-hidden shrink-0 md:shrink w-[12rem] md:w-full rounded-tr-xl rounded-tl-xl cursor-pointer"> {/**flex-[1] => same width */}
      <img src={dummy} alt="/" className="w-full h-[9.5rem] object-cover" />
      <div className="">
        <h1 className="font-semibold text-lg">{heading}</h1>
        <h3 className="font-light text-sm">{parag}</h3>
      </div>
    </div>
  );
};

const PropertyList = () => {

  return (
    <section className="w-full max-w-[1024px] mx-auto mt-7 md:px-0 px-4">
      <h1 className="font-bold text-xl">Browse by property type</h1>
      <div className="flex justify-between items-center space-x-5 w-full mt-4 overflow-x-scroll md:overflow-hidden">
        <Card src={''} heading="Hotels" parag="233 Hotels" />
        <Card src={''} heading="Apartments" parag="2331 Hotels" />
        <Card src={''} heading="Resorts" parag="233 Hotels" />
        <Card src={''} heading="Villas" parag="233 Hotels" />
        <Card src={''} heading="Cabins" parag="263 Hotels" />
      </div>
    </section>
  );
};

export default PropertyList;