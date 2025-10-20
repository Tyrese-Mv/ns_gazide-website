import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULTS, COMPANY_INFO, STATS } from '../utils/constants';
import { getFeaturedServices } from '../data/services';
import { fadeInUp, staggerChildren } from '../utils/animations';
import ServiceModal from '../components/ServiceModal';
import { ServiceIcon } from '../components/ServiceIcons';
import './Home.css';

const Home = () => {
  const featuredServices = getFeaturedServices(6);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };


  return (
    <div className="home">
      <Helmet>
        <title>{SEO_DEFAULTS.defaultTitle}</title>
        <meta name="description" content={SEO_DEFAULTS.defaultDescription} />
        <meta name="keywords" content={SEO_DEFAULTS.keywords} />
        <meta name="author" content={SEO_DEFAULTS.author} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={SEO_DEFAULTS.defaultTitle} />
        <meta property="og:description" content={SEO_DEFAULTS.defaultDescription} />
        <meta property="og:image" content={SEO_DEFAULTS.ogImage} />
        <meta property="og:site_name" content={COMPANY_INFO.name} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={SEO_DEFAULTS.defaultTitle} />
        <meta name="twitter:description" content={SEO_DEFAULTS.defaultDescription} />
        <meta name="twitter:image" content={SEO_DEFAULTS.ogImage} />

        {/* JSON-LD Structured Data for Legal Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": COMPANY_INFO.name,
            "description": COMPANY_INFO.description,
            "url": window.location.origin,
            "telephone": "+27761731018",
            "email": "nongcebogazide@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "303 Anton Lembede Street, 5th Floor, Durban Club Place",
              "addressLocality": "Durban",
              "addressRegion": "KwaZulu-Natal",
              "addressCountry": "ZA"
            },
            "founder": {
              "@type": "Person",
              "name": COMPANY_INFO.founder.name,
              "jobTitle": COMPANY_INFO.founder.title,
              "alumniOf": "University of South Africa (UNISA)"
            },
            "areaServed": "Durban",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Professional Legal Attorneys</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Rights,
            <br />
            <span className="hero-highlight">Our Mission</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            To deliver exceptional legal services that prioritize clients' needs, foster long-term relationships and drive positive outcomes
          </motion.p>
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link to="/contact" className="cta-button cta-primary">
              Get Started
            </Link>
            <Link to="/services" className="cta-button cta-secondary">
              Our Services
            </Link>
          </motion.div>
          <motion.div
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="feature-item">
              <div className="feature-line"></div>
              <span>500+ Cases Won</span>
            </div>
            <div className="feature-item">
              <div className="feature-line"></div>
              <span>15+ Years Experience</span>
            </div>
            <div className="feature-item">
              <div className="feature-line"></div>
              <span>98% Success Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container">
          <div className="stats-grid">
            {[
              { number: STATS.casesResolved, label: 'Cases Resolved' },
              { number: STATS.clientSatisfaction, label: 'Client Satisfaction' },
              { number: STATS.yearsExperience, label: 'Years Experience' },
              { number: STATS.support, label: 'Available Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="services-preview"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Our Legal Services</motion.h2>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card clickable"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 21, 56, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service);
                  }
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                <motion.div
                  className="service-icon-wrapper"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 200 }}
                >
                  <ServiceIcon type={service.iconType} className="service-card-icon" />
                  <div className="service-icon-dot" />
                </motion.div>
                <h3>{service.title}</h3>
                <p className="service-short-desc">{service.shortDescription}</p>
                <span className="click-to-learn">Click to learn more →</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="view-all">
            <Link to="/services" className="secondary-button">
              View All Services →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let us help you navigate your legal challenges with confidence</p>
          <Link to="/contact" className="cta-button-large">
            Contact Us Today
          </Link>
        </div>
      </motion.section>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Home;
