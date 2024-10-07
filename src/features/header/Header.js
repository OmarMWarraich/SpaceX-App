import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo256 from '../assets/logo256.png';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', text: 'Missions' },
    { to: '/rockets', text: 'Rockets' },
    { to: '/profile', text: 'Profile' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid w-100">
        <span><img className={styles.logo} src={logo256} height="50px" width="auto" alt="logo" /></span>
        <span className="navbar-brand"><h1 className={styles.brand}>Space Travelers&apos; Hub</h1></span>
        <button type="button" className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.to} className="nav-item">
                <NavLink
                  exact="false"
                  to={link.to}
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
