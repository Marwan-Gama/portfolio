// API Configuration
export const API_CONFIG = {
  // Development API URL
  DEV_API_URL: "http://localhost:5000/api/contact",

  // Production API URL - Update this with your actual Vercel backend URL
  PROD_API_URL: "https://your-backend-url.vercel.app/api/contact", // ← Replace with your actual Vercel URL

  // Get the appropriate API URL based on environment
  getApiUrl: () => {
    return import.meta.env.PROD
      ? API_CONFIG.PROD_API_URL
      : API_CONFIG.DEV_API_URL;
  },
};

export default API_CONFIG;
