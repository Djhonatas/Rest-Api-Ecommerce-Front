import React from 'react';
import './NavBar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <button className="navbar-button navbar-button--bordered">Bordados</button>
        <button className="navbar-button navbar-button--bordered">Linhas</button>
        <button className="navbar-button navbar-button--bordered">Empresas</button>
      </div>
    </nav>
  );
}

export default Navbar;
