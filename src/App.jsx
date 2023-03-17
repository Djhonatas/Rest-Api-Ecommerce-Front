import React from 'react';
import Login from './components/pages/login/Login';
import Home from '../src/components/home/Home'
import Bordados from './components/pages/bordados/Bordados'
import Linhas from './components/pages/linhas/Linhas'
import Empresas from './components/pages/empresas/EmpresasForm'
import Signup from './components/pages/signup/Signup';
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
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;