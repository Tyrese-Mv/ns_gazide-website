import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>About Us</h1>
          <p>Dedicated to delivering exceptional legal services</p>
        </div>
      </motion.section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-video"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>Meet Nongcebo Gazide</p>
              </div>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>About Us</h2>
              <p>
                Gazide Attorneys is a 100% black-owned law firm based in Durban, KwaZulu-Natal, committed to delivering high-quality legal services with integrity and professionalism. Strategically placed to serve a distinctive market, we offer a unique combination of legal expertise, cultural understanding and forward-thinking solutions in every matter we undertake.
              </p>

              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Nongcebo Sinegugu Gazide</h3>
              <p className="title">Managing Director and Founder</p>

              <div className="credentials">
                <h3>Professional Credentials</h3>
                <ul className="credentials-list">
                  <li>✓ Bachelor of Laws (LLB) from University of South Africa (UNISA)</li>
                  <li>✓ Admitted Attorney of the High Court of South Africa</li>
                  <li>✓ Member, Law Society of South Africa</li>
                  <li>✓ Specialist in RAF and Personal Injury Claims</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="values-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Our Core Values</motion.h2>
          <div className="values-grid">
            <motion.div className="value-card" variants={fadeInUp}>
              <div className="value-number">01</div>
              <h3>Experience</h3>
              <p>
                Years of proven track record across multiple practice areas,
                delivering favorable outcomes for our clients
              </p>
            </motion.div>
            <motion.div className="value-card" variants={fadeInUp}>
              <div className="value-number">02</div>
              <h3>Integrity</h3>
              <p>
                Honest, transparent communication and ethical practice in
                every case we handle
              </p>
            </motion.div>
            <motion.div className="value-card" variants={fadeInUp}>
              <div className="value-number">03</div>
              <h3>Excellence</h3>
              <p>
                Commitment to achieving the best possible outcomes through
                meticulous preparation and advocacy
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="trust-badges"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <div className="container">
          <motion.h3 variants={fadeInUp}>Professional Accreditations</motion.h3>
          <div className="badges-grid">
            {[
              'Law Society Member',
              'High Court Admitted',
              'Professional Indemnity Insured',
              'CCMA Accredited'
            ].map((text, index) => (
              <motion.div key={index} className="badge" variants={fadeInUp}>
                <div className="badge-line"></div>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
