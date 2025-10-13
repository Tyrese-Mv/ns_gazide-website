import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="splash-background">
        <div className="splash-shape splash-shape-1"></div>
        <div className="splash-shape splash-shape-2"></div>
      </div>

      <div className="splash-content">
        <motion.div
          className="splash-logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="splash-pillar"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <svg width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="5" width="4" height="25" fill="currentColor"/>
              <rect x="36" y="5" width="4" height="25" fill="currentColor"/>
              <rect x="18" y="8" width="14" height="3" fill="currentColor"/>
              <rect x="18" y="14" width="14" height="3" fill="currentColor"/>
              <rect x="18" y="20" width="14" height="3" fill="currentColor"/>
              <path d="M8 2 Q25 0 42 2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="5" y="30" width="40" height="4" fill="currentColor"/>
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className="splash-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="splash-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="splash-ns">NS</span>{' '}
            <span className="splash-gazide">GAZIDE</span>
          </motion.h1>
          <motion.p
            className="splash-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            ATTORNEYS
          </motion.p>
        </motion.div>

        <motion.div
          className="splash-divider"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
        />

        <motion.p
          className="splash-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          Experience, Integrity and Excellence
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
