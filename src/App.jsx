import { Route, Routes, useLocation } from 'react-router-dom';
import AppLayout from './componants/applayout/AppLayout';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/home/Home';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </>
    </>
  );
}

export default App;
