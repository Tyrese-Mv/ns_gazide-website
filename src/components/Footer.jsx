import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <p><strong>GAZIDE ATTORNEYS</strong></p>
            <p className="footer-tagline">Experience, Integrity and Excellence</p>
          </div>
          <div className="footer-links">
            <div className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <p className="copyright">
              &copy; 2025 Gazide Attorneys. All rights reserved.
            </p>
            <p className="legal-links">
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
