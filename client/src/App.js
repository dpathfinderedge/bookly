import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, List, Hotel, SignIn, SignUp } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="tracking-wide w-full h-full overflow-hidden">
        {/* <Navbar /> */}
        <main className=""> {/**w-full pt-16 md:pt-18 */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/hotels" element={<List />} />
            <Route exact path="/hotel" element={<Hotel />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route path="*" element={<>Oops, that page cannot not be found 😞</>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
