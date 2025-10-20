import { motion } from 'framer-motion';
import './SkeletonLoader.css';

const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'hero') {
    return (
      <div className="skeleton-hero">
        <motion.div
          className="skeleton-title"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="skeleton-subtitle"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="skeleton-text">
        <motion.div
          className="skeleton-line"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="skeleton-line"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="skeleton-line short"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className="skeleton-card">
        <motion.div
          className="skeleton-card-icon"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="skeleton-card-title"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="skeleton-card-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
