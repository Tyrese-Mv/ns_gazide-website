import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../utils/constants';
import { getAllServices } from '../data/services';
import { fadeInUp } from '../utils/animations';
import './Services.css';

const Services = () => {
  const services = getAllServices();

  return (
    <div className="services-page">
      <Helmet>
        <title>Legal Services | {COMPANY_INFO.name}</title>
        <meta name="description" content="Comprehensive legal services in Durban, KZN. Specializing in RAF claims, medical negligence, family law, civil litigation, and more. Expert legal representation." />
        <meta name="keywords" content="legal services durban, RAF claims, medical negligence lawyer, family law attorney, civil litigation, criminal defense durban, corporate law KZN" />
        <meta property="og:title" content={`Legal Services | ${COMPANY_INFO.name}`} />
        <meta property="og:description" content="Comprehensive legal services in Durban, KZN. Expert representation across 10+ practice areas." />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Legal Services</h1>
          <p>Comprehensive legal solutions tailored to your needs</p>
        </div>
      </motion.section>

      <section className="services-detail">
        <div className="container">
          <motion.div
            className="services-grid-full"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="learn-more">
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="consultation-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container consultation-content">
          <h2>Need Legal Assistance?</h2>
          <p>Schedule a consultation to discuss your legal matter in detail</p>
          <Link to="/contact" className="cta-button">
            Schedule Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
