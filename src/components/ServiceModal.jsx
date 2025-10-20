import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { ServiceIcon } from './ServiceIcons';
import './ServiceModal.css';

const ServiceModal = ({ service, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-content">
              {/* Close Button */}
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="modal-header">
                <motion.div
                  className="modal-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <ServiceIcon type={service.iconType || 'civil'} />
                </motion.div>
                <h2 id="modal-title" className="modal-title">{service.title}</h2>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div className="service-description">
                  <p>{service.description}</p>
                </div>

                {/* Key Benefits Section */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <span className="benefit-icon">✓</span>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What We Do Section */}
                {service.whatWeDo && service.whatWeDo.length > 0 && (
                  <div className="service-what-we-do">
                    <h3>What We Do</h3>
                    <ul>
                      {service.whatWeDo.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <motion.a
                  href="/contact"
                  className="modal-cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Consultation
                </motion.a>
                <button className="modal-close-button" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
