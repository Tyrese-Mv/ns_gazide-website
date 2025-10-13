import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomSelect from '../components/CustomSelect';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const serviceOptions = [
    { value: 'raf', label: 'Road Accident Funds Claims (RAF)' },
    { value: 'medical', label: 'Medical Negligence' },
    { value: 'wills', label: 'Wills and Estate Administration' },
    { value: 'family', label: 'Family Law' },
    { value: 'civil', label: 'Civil Litigation' },
    { value: 'criminal', label: 'Criminal Litigation' },
    { value: 'corporate', label: 'Corporate and Commercial Law' },
    { value: 'labour', label: 'Labour and Employment Law' },
    { value: 'eviction', label: 'Eviction' },
    { value: 'immigration', label: 'Immigration Law' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="contact-page">
      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We're here to help with your legal needs</p>
        </div>
      </motion.section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Legal Service *</label>
                  <CustomSelect
                    options={serviceOptions}
                    value={formData.service}
                    onChange={handleServiceChange}
                    placeholder="Select a legal service"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief description of your legal matter"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Contact Information</h2>
              <div className="contact-info-cards">
                <motion.div
                  className="info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:0761731018">076 173 1018</a>
                  </div>
                </motion.div>

                <motion.div
                  className="info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:nongcebogazide@gmail.com">
                      nongcebogazide@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4>Office Address</h4>
                    <p>
                      303 Anton Lembede Street<br />
                      5th Floor, Durban Club Place<br />
                      Regus, Durban
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
