import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue, optionLabel) => {
    onChange(optionValue);
    setSelectedLabel(optionLabel);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={`custom-select-trigger ${isOpen ? 'open' : ''} ${value ? 'has-value' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'selected-text' : 'placeholder-text'}>
          {selectedLabel || placeholder}
        </span>
        <motion.svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#8B1538"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="custom-select-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {options.map((option, index) => (
              <motion.div
                key={option.value}
                className={`custom-option ${value === option.value ? 'selected' : ''}`}
                onClick={() => handleSelect(option.value, option.label)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.2 }}
                whileHover={{ backgroundColor: '#f8f8f8', x: 4 }}
              >
                {option.label}
                {value === option.value && (
                  <motion.span
                    className="check-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden select for form validation */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{ display: 'none' }}
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
