# 📁 Project Structure Documentation

This document provides a detailed overview of the portfolio project structure, explaining the purpose and organization of each directory and file.

## 🏗️ Overall Architecture

The project follows a **monorepo structure** with separate frontend and backend applications:

```
portfolio/
├── 📁 src/                    # Frontend React application
├── 📁 server/                 # Backend Node.js/Express application
├── 📁 public/                 # Static assets
└── 📄 Configuration files     # Build tools, linting, etc.
```

## 🎨 Frontend Structure (`src/`)

### 📁 `src/components/`

React components organized by feature/pages:

- **`Home.tsx`** - Landing page with hero section and call-to-action buttons
- **`About.tsx`** - About page with skills, experience, and personal information
- **`Projects.tsx`** - Projects showcase with filtering and detailed views
- **`Contact.tsx`** - Contact form with validation and submission handling
- **`Navbar.tsx`** - Responsive navigation component with mobile drawer
- **`index.ts`** - Centralized component exports

### 📁 `src/config/`

Configuration files for external services and APIs:

- **`api.ts`** - API endpoints, URLs, and HTTP configuration
  - Environment-specific API URLs
  - Request timeout settings
  - Retry configuration
  - Default headers

### 📁 `src/constants/`

Application-wide constants and configuration values:

- **`index.ts`** - Navigation items, validation rules, error messages
  - `NAV_ITEMS` - Navigation menu configuration
  - `SOCIAL_LINKS` - Social media URLs
  - `FORM_VALIDATION` - Form validation rules
  - `ERROR_MESSAGES` - User-friendly error messages
  - `SUCCESS_MESSAGES` - Success notification messages

### 📁 `src/types/`

TypeScript type definitions and interfaces:

- **`index.ts`** - Type definitions for:
  - `ContactFormData` - Contact form structure
  - `ApiResponse` - API response format
  - `Project` - Project data structure
  - `Skill` - Skill information
  - `NavItem` - Navigation item structure
  - `ThemeConfig` - Theme configuration

### 📁 `src/utils/`

Utility functions and helper methods:

- **`index.ts`** - Common utility functions:
  - `validateContactForm()` - Form validation logic
  - `isValidEmail()` - Email validation
  - `formatDate()` - Date formatting
  - `debounce()` - Function debouncing
  - `scrollToTop()` - Smooth scrolling
  - `isMobileDevice()` - Device detection

### 📁 `src/hooks/`

Custom React hooks for reusable logic:

- **`useContactForm.ts`** - Contact form state management
  - Form data state
  - Validation logic
  - Submission handling
  - Error management
- **`index.ts`** - Hook exports

### 📁 `src/services/`

API service layer and business logic:

- **`api.ts`** - HTTP client with:
  - Request/response handling
  - Error management
  - Retry logic with exponential backoff
  - Timeout handling
  - Generic HTTP methods (GET, POST, PUT, DELETE)
- **`index.ts`** - Service exports

### 📁 `src/theme/`

Material-UI theme configuration:

- **`index.ts`** - Centralized theme configuration:
  - Color palette (primary, secondary, background)
  - Typography settings with responsive breakpoints
  - Component style overrides
  - Responsive design configurations

### 📁 `src/assets/`

Static assets (images, icons, etc.)

### 📄 Root Files

- **`App.tsx`** - Main application component with routing and theme provider
- **`main.tsx`** - Application entry point
- **`index.css`** - Global styles and CSS reset

## 🔧 Backend Structure (`server/`)

### 📁 `server/routes/`

API route handlers:

- **`contact.js`** - Contact form submission endpoint
  - POST `/api/contact` - Handle contact form submissions
  - Input validation and sanitization
  - Database operations
  - Email notifications

### 📁 `server/models/`

MongoDB/Mongoose data models:

- **`Contact.js`** - Contact form data model
  - Schema definition
  - Validation rules
  - Timestamps

### 📄 Root Files

- **`server.js`** - Express server setup and configuration
  - Middleware configuration (CORS, Helmet, body parsing)
  - Route mounting
  - Error handling
  - MongoDB connection
  - Graceful shutdown

## 🛠️ Configuration Files

### Build & Development

- **`package.json`** - Frontend dependencies and scripts
- **`vite.config.ts`** - Vite build configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.js`** - ESLint rules and configuration

### Deployment

- **`vercel.json`** - Vercel deployment configuration
- **`server/vercel.json`** - Backend deployment settings

## 📦 Package Management

### Frontend Dependencies (`package.json`)

```json
{
  "dependencies": {
    "@emotion/react": "^11.11.3", // CSS-in-JS styling
    "@emotion/styled": "^11.11.0", // Styled components
    "@mui/icons-material": "^5.15.7", // Material-UI icons
    "@mui/material": "^5.15.7", // Material-UI components
    "framer-motion": "^11.0.3", // Animation library
    "react": "^18.2.0", // React library
    "react-dom": "^18.2.0", // React DOM
    "react-router-dom": "^6.22.0" // Client-side routing
  },
  "devDependencies": {
    "@types/react": "^18.2.55", // TypeScript definitions
    "@vitejs/plugin-react": "^4.2.1", // Vite React plugin
    "eslint": "^8.56.0", // Code linting
    "typescript": "^5.2.2", // TypeScript compiler
    "vite": "^5.1.0" // Build tool
  }
}
```

### Backend Dependencies (`server/package.json`)

```json
{
  "dependencies": {
    "express": "^4.18.2", // Web framework
    "mongoose": "^8.0.3", // MongoDB ODM
    "cors": "^2.8.5", // CORS middleware
    "helmet": "^7.1.0", // Security middleware
    "dotenv": "^16.3.1" // Environment variables
  }
}
```

## 🔄 Data Flow

### Frontend Data Flow

1. **User Interaction** → Component Event Handler
2. **State Management** → React Hooks (useState, useCallback)
3. **API Calls** → Service Layer (ApiService)
4. **Data Processing** → Utility Functions
5. **UI Updates** → Component Re-render

### Backend Data Flow

1. **HTTP Request** → Express Middleware
2. **Route Handler** → Business Logic
3. **Database Operations** → Mongoose Models
4. **Response** → JSON API Response

## 🎯 Key Design Patterns

### Frontend Patterns

- **Component Composition** - Reusable, composable components
- **Custom Hooks** - Logic extraction and reusability
- **Service Layer** - API abstraction and error handling
- **Type Safety** - Full TypeScript implementation
- **Responsive Design** - Mobile-first approach

### Backend Patterns

- **MVC Architecture** - Model-View-Controller separation
- **Middleware Pattern** - Request/response processing
- **Error Handling** - Centralized error management
- **Environment Configuration** - Secure configuration management

## 🔒 Security Considerations

### Frontend Security

- **Input Validation** - Client-side form validation
- **XSS Prevention** - React's built-in XSS protection
- **HTTPS Enforcement** - Secure communication
- **Content Security Policy** - Resource loading restrictions

### Backend Security

- **Helmet.js** - Security headers
- **CORS Configuration** - Cross-origin request control
- **Input Sanitization** - Data validation and cleaning
- **Rate Limiting** - Abuse prevention
- **Environment Variables** - Sensitive data protection

## 📊 Performance Optimizations

### Frontend Optimizations

- **Code Splitting** - Lazy loading of components
- **Bundle Analysis** - Source map explorer for optimization
- **Image Optimization** - WebP format and lazy loading
- **Caching Strategies** - Static asset caching
- **Tree Shaking** - Unused code elimination

### Backend Optimizations

- **Connection Pooling** - Database connection management
- **Compression** - Response compression middleware
- **Caching** - Response caching strategies
- **Error Logging** - Structured error tracking

## 🧪 Testing Strategy

### Frontend Testing

- **Unit Tests** - Component and utility testing
- **Integration Tests** - API integration testing
- **E2E Tests** - User workflow testing

### Backend Testing

- **API Tests** - Endpoint testing
- **Database Tests** - Model and query testing
- **Integration Tests** - Full request/response testing

## 📈 Monitoring & Analytics

- **Performance Monitoring** - Vercel Analytics integration
- **Error Tracking** - Structured error logging
- **Health Checks** - API health monitoring
- **Bundle Analysis** - Frontend performance tracking

This structure promotes:

- **Maintainability** - Clear separation of concerns
- **Scalability** - Modular architecture
- **Reusability** - Shared utilities and components
- **Type Safety** - Full TypeScript coverage
- **Performance** - Optimized build and runtime
- **Security** - Comprehensive security measures
