/**
 * Application constants and configuration
 */

// Navigation items
export const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/Marwan-Gama",
  linkedin: "https://linkedin.com/in/marwan-abu-gama",
  twitter: "https://twitter.com/marwan_gama",
  email: "marwan.abugama@gmail.com",
} as const;

// Contact form validation rules
export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
} as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

// Breakpoint values (matching Material-UI breakpoints)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  contact: "/api/contact",
  health: "/api/health",
} as const;

// Error messages
export const ERROR_MESSAGES = {
  networkError: "Network error. Please check your connection and try again.",
  serverError: "Server error. Please try again later.",
  validationError: "Please check your input and try again.",
  unknownError: "An unexpected error occurred. Please try again.",
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  contactSent: "Thank you! Your message has been sent successfully.",
  formReset: "Form has been reset successfully.",
} as const;
