import React from 'react';
import { NavLink } from 'react-router-dom';
// import { RiNotification3Line } from 'react-icons/ri';
// import { MdKeyboardArrowDown } from 'react-icons/md'; 
import avatar from '../assets/avatar.png';


const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[100] w-full h-16 md:h-18 bg-white drop-shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-0 w-full h-full max-w-[1024px] mx-auto"> {/**1200px */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">bookly<span className="text-blue-800">.</span></h1>
        </NavLink>

        <div className="md:flex space-x-2 hidden">
          <button
            type="button"
            onClick={() => {}}
            style={{ color: '#03C9D7' }}
            className="relative text-lg rounded-full p-3 hover:bg-light-gray"
          >
            <span style={{ background: '#03C9D7' }} className="absolute inline-flex rounded-full  h-2 w-2 right-2 top-2" />
            {/* {RiNotification3Line} */}
            🔔
          </button>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => {}}>
            <img src={avatar} alt="profile" className="w-8 h-8 object-cover rounded-full" />
            <p className="text-14">
              <span className="text-gray-400">Hi,</span> {' '}
              <span className="text-gray-400 font-bold">Rasheed</span>
            </p>
            <p>▼</p>
            {/* <MdKeyboardArrowDown className="text-gray-400 text-14" /> */}
          </div>
        </div>
        <div className="hidden">
          <button>Sign in/Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;