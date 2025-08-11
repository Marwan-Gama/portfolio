/**
 * Utility functions for the portfolio application
 */

import { ContactFormData } from "../types";
import { FORM_VALIDATION } from "../constants";

/**
 * Validates email format using regex pattern
 * @param email - Email string to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  return FORM_VALIDATION.email.pattern.test(email);
};

/**
 * Validates contact form data
 * @param data - Contact form data to validate
 * @returns object with validation results and error messages
 */
export const validateContactForm = (
  data: ContactFormData
): {
  isValid: boolean;
  errors: Partial<ContactFormData>;
} => {
  const errors: Partial<ContactFormData> = {};

  // Validate name
  if (!data.name || data.name.length < FORM_VALIDATION.name.minLength) {
    errors.name = `Name must be at least ${FORM_VALIDATION.name.minLength} characters`;
  } else if (data.name.length > FORM_VALIDATION.name.maxLength) {
    errors.name = `Name must be less than ${FORM_VALIDATION.name.maxLength} characters`;
  }

  // Validate email
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate subject
  if (
    !data.subject ||
    data.subject.length < FORM_VALIDATION.subject.minLength
  ) {
    errors.subject = `Subject must be at least ${FORM_VALIDATION.subject.minLength} characters`;
  } else if (data.subject.length > FORM_VALIDATION.subject.maxLength) {
    errors.subject = `Subject must be less than ${FORM_VALIDATION.subject.maxLength} characters`;
  }

  // Validate message
  if (
    !data.message ||
    data.message.length < FORM_VALIDATION.message.minLength
  ) {
    errors.message = `Message must be at least ${FORM_VALIDATION.message.minLength} characters`;
  } else if (data.message.length > FORM_VALIDATION.message.maxLength) {
    errors.message = `Message must be less than ${FORM_VALIDATION.message.maxLength} characters`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Formats a date string to a readable format
 * @param dateString - Date string to format
 * @returns formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Generates a random ID string
 * @param length - Length of the ID (default: 8)
 * @returns random ID string
 */
export const generateId = (length: number = 8): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Scrolls to the top of the page smoothly
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Checks if the current device is mobile
 * @returns boolean indicating if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return window.innerWidth <= 768;
};

/**
 * Capitalizes the first letter of a string
 * @param str - String to capitalize
 * @returns capitalized string
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
