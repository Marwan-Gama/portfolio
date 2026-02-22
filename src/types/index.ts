/**
 * TypeScript type definitions for the portfolio application
 */

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response interface
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Skill interface
export interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database" | "devops" | "other";
}

// Navigation item interface
export interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

// Theme configuration interface
export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

// Visits API response (GET and POST /api/visits)
export interface VisitsApiResponse {
  count: number;
}
