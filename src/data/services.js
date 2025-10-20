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
    iconType: 'raf',
    shortDescription: 'Expert representation for accident-related claims with proven success rates.',
    description: 'Expert representation for accident-related claims with proven success rates. We handle all aspects of RAF claims from initial consultation to final settlement, ensuring you receive the compensation you deserve.',
    benefits: [
      'No upfront fees - we work on a contingency basis',
      'Maximum compensation for your injuries and losses',
      'Experienced negotiation with RAF officials',
      'Fast-tracked claim processing',
      'Comprehensive medical assessment coordination'
    ],
    whatWeDo: [
      'Initial consultation and case evaluation',
      'Collection and preparation of all necessary documentation',
      'Medical expert witness coordination',
      'Negotiation with the Road Accident Fund',
      'Court representation if settlement is not reached',
      'Post-settlement assistance and guidance'
    ]
  },
  {
    id: 'medical',
    title: 'Medical Negligence',
    iconType: 'medical',
    shortDescription: 'Comprehensive legal support for medical malpractice cases.',
    description: 'Comprehensive legal support for medical malpractice cases. Our team has extensive experience in holding healthcare providers accountable for substandard care and medical errors.',
    benefits: [
      'specialised knowledge in medical law',
      'Access to independent medical experts',
      'No fee unless we win your case',
      'Compassionate and confidential service',
      'Proven track record of successful claims'
    ],
    whatWeDo: [
      'Review medical records and identify negligence',
      'Consult with medical experts to establish fault',
      'Calculate full extent of damages and losses',
      'Negotiate with medical malpractice insurers',
      'Represent you in Medical Protection Society claims',
      'Pursue litigation when necessary'
    ]
  },
  {
    id: 'wills',
    title: 'Wills and Estate Administration',
    iconType: 'wills',
    shortDescription: 'Professional guidance for estate planning and administration.',
    description: 'Professional guidance for estate planning and administration. We ensure your assets are protected and distributed according to your wishes, providing peace of mind for you and your loved ones.',
    benefits: [
      'Protection of your estate and beneficiaries',
      'Tax-efficient estate planning strategies',
      'Avoidance of family disputes',
      'Professional executor services',
      'Clear and legally sound documentation'
    ],
    whatWeDo: [
      'Draft comprehensive wills tailored to your needs',
      'Establish trusts for asset protection',
      'Register estates with the Master\'s Office',
      'Administer deceased estates',
      'Handle estate liquidation and distribution',
      'Resolve disputes between beneficiaries'
    ]
  },
  {
    id: 'family',
    title: 'Family Law',
    iconType: 'family',
    shortDescription: 'Divorces, maintenance, custody, and family dispute resolution.',
    description: 'Divorces, maintenance, custody, and family dispute resolution. Compassionate legal support during difficult family transitions, protecting your rights and your children\'s best interests.',
    benefits: [
      'Sensitive and confidential handling of personal matters',
      'Child-focused custody solutions',
      'Fair division of marital assets',
      'Protection orders when needed',
      'Experienced mediation services'
    ],
    whatWeDo: [
      'Uncontested and contested divorce proceedings',
      'Child custody and visitation arrangements',
      'Maintenance claims and enforcement',
      'Domestic violence protection orders',
      'Parental rights and responsibilities agreements',
      'Division of matrimonial property'
    ]
  },
  {
    id: 'civil',
    title: 'Civil Litigation',
    iconType: 'civil',
    shortDescription: 'Strategic representation for civil disputes and legal matters.',
    description: 'Strategic representation for civil disputes and legal matters. We protect your interests in contract disputes, property matters, debt collection, and various civil claims.',
    benefits: [
      'Cost-effective dispute resolution strategies',
      'Experienced court representation',
      'Alternative dispute resolution options',
      'Clear communication throughout the process',
      'Results-driven approach'
    ],
    whatWeDo: [
      'Breach of contract claims',
      'Property disputes and boundary issues',
      'Debt collection and enforcement',
      'Delictual claims (civil wrongs)',
      'Commercial litigation',
      'Appeals and reviews'
    ]
  },
  {
    id: 'criminal',
    title: 'Criminal Litigation',
    iconType: 'criminal',
    shortDescription: 'Experienced defense for criminal cases of all complexities.',
    description: 'Experienced defense for criminal cases of all complexities. We provide vigorous representation to protect your rights and freedom, from bail applications to trial and appeals.',
    benefits: [
      '24/7 emergency legal assistance',
      'Bail application expertise',
      'Strong defense strategies',
      'Protection of your constitutional rights',
      'Confidential attorney-client privilege'
    ],
    whatWeDo: [
      'Bail applications and bail appeals',
      'Pre-trial consultations and preparation',
      'Plea bargaining negotiations',
      'Trial representation in all courts',
      'Appeals and review applications',
      'Expungement of criminal records'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate and Commercial Law',
    iconType: 'corporate',
    shortDescription: 'Business legal services, contracts, and commercial transactions.',
    description: 'Business legal services, contracts, and commercial transactions. Helping businesses navigate legal complexities and minimize risk while facilitating growth and success.',
    benefits: [
      'Practical business-focused advice',
      'Risk mitigation strategies',
      'Compliance with South African business law',
      'Contract protection and enforcement',
      'Cost-effective legal solutions'
    ],
    whatWeDo: [
      'Company registration and CIPC filings',
      'Drafting and reviewing commercial contracts',
      'Shareholder agreements and disputes',
      'Mergers and acquisitions',
      'Franchise agreements',
      'Business restructuring and compliance'
    ]
  },
  {
    id: 'labour',
    title: 'Labour and Employment Law',
    iconType: 'labour',
    shortDescription: 'Employment disputes, CCMA representation, and workplace matters.',
    description: 'Employment disputes, CCMA representation, and workplace matters. Protecting both employers and employees in labor disputes, ensuring fair treatment and legal compliance.',
    benefits: [
      'Expert CCMA and Labour Court representation',
      'Quick resolution of workplace disputes',
      'Protection against unfair dismissal',
      'Compliance with labour legislation',
      'Representation for both employers and employees'
    ],
    whatWeDo: [
      'Unfair dismissal and retrenchment cases',
      'CCMA conciliation and arbitration',
      'Labour Court litigation',
      'Drafting employment contracts and policies',
      'Workplace disciplinary hearings',
      'Discrimination and harassment claims'
    ]
  },
  {
    id: 'eviction',
    title: 'Eviction',
    iconType: 'eviction',
    shortDescription: 'Legal assistance for landlord-tenant disputes and eviction proceedings.',
    description: 'Legal assistance for landlord-tenant disputes and eviction proceedings. Swift and effective resolution of property disputes while ensuring compliance with the Prevention of Illegal Eviction Act.',
    benefits: [
      'Legal compliance with eviction laws',
      'Fast-tracked court proceedings',
      'Protection of property rights',
      'Minimized financial losses',
      'Professional handling of difficult situations'
    ],
    whatWeDo: [
      'Eviction notices and court applications',
      'Unlawful occupation cases',
      'Rental disputes and arrears claims',
      'Ejectment proceedings',
      'Sheriff coordination and execution',
      'Lease agreement drafting and enforcement'
    ]
  },
  {
    id: 'immigration',
    title: 'Immigration Law',
    iconType: 'immigration',
    shortDescription: 'Visa applications, permits, and immigration legal services.',
    description: 'Visa applications, permits, and immigration legal services. Helping individuals and families navigate South African immigration law with expert guidance and support.',
    benefits: [
      'High success rate for visa applications',
      'Expert knowledge of immigration regulations',
      'Assistance with complex cases',
      'Family reunification support',
      'Appeals and reviews of rejected applications'
    ],
    whatWeDo: [
      'Work permit and visa applications',
      'Permanent residence applications',
      'Citizenship and naturalization',
      'Visa extensions and renewals',
      'Appeals to the Immigration Appeal Board',
      'Corporate immigration for businesses'
    ]
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
