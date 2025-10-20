import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to main content for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        role="banner"
      >
        <nav className="navbar" role="navigation" aria-label="Primary navigation">
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
                <span className="logo-ns">GAZIDE</span>{' '}
                <span className="logo-gazide">ATTORNEYS</span>
              </div>
              <p className="tagline">Experience, Integrity and Excellence</p>
            </div>
          </Link>

          {/* Backdrop overlay */}
          {isMenuOpen && (
            <div
              className="menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          <ul
            className="nav-links"
            id="mobile-navigation"
            data-menu-open={isMenuOpen}
            role="navigation"
            aria-label="Main navigation"
          >
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
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hamburger-line line-1"
                d="M4 8h20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                className="hamburger-line line-2"
                d="M4 14h20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                className="hamburger-line line-3"
                d="M4 20h20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      </motion.header>
    </>
  );
};

export default Header;
