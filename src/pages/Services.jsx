import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Road Accident Funds Claims (RAF)',
      description: 'Expert representation for accident-related claims with proven success rates. We handle all aspects of RAF claims from initial consultation to final settlement.'
    },
    {
      title: 'Medical Negligence',
      description: 'Comprehensive legal support for medical malpractice cases. Our team has extensive experience in holding healthcare providers accountable.'
    },
    {
      title: 'Wills and Estate Administration',
      description: 'Professional guidance for estate planning and administration. We ensure your assets are protected and distributed according to your wishes.'
    },
    {
      title: 'Family Law',
      description: 'Divorces, maintenance, custody, and family dispute resolution. Compassionate legal support during difficult family transitions.'
    },
    {
      title: 'Civil Litigation',
      description: 'Strategic representation for civil disputes and legal matters. We protect your interests in contract disputes, property matters, and more.'
    },
    {
      title: 'Criminal Litigation',
      description: 'Experienced defense for criminal cases of all complexities. We provide vigorous representation to protect your rights and freedom.'
    },
    {
      title: 'Corporate and Commercial Law',
      description: 'Business legal services, contracts, and commercial transactions. Helping businesses navigate legal complexities and minimize risk.'
    },
    {
      title: 'Labour and Employment Law',
      description: 'Employment disputes, CCMA representation, and workplace matters. Protecting both employers and employees in labor disputes.'
    },
    {
      title: 'Eviction',
      description: 'Legal assistance for landlord-tenant disputes and eviction proceedings. Swift and effective resolution of property disputes.'
    },
    {
      title: 'Immigration Law',
      description: 'Visa applications, permits, and immigration legal services. Helping individuals and families navigate South African immigration law.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="services-page">
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
