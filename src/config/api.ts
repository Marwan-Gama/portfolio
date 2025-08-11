/**
 * API Configuration
 *
 * Centralized API configuration for the application including:
 * - Environment-specific API URLs
 * - Request timeout settings
 * - Error handling configurations
 * - API endpoint constants
 */

/**
 * API configuration object with environment-specific settings
 */
export const API_CONFIG = {
  // Development API URL
  DEV_API_URL: "http://localhost:5000/api",

  // Production API URL - Replace with your actual Vercel backend URL
  PROD_API_URL: "https://portfolio-eight-taupe-12.vercel.app/api",

  // Request timeout in milliseconds
  TIMEOUT: 10000,

  // Retry attempts for failed requests
  MAX_RETRIES: 3,

  // Retry delay in milliseconds
  RETRY_DELAY: 1000,

  /**
   * Get the appropriate API URL based on current environment
   * @returns string - The API base URL for the current environment
   */
  getApiUrl: (): string => {
    return import.meta.env.PROD
      ? API_CONFIG.PROD_API_URL
      : API_CONFIG.DEV_API_URL;
  },

  /**
   * Get the full URL for a specific endpoint
   * @param endpoint - The API endpoint path
   * @returns string - The complete API URL
   */
  getEndpointUrl: (endpoint: string): string => {
    const baseUrl = API_CONFIG.getApiUrl();
    return `${baseUrl}${endpoint}`;
  },

  /**
   * Default headers for API requests
   */
  getDefaultHeaders: (): Record<string, string> => ({
    "Content-Type": "application/json",
    Accept: "application/json",
  }),
};

/**
 * API endpoints constants
 */
export const API_ENDPOINTS = {
  CONTACT: "/contact",
  HEALTH: "/health",
} as const;

/**
 * HTTP status codes for reference
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export default API_CONFIG;
