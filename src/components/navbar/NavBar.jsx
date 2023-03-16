import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmpresasForm from '../pages/empresas/EmpresasForm';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        aria-label="Abrir menu"
        aria-expanded={showMenu}
        onClick={toggleMenu}
      >
        <span className="navbar-toggle__icon" />
      </button>

      <ul className={`navbar-menu ${showMenu ? 'navbar-menu--visible' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link" exact>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/bordados" className="navbar-link">
            Bordados
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/linhas" className="navbar-link">
            Linhas
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/empresas" className="navbar-link">
            Empresas
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
