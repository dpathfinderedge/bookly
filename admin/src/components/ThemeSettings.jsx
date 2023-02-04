import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { themeColors } from '../assets/dummy';
import { useStateContext } from '../contexts/ContextProvider'

import { BsCheck } from 'react-icons/bs';

const ThemeSettings = () => {
  const {setThemeSettings, setMode, currentMode, currentColor, setColor} = useStateContext();

  return (
    <aside className="bg-half-transparent w-screen h-full fixed top-0 right-0 z-[999]"> {/**nav-item */}
      <div className="dark:bg-[#484B52] bg-white dark:text-gray-200 md:w-400 h-full float-right">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="buton"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl border-0 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input 
              type="radio" 
              name="theme" 
              id="light"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
          </div>
          <div className="mt-4">
            <input 
              type="radio" 
              name="theme" 
              id="dark"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex space-x-3">
            {themeColors.map((item, index) => (
              <div key={index} className="flex items-center space-x-5 relative mt-2 cursor-pointer">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer border-0 flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck className={`text-2xl text-white
                    ${item.color === currentColor ? 'block' : 'hidden'}`} 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ThemeSettings;