import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This is assuming you're not importing it elsewhere globally
import './App.css'; // Make sure the path is correct based on your folder structure

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import SayHi from './components/SayHi';
import Portfolio from './components/Portfolio';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/say-hi/" element={<SayHi />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<About />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
