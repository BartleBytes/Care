import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/Hero';





function App() {



  return (
    <Router>
      <Navigation />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

     
      <Footer  />
    </Router>
   
  );
}

export default App;
