import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Internship from './components/Internship';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
