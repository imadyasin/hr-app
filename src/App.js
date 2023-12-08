import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>

      <Navbar/>
    
      <Routes>
      <Route path="/" element={<Mainpage />} />

      </Routes>
      <Contact/>

    </Router>
    
    
  );
}

export default App;
