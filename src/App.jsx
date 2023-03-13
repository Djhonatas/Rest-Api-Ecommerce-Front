import React from 'react';
import Login from '../src/components/login/Login';
import Home from '../src/components/home/Home'
//import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;