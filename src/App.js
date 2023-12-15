import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Contact/>
    </Router>
    
    </>
  );
}

export default App;
