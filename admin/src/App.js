import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import {
  Dashboard, Delivery, Hotels, Logout, New, Notifications, Profile, Rooms, Settings, SingleUser, Stats, Users
} from './pages';

import {
  Sidebar, Navbar, Button, ThemeSettings, UserProfile
} from './components';

import { FiSettings } from 'react-icons/fi';

import './App.css';

// 20.4.48 ==> ^19.4.50

function App() {
  const {activeMenu, currentMode, currentColor, themeSettings, setThemeSettings} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">
          <div className="fixed bottom-4 right-4 z-[10000]">
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
              <div className="w-64 fixed h-full dark:bg-secondary-dark-bg bg-white z-[10000000] shadow-xl">
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
            <main className="overflow-hidden">
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* <Route path="/">
                  <Route index element={<Dashboard />} />
                  <Route path="logout" index element={<Logout />} />
                  <Route path="users">
                    <Route index element={<Users />} />
                    <Route path=":userId" element={<>Single</>} />
                    <Route path="new" element={<>New</>} />
                  </Route>


                  <Route path="hotels" index element={<Hotels />} />
                  <Route path="rooms" index element={<Rooms />} />
                  <Route path="delivery" index element={<Delivery />} />
                  <Route path="stats" index element={<Stats />} />
                  <Route path="notifications" index element={<Notifications />} />
                  <Route path="settings" index element={<Settings />} />
                  <Route path="profile" index element={<Profile />} />
                </Route> */}

                
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<SingleUser />} />
                <Route path="/users/new" element={<New />} />
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
