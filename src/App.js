import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navbars/Navbar';
import Crops from './Components/Pages/Crops/Crops';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Farming from './Components/Pages/Farming/Farming';
import Internship from './Components/Pages/Internship/Internship';
import Footer from './Components/Navbars/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Components/i18n/i18n';
import InternshipApply from './Components/Pages/Internship/InternsApply';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/apply" element={<InternshipApply />} />
          <Route path="/crops" element={<Crops />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
