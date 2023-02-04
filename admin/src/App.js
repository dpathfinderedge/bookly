import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import {
  Dashboard, Delivery, Hotels, Logout, Notifications, Profile, Rooms, Settings, Stats, Users
} from './pages';

import {
  Sidebar, Navbar, Button, ThemeSettings, UserProfile
} from './components';

import { FiSettings } from 'react-icons/fi';

import './App.css';

function App() {
  const {activeMenu, currentMode, currentColor, themeSettings, setThemeSettings} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-3xl p-3 border-0 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{background: currentColor, borderRadius: '50%'}}
            >
              <FiSettings />
            </button>
          </div>

          <div>
            {activeMenu ? (
              <div className="w-64 fixed h-full dark:bg-secondary-dark-bg bg-white z-[999] shadow-xl"> {/**sidebar */}
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
          </div>

          <div className={
            `dark:bg-main-dark-bg bg-main-bg w-full min-h-screen
            ${activeMenu
              ? 'md:ml-64'
              : 'flex-2'}`
          }> {/**h-full*/}
            <main>
              {themeSettings && <ThemeSettings />}

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
