import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Notification from './Notification';
import UserProfile from './UserProfile';
import avatar from '../assets/avatar.png';

const NavButton = ({ icon, customFunc, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 border-0 hover:bg-light-gray"
  >
    <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Navbar = () => {
  const {currentColor, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    // checks for the browser's screen size and updates the screenSize state.
    const handleResize = () => setScreenSize(window.innerWidth);

    // tracks all the resize options and invoke the handleResize function.
    window.addEventListener('resize', handleResize);
    handleResize();

    // removes eventListener to avoid memory leakage.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <nav className="fixed md:static dark:bg-main-dark-bg bg-white w-full z-[1]"> {/**navbar */}
      <div className="flex justify-between relative p-2"> {/**md:ml-6 */}
        <NavButton customFunc={() => 
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)} icon={<AiOutlineMenu />} color={currentColor} 
        />

        <div className="flex space-x-2">
          <NavButton customFunc={() => 
            handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} dotColor="#03C9D7"
          />
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img 
              src={avatar} 
              alt="user" 
              className="rounded-full w-8 h-8 object-cover"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Admin</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
          
          {isClicked.notification && (<Notification />)}
          {isClicked.userProfile && (<UserProfile />)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;