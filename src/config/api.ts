// API Configuration
export const API_CONFIG = {
  // Development API URL
  DEV_API_URL: "http://localhost:5000/api/contact",

  // Production API URL - Replace with your actual Vercel backend URL
  PROD_API_URL: "https://portfolio-eight-taupe-12.vercel.app/contact", // ← PUT YOUR REAL BACKEND URL HERE

  // Get the appropriate API URL based on environment
  getApiUrl: () => {
    return import.meta.env.PROD
      ? API_CONFIG.PROD_API_URL
      : API_CONFIG.DEV_API_URL;
  },
};

export default API_CONFIG;
