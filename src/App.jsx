import React from 'react';
import Login from './components/login/Login';
import Home from '../src/components/home/Home'
import Bordados from './components/pages/bordados/Bordados'
import Linhas from './components/pages/linhas/Linhas'
import Empresas from './components/pages/empresas/Empresas'
//import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/bordados' element={<Bordados />} />
          <Route path='/linhas' element={<Linhas />} />
          <Route path='/empresas' element={<Empresas />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;