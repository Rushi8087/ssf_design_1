import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Invest from './pages/Invest';
import Leadership from './pages/Leadership';
import SportsCast from './pages/SportsCast';
import Contact from './pages/Contact';

import { HeaderLogo } from './components/HeaderLogo';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GlobalLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
       document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen text-royal-blue font-barlow overflow-x-hidden selection:bg-royal-blue selection:text-pure-white bg-black">
      <HeaderLogo />
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <div className={`w-full bg-deep-navy ${isMenuOpen ? 'opacity-30 blur-sm brightness-50 pointer-events-none' : 'opacity-100'} transition-all duration-500 ease-out origin-top`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/sportscast" element={<SportsCast />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalLayout />
    </Router>
  );
}
