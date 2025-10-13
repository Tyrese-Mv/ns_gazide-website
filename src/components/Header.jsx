import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="5" width="4" height="25" fill="currentColor"/>
                <rect x="36" y="5" width="4" height="25" fill="currentColor"/>
                <rect x="18" y="8" width="14" height="3" fill="currentColor"/>
                <rect x="18" y="14" width="14" height="3" fill="currentColor"/>
                <rect x="18" y="20" width="14" height="3" fill="currentColor"/>
                <path d="M8 2 Q25 0 42 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="5" y="30" width="40" height="4" fill="currentColor"/>
              </svg>
            </div>
            <div className="logo-text">
              <div>
                <span className="logo-ns">NS</span>{' '}
                <span className="logo-gazide">GAZIDE ATTORNEYS</span>
              </div>
              <p className="tagline">Experience, Integrity and Excellence</p>
            </div>
          </Link>

          <ul className="nav-links" data-menu-open={isMenuOpen}>
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={isActive('/services') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <a href="tel:0761731018" className="header-cta">
            076 173 1018
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
