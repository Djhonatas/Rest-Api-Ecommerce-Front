import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-toggle ${showMenu ? 'active' : ''}`}
        aria-label="Abrir menu"
        aria-expanded={showMenu}
        onClick={toggleMenu}
      >
        <span className="navbar-toggle__icon" />
      </button>

      <ul className={`navbar-menu ${showMenu ? 'navbar-menu--visible' : ''}`}>
        <span className="navbar-item">
          <Link to="/home" className="navbar-link" exact>
            Home
          </Link>
        </span>
        <span className="navbar-item">
          <Link to="/bordados" className="navbar-link">
            Bordados
          </Link>
        </span>
        <span className="navbar-item">
          <Link to="/linhas" className="navbar-link">
            Linhas
          </Link>
        </span>
        <span className="navbar-item">
          <Link to="/empresas" className="navbar-link">
            Empresas
          </Link>
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
