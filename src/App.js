import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import About from './components/About';
import Upload from './components/Upload';
import Admin from './components/Admin';
import Adminlogin from './components/Adminlogin';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/admin" element={<Admin />} />
      

      </Routes>
      <Contact/>
    </Router>
    
    </>
  );
}

export default App;
