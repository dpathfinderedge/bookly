import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full max-w-[1024px] mx-auto my-7 md:px-0 px-4">
      <div className="flex flex-col md:flex-row md:justify-between space-x-0 md:space-x-16 space-y-4 md:space-y-0 w-full">
        <div className="w-full"> {/**mb-4 md:mb-0*/}
          <NavLink to="/">
            <h1 className="text-2xl font-bold">bookly<span className="text-blue-800">.</span></h1>
          </NavLink>
          <h3>This is the team that specifies in making sure lorem ipsum dolor sit amet consectitur adipiscing elit.</h3>
        </div>
        <div className="w-full">
          <h1 className="font-bold">Services</h1>
          <ul>
            {['Travel Booking', 'Flight Booking', 'Car Booking', 'Fivestar Hotel', 'Traveling'].map((item, index) => (
              <li key={item + index} className="my-2 cursor-pointer text-sm hover:font-semibold">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h1 className="font-bold">Support</h1>
          <ul>
            {['Account', 'Legal', 'Contact', 'Terms & Condition', 'Privacy & Policy'].map((item, index) => (
              <li key={item + index} className="my-2 cursor-pointer text-sm hover:font-semibold">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h1 className="font-bold">Business</h1>
          <ul>
            {['Success', 'About Us', 'Blog', 'Information', 'Travel Guide'].map((item, index) => (
              <li key={item + index} className="my-2 cursor-pointer text-sm hover:font-semibold">{item}</li>
            ))}
          </ul>
        </div>  
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-3 space-x-0 md:space-y-0 space-y-2 my-5">
        <span className="text-sm">&copy; 2023 Bookly. All rights reserved</span>
        <span className="hidden md:block">|</span>
        <span className="text-sm">
          Built by <a href="http://twitter.com/0xrasheed" target="_blank" rel="noopener noreferrer">Rasheed</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;