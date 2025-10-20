/**
 * Application constants
 *
 * Centralized location for all hardcoded values used throughout the application.
 * This makes it easier to maintain and update values consistently.
 */

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1200
};

/**
 * Animation durations (in seconds)
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  medium: 0.5,
  slow: 0.6,
  verySlow: 0.8
};

/**
 * Spacing scale (using 8px base)
 */
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px'
};

/**
 * Contact information
 */
export const CONTACT_INFO = {
  // Phone numbers
  phone: '076 173 1018',
  phoneFormatted: '076 173 1018',
  phoneLink: 'tel:0761731018',
  phoneInternational: '+27 76 173 1018',
  whatsapp: '27761731018', // Country code + number without leading 0

  // Email
  email: 'nongcebogazide@gmail.com',
  emailLink: 'mailto:nongcebogazide@gmail.com',

  // Address
  address: {
    street: '303 Anton Lembede Street',
    floor: '5th Floor, Durban Club Place',
    building: 'Regus',
    city: 'Durban',
    province: 'KwaZulu-Natal',
    country: 'South Africa',
    // Full address as single string
    full: '303 Anton Lembede Street, 5th Floor, Durban Club Place, Regus, Durban'
  },

  // Business hours
  hours: {
    weekday: 'Monday - Friday: 8:00 - 17:00',
    saturday: 'Saturday: By Appointment',
    sunday: 'Sunday: Closed',
    phoneAvailability: 'Telephone lines are open 24 hours'
  }
};

/**
 * Social media links
 * Update these when social media accounts are created
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/gazideattorneys',
  linkedin: 'https://linkedin.com/company/gazide-attorneys',
  instagram: 'https://instagram.com/gazide_attorneys',
  twitter: 'https://twitter.com/gazideattorneys'
};

/**
 * Company information
 */
export const COMPANY_INFO = {
  name: 'Gazide Attorneys',
  legalName: 'Gazide Attorneys',
  tagline: 'Experience, Integrity and Excellence',
  description: '100% black-owned law firm based in Durban, KwaZulu-Natal',
  founded: 2020, // Update with actual founding year
  founder: {
    name: 'Nongcebo Sinegugu Gazide',
    title: 'Managing Director and Founder',
    credentials: [
      'Bachelor of Laws (LLB) from University of South Africa (UNISA)',
      'Admitted Attorney of the High Court of South Africa',
      'Member, Law Society of South Africa',
      'Specialist in RAF and Personal Injury Claims'
    ]
  }
};

/**
 * Statistics for home page
 */
export const STATS = {
  casesResolved: '20+',
  clientSatisfaction: '99%',
  yearsExperience: '1+',
  support: '24/7'
};

/**
 * Core values
 */
export const CORE_VALUES = [
  {
    number: '01',
    title: 'Experience',
    description: 'Years of proven track record across multiple practice areas, delivering favorable outcomes for our clients'
  },
  {
    number: '02',
    title: 'Integrity',
    description: 'Honest, transparent communication and ethical practice in every case we handle'
  },
  {
    number: '03',
    title: 'Excellence',
    description: 'Commitment to achieving the best possible outcomes through meticulous preparation and advocacy'
  }
];

/**
 * Professional accreditations
 */
export const ACCREDITATIONS = [
  'Law Society Member',
  'High Court Admitted',
  'Professional Indemnity Insured',
  'CCMA Accredited'
];

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

/**
 * Footer links
 */
export const FOOTER_LINKS = {
  legal: [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-of-service', label: 'Terms of Service' }
  ]
};

/**
 * SEO Meta defaults
 */
export const SEO_DEFAULTS = {
  siteName: 'Gazide Attorneys',
  defaultTitle: 'Gazide Attorneys | Expert Legal Services in Durban',
  defaultDescription: 'Gazide Attorneys offers expert legal services in Durban, KZN. Specializing in RAF claims, medical negligence, family law, and more. Contact us today.',
  keywords: 'attorney durban, lawyer durban, RAF claims, medical negligence, family law, legal services KZN, durban attorney',
  author: 'Gazide Attorneys',
  ogImage: '/og-image.jpg', // Update with actual image path
  twitterHandle: '@gazideattorneys'
};

/**
 * Environment-based URLs
 */
export const URLS = {
  // Update these based on your deployment
  production: 'https://gazideattorneys.co.za',
  development: 'http://localhost:5173'
};

/**
 * Form validation patterns
 */
export const VALIDATION_PATTERNS = {
  // South African phone number (starts with 0, followed by 9 digits)
  phoneLocal: /^0[0-9]{9}$/,
  // International format
  phoneInternational: /^\+27[0-9]{9}$/,
  // Email
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  // Name (letters, spaces, hyphens, apostrophes)
  name: /^[a-zA-Z\s'-]+$/
};

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid South African phone number (e.g., 0761234567)',
  invalidName: 'Please enter a valid name',
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must be no more than ${max} characters`,
  generic: 'An error occurred. Please try again.'
};

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Thank you for your message. We will contact you shortly.',
  formSent: 'Message sent successfully!',
  subscribed: 'Thank you for subscribing!'
};
