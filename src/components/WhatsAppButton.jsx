import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../utils/constants';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const message = encodeURIComponent('Hello, I would like to inquire about legal services.');
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.958 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.227-0.403 0.255-0.748 0.081-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.403 0.518-0.605 0.174-0.201 0.231-0.346 0.346-0.574 0.117-0.227 0.058-0.428-0.028-0.605-0.087-0.174-0.776-1.87-1.063-2.565-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.605 0.087-0.922 0.428c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.227 2.424 3.694 5.872 5.183 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.045-0.835 2.332-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.227-0.662-0.401z"
        />
      </svg>
      <span className="whatsapp-tooltip">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
