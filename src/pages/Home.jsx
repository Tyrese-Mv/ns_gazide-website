import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    'Road Accident Funds Claims (RAF)',
    'Medical Negligence',
    'Wills and Estate Administration',
    'Family Law',
    'Civil Litigation',
    'Criminal Litigation',
    'Corporate and Commercial Law',
    'Labour and Employment Law',
    'Eviction',
    'Immigration Law'
  ];

  const testimonials = [
    {
      text: "Gazide Attorneys handled my RAF claim with exceptional professionalism. They kept me informed every step of the way and secured a favorable settlement. Highly recommend!",
      author: "Thabo M.",
      case: "Road Accident Fund Claim"
    },
    {
      text: "Nongcebo provided outstanding guidance during my divorce proceedings. Her compassionate approach and legal expertise made a difficult time much easier to navigate.",
      author: "Sarah P.",
      case: "Family Law Matter"
    },
    {
      text: "Professional, knowledgeable, and responsive. Gazide Attorneys handled our corporate contracts efficiently and gave us peace of mind. Excellent service!",
      author: "David K.",
      case: "Corporate Law"
    }
  ];

  return (
    <div className="home">
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
            <span>Trusted Legal Counsel Since 2010</span>
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
            Delivering exceptional legal representation with unwavering dedication
            to justice, integrity, and your success
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
              { number: '500+', label: 'Cases Resolved' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
              { number: '24/7', label: 'Available Support' }
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
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 21, 56, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="service-icon-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 200 }}
                />
                <h3>{service}</h3>
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

      {/* Testimonials */}
      <motion.section
        className="testimonials"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Client Testimonials</motion.h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="quote-mark"
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />
                <p className="testimonial-text">{testimonial.text}</p>
                <motion.div
                  className="testimonial-author"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-case">{testimonial.case}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
    </div>
  );
};

export default Home;
