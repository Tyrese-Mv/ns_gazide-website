import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import CustomSelect from '../components/CustomSelect';
import { serviceOptionsWithOther } from '../data/services';
import { CONTACT_INFO, SUCCESS_MESSAGES, COMPANY_INFO } from '../utils/constants';
import { fadeInUp } from '../utils/animations';
import './Contact.css';

// Zod validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),

  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^(\+27|0)[6-8][0-9]{8}$/, 'Please enter a valid South African phone number (e.g., 0761731018 or +27761731018)'),

  service: z.string()
    .min(1, 'Please select a legal service'),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const serviceValue = watch('service');

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '');

    // Format as user types
    if (cleaned.startsWith('27')) {
      // +27 format
      if (cleaned.length <= 11) {
        return '+' + cleaned;
      }
      return '+' + cleaned.slice(0, 11);
    } else if (cleaned.startsWith('0')) {
      // 0 format
      if (cleaned.length <= 10) {
        return cleaned;
      }
      return cleaned.slice(0, 10);
    }

    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted, { shouldValidate: touchedFields.phone });
  };

  const handleServiceChange = (value) => {
    setValue('service', value, { shouldValidate: true, shouldTouch: true });
  };

  const onSubmit = async (data) => {
    try {
      // Formsubmit.co endpoint (no registration required!)
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || CONTACT_INFO.email;
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('_subject', `New Legal Inquiry - ${data.service}`);
      formData.append('service', data.service);
      formData.append('message', data.message);

      // Formsubmit.co configuration options
      formData.append('_captcha', 'false'); // Disable captcha
      formData.append('_template', 'table'); // Use table format for better readability

      const response = await fetch(`https://formsubmit.co/${contactEmail}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success(SUCCESS_MESSAGES.formSubmitted, {
          icon: '✓',
          style: {
            borderRadius: '8px',
            background: '#8B1538',
            color: '#fff',
          },
        });

        // Reset form
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was an error submitting the form. Please try again.', {
        icon: '✕',
        style: {
          borderRadius: '8px',
          background: '#dc3545',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | {COMPANY_INFO.name}</title>
        <meta name="description" content="Contact Gazide Attorneys in Durban, KZN. Call 076 173 1018 or email nongcebogazide@gmail.com. Office at 303 Anton Lembede Street. Free consultation available." />
        <meta name="keywords" content="contact attorney durban, legal consultation durban, law firm contact KZN, durban lawyer contact, legal help durban" />
        <meta property="og:title" content={`Contact Us | ${COMPANY_INFO.name}`} />
        <meta property="og:description" content="Get in touch with Gazide Attorneys. Call 076 173 1018 for legal assistance." />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

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
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={`form-group ${errors.name ? 'error' : ''} ${!errors.name && touchedFields.name ? 'success' : ''}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={errors.name ? 'input-error' : ''}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="error-message" role="alert">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className={`form-group ${errors.email ? 'error' : ''} ${!errors.email && touchedFields.email ? 'success' : ''}`}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={errors.email ? 'input-error' : ''}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="error-message" role="alert">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className={`form-group ${errors.phone ? 'error' : ''} ${!errors.phone && touchedFields.phone ? 'success' : ''}`}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    onChange={(e) => {
                      register('phone').onChange(e);
                      handlePhoneChange(e);
                    }}
                    className={errors.phone ? 'input-error' : ''}
                    placeholder="0761731018 or +27761731018"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="error-message" role="alert">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className={`form-group ${errors.service ? 'error' : ''} ${!errors.service && touchedFields.service ? 'success' : ''}`}>
                  <label htmlFor="service">Legal Service *</label>
                  <CustomSelect
                    options={serviceOptionsWithOther}
                    value={serviceValue}
                    onChange={handleServiceChange}
                    placeholder="Select a legal service"
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  />
                  <input type="hidden" {...register('service')} />
                  {errors.service && (
                    <span id="service-error" className="error-message" role="alert">
                      {errors.service.message}
                    </span>
                  )}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''} ${!errors.message && touchedFields.message ? 'success' : ''}`}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="6"
                    {...register('message')}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="Brief description of your legal matter (10-1000 characters)"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="error-message" role="alert">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <a href={CONTACT_INFO.phoneLink}>{CONTACT_INFO.phoneFormatted}</a>
                  </div>
                </motion.div>

                <motion.div
                  className="info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4>Email</h4>
                    <a href={CONTACT_INFO.emailLink}>
                      {CONTACT_INFO.email}
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
                      {CONTACT_INFO.address.street}<br />
                      {CONTACT_INFO.address.floor}<br />
                      {CONTACT_INFO.address.building}, {CONTACT_INFO.address.city}
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
                      {CONTACT_INFO.hours.weekday}<br />
                      {CONTACT_INFO.hours.saturday}<br />
                      {CONTACT_INFO.hours.sunday}
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9em', fontStyle: 'italic' }}>
                      {CONTACT_INFO.hours.phoneAvailability}
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
