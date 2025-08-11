# 🚀 Marwan Abu Gama - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with cutting-edge technologies and best practices for optimal performance and user experience.

## ✨ Features

### 🎨 **User Experience**

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized performance with lazy loading and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and performance optimization

### 🔧 **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **Material-UI**: Consistent, accessible component library
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with navigation
- **Form Validation**: Real-time validation with error handling
- **API Integration**: RESTful API with MongoDB backend
- **Contact Form**: Functional contact form with email notifications

### 📱 **Responsive Features**

- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly**: Proper touch targets and gestures
- **Progressive Enhancement**: Works on all browsers with graceful degradation
- **Performance**: Optimized images and assets for fast loading

## 🛠️ Technology Stack

### **Frontend Technologies**

- **React 18.2.0** - Modern UI library with hooks and concurrent features
- **TypeScript 5.2.2** - Type-safe JavaScript for better development experience
- **Material-UI 5.15.7** - React component library following Material Design
- **Framer Motion 11.0.3** - Production-ready motion library for React
- **React Router DOM 6.22.0** - Declarative routing for React applications

### **Build Tools & Development**

- **Vite 5.1.0** - Next-generation frontend build tool
- **ESLint 8.56.0** - Code linting and quality assurance
- **TypeScript ESLint 6.21.0** - TypeScript-specific linting rules
- **Source Map Explorer 2.5.3** - Bundle analysis and optimization

### **Backend Technologies**

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling for Node.js
- **CORS** - Cross-origin resource sharing middleware
- **Helmet** - Security middleware for Express applications

### **Deployment & Hosting**

- **Vercel** - Frontend deployment and hosting
- **MongoDB Atlas** - Cloud database hosting
- **Environment Variables** - Secure configuration management

### **Development Dependencies**

- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM
- **@vitejs/plugin-react** - Vite plugin for React support
- **eslint-plugin-react-hooks** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** - ESLint plugin for React Refresh
- **rimraf** - Cross-platform rm -rf utility
- **terser** - JavaScript compressor for production builds
- **vite-plugin-compression** - Vite plugin for asset compression

## 📁 Project Structure

```
portfolio/
├── 📁 src/                          # Source code
│   ├── 📁 components/               # React components
│   │   ├── 📄 Home.tsx             # Landing page component
│   │   ├── 📄 About.tsx            # About page component
│   │   ├── 📄 Projects.tsx         # Projects showcase component
│   │   ├── 📄 Contact.tsx          # Contact form component
│   │   ├── 📄 Navbar.tsx           # Navigation component
│   │   └── 📄 index.ts             # Component exports
│   ├── 📁 config/                  # Configuration files
│   │   └── 📄 api.ts               # API configuration
│   ├── 📁 constants/               # Application constants
│   │   └── 📄 index.ts             # Constants and configuration
│   ├── 📁 types/                   # TypeScript type definitions
│   │   └── 📄 index.ts             # Type interfaces
│   ├── 📁 utils/                   # Utility functions
│   │   └── 📄 index.ts             # Helper functions
│   ├── 📁 theme/                   # Material-UI theme
│   │   └── 📄 index.ts             # Theme configuration
│   ├── 📁 assets/                  # Static assets
│   ├── 📄 App.tsx                  # Main application component
│   ├── 📄 main.tsx                 # Application entry point
│   └── 📄 index.css                # Global styles
├── 📁 server/                      # Backend server code
│   ├── 📁 routes/                  # API routes
│   ├── 📁 models/                  # Database models
│   ├── 📄 server.js                # Express server setup
│   └── 📄 package.json             # Server dependencies
├── 📁 public/                      # Public assets
├── 📄 package.json                 # Frontend dependencies
├── 📄 vite.config.ts               # Vite configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 eslint.config.js             # ESLint configuration
└── 📄 README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or MongoDB Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Marwan-Gama/portfolio.git
   cd portfolio
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Environment Setup**

   Create `.env` file in the server directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   PORT=5000
   ```

5. **Start the development server**

   ```bash
   # Start frontend (in root directory)
   npm run dev

   # Start backend (in server directory)
   cd server
   npm start
   ```

The application will be available at:

- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000`

## 📜 Available Scripts

### Frontend Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

### Backend Scripts

```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
npm test             # Run tests
```

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend (.env)

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
PORT=5000
```

### Build Configuration

The project uses **Vite** for fast development and optimized production builds:

- **Hot Module Replacement (HMR)** for instant updates
- **Code splitting** for optimal loading performance
- **Asset optimization** with compression and minification
- **TypeScript** compilation with strict type checking

## 🎨 Customization

### Theme Configuration

The Material-UI theme is centralized in `src/theme/index.ts`:

```typescript
// Customize colors, typography, and component styles
export const theme = createTheme({
  palette: {
    primary: { main: "#7C3AED" },
    secondary: { main: "#EC4899" },
  },
  // ... more configuration
});
```

### Component Styling

Components use Material-UI's `sx` prop for styling:

```typescript
<Box sx={{
  display: 'flex',
  alignItems: 'center',
  // Responsive design
  flexDirection: { xs: 'column', md: 'row' }
}}>
```

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings**:

   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set environment variables** in Vercel dashboard

### Backend Deployment

The backend is configured for deployment on Vercel with:

- **Serverless functions** for API endpoints
- **MongoDB Atlas** for database hosting
- **Environment variables** for configuration

## 📊 Performance Optimization

### Frontend Optimizations

- **Code splitting** with React.lazy()
- **Image optimization** with WebP format
- **Bundle analysis** with source-map-explorer
- **Tree shaking** for unused code elimination
- **Caching strategies** for static assets

### Backend Optimizations

- **Connection pooling** for database connections
- **Request rate limiting** to prevent abuse
- **Compression middleware** for response optimization
- **Security headers** with Helmet
- **Error handling** with proper logging

## 🔒 Security Features

- **CORS configuration** for cross-origin requests
- **Helmet.js** for security headers
- **Input validation** and sanitization
- **Rate limiting** to prevent abuse
- **Environment variable** protection
- **HTTPS enforcement** in production

## 🧪 Testing

### Frontend Testing

```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Backend Testing

```bash
npm test             # Run API tests
npm run test:watch   # Run tests in watch mode
```

## 📈 Monitoring & Analytics

- **Performance monitoring** with Vercel Analytics
- **Error tracking** with proper logging
- **Health check endpoints** for uptime monitoring
- **Bundle size analysis** for optimization

## 🤝 Contributing

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- **TypeScript**: Use strict type checking
- **ESLint**: Follow code style guidelines
- **Component Structure**: Use functional components with hooks
- **Testing**: Write tests for new features
- **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: marwan.abugama@gmail.com
- **LinkedIn**: [Marwan Abu Gama](https://linkedin.com/in/marwan-abu-gama)
- **GitHub**: [@Marwan-Gama](https://github.com/Marwan-Gama)
- **Portfolio**: [Live Demo](https://portfolio-marwan-gama.vercel.app)

## 🙏 Acknowledgments

- **Material-UI** for the component library
- **Framer Motion** for animations
- **Vercel** for hosting and deployment
- **MongoDB Atlas** for database hosting
- **React Team** for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
