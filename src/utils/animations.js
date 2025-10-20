/**
 * Shared animation variants for Framer Motion
 *
 * These variants are used across multiple components to ensure
 * consistent animation behavior throughout the application.
 */

/**
 * Fade in from bottom with upward movement
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

/**
 * Simple fade in animation
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

/**
 * Slide in from left
 */
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

/**
 * Slide in from right
 */
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

/**
 * Stagger animation for child elements
 * Use with AnimatePresence and variants on parent
 */
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Stagger with faster timing
 */
export const staggerChildrenFast = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

/**
 * Stagger with slower timing
 */
export const staggerChildrenSlow = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

/**
 * Scale in animation
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

/**
 * Scale in with spring physics
 */
export const scaleInSpring = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, type: "spring", stiffness: 200 }
};

/**
 * Page transition variants
 */
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

/**
 * Common hover animation for cards
 */
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(139, 21, 56, 0.2)",
  transition: { duration: 0.3 }
};

/**
 * Button tap animation
 */
export const buttonTap = {
  scale: 0.98
};

/**
 * Gentle hover for info cards
 */
export const infoCardHover = {
  y: -5,
  transition: { duration: 0.2 }
};
