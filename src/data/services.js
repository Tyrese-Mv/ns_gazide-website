/**
 * Centralized service data for Gazide Attorneys
 *
 * This file contains all service information used across the application.
 * Update this file when adding, removing, or modifying services.
 */

export const services = [
  {
    id: 'raf',
    title: 'Road Accident Funds Claims (RAF)',
    shortDescription: 'Expert representation for accident-related claims with proven success rates.',
    description: 'Expert representation for accident-related claims with proven success rates. We handle all aspects of RAF claims from initial consultation to final settlement.'
  },
  {
    id: 'medical',
    title: 'Medical Negligence',
    shortDescription: 'Comprehensive legal support for medical malpractice cases.',
    description: 'Comprehensive legal support for medical malpractice cases. Our team has extensive experience in holding healthcare providers accountable.'
  },
  {
    id: 'wills',
    title: 'Wills and Estate Administration',
    shortDescription: 'Professional guidance for estate planning and administration.',
    description: 'Professional guidance for estate planning and administration. We ensure your assets are protected and distributed according to your wishes.'
  },
  {
    id: 'family',
    title: 'Family Law',
    shortDescription: 'Divorces, maintenance, custody, and family dispute resolution.',
    description: 'Divorces, maintenance, custody, and family dispute resolution. Compassionate legal support during difficult family transitions.'
  },
  {
    id: 'civil',
    title: 'Civil Litigation',
    shortDescription: 'Strategic representation for civil disputes and legal matters.',
    description: 'Strategic representation for civil disputes and legal matters. We protect your interests in contract disputes, property matters, and more.'
  },
  {
    id: 'criminal',
    title: 'Criminal Litigation',
    shortDescription: 'Experienced defense for criminal cases of all complexities.',
    description: 'Experienced defense for criminal cases of all complexities. We provide vigorous representation to protect your rights and freedom.'
  },
  {
    id: 'corporate',
    title: 'Corporate and Commercial Law',
    shortDescription: 'Business legal services, contracts, and commercial transactions.',
    description: 'Business legal services, contracts, and commercial transactions. Helping businesses navigate legal complexities and minimize risk.'
  },
  {
    id: 'labour',
    title: 'Labour and Employment Law',
    shortDescription: 'Employment disputes, CCMA representation, and workplace matters.',
    description: 'Employment disputes, CCMA representation, and workplace matters. Protecting both employers and employees in labor disputes.'
  },
  {
    id: 'eviction',
    title: 'Eviction',
    shortDescription: 'Legal assistance for landlord-tenant disputes and eviction proceedings.',
    description: 'Legal assistance for landlord-tenant disputes and eviction proceedings. Swift and effective resolution of property disputes.'
  },
  {
    id: 'immigration',
    title: 'Immigration Law',
    shortDescription: 'Visa applications, permits, and immigration legal services.',
    description: 'Visa applications, permits, and immigration legal services. Helping individuals and families navigate South African immigration law.'
  }
];

/**
 * Get a service by its ID
 * @param {string} id - The service ID
 * @returns {Object|undefined} The service object or undefined if not found
 */
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

/**
 * Get a service by its title
 * @param {string} title - The service title
 * @returns {Object|undefined} The service object or undefined if not found
 */
export const getServiceByTitle = (title) => {
  return services.find(service => service.title === title);
};

/**
 * Get featured services for the home page
 * @param {number} count - Number of services to return (default: 6)
 * @returns {Array} Array of featured services
 */
export const getFeaturedServices = (count = 6) => {
  return services.slice(0, count);
};

/**
 * Get all services
 * @returns {Array} Array of all services
 */
export const getAllServices = () => {
  return services;
};

/**
 * Service options for contact form dropdown
 */
export const serviceOptions = services.map(service => ({
  value: service.id,
  label: service.title
}));

/**
 * Service options with "Other" option for contact form
 */
export const serviceOptionsWithOther = [
  ...serviceOptions,
  { value: 'other', label: 'Other' }
];
