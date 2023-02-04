import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../assets/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, screenSize, setActiveMenu, currentColor} = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center space-x-2 pl-4 py-2 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center space-x-2 pl-4 py-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <aside className="overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10 w-full h-full">
      {activeMenu && (<>
        <div className="flex justify-between items-center mt-4">
          <Link to="/" onClick={handleCloseSidebar}
            className="flex items-center space-x-3 text-xl font-extrabold tracking-tight"
          >
            <h1>
              <span className="dark:text-white text-black">bookly</span><span className="text-blue dark:text-white">.</span>
            </h1>
          </Link>
          <button
            type="button" 
            onClick={() => setActiveMenu(false)}
            className="text-xl rounded-full p-3 border-0 hover:bg-light-gray  block md:hidden"
          >
            <MdOutlineCancel />
          </button>  
        </div>
        <div className="mt-5">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 ml-3 my-2 uppercase">{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  })}
                  className={({ isActive }) => isActive ? activeLink : normalLink }
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </aside>
  );
};

export default Sidebar;