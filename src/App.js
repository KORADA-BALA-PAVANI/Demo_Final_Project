import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Nav_Foot/Navbar'; // Import your Navbar component
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Colab from './pages/Colab';
import Contactus from './pages/Contactus';
import './pages/assets/style.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Use the Navbar component here */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/colab" element={<Colab />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
