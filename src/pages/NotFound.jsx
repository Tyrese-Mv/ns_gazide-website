import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeInUp, scaleIn } from '../utils/animations';
import { COMPANY_INFO } from '../utils/constants';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page Not Found | {COMPANY_INFO.name}</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Gazide Attorneys homepage for legal services in Durban, KZN." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        className="not-found-content"
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div className="not-found-icon" variants={scaleIn}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="#8B1538" strokeWidth="4" opacity="0.2" />
            <path
              d="M70 130L130 70M130 130L70 70"
              stroke="#8B1538"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.h1 variants={fadeInUp}>404</motion.h1>
        <motion.h2 variants={fadeInUp}>Page Not Found</motion.h2>
        <motion.p variants={fadeInUp}>
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </motion.p>

        <motion.div className="not-found-actions" variants={fadeInUp}>
          <Link to="/" className="cta-button cta-primary">
            Return Home
          </Link>
          <Link to="/services" className="cta-button cta-secondary">
            Our Services
          </Link>
          <Link to="/contact" className="cta-button cta-secondary">
            Contact Us
          </Link>
        </motion.div>

        <motion.div className="not-found-links" variants={fadeInUp}>
          <p>Quick Links:</p>
          <div className="quick-links">
            <Link to="/about">About Us</Link>
            <span>•</span>
            <Link to="/services">Services</Link>
            <span>•</span>
            <Link to="/contact">Contact</Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
