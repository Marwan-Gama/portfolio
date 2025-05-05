# Marwan Abu Gama's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Material-UI.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging user experience with hover effects and transitions
- **Project Showcase**: Detailed display of projects with technologies used
- **Contact Form**: Easy way for visitors to get in touch
- **Social Links**: Direct links to professional profiles

## 🛠️ Technologies Used

- React.js
- TypeScript
- Material-UI
- Framer Motion
- HTML5 & CSS3

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── App.tsx
└── index.tsx
```

## 🎨 Design Features

- Gradient text effects
- Glassmorphism design elements
- Smooth animations and transitions
- Modern color scheme
- Responsive typography
- Interactive hover effects

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Marwan-Gama/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Vercel CLI (`npm install -g vercel`)

### Deployment Options

#### Option 1: Using the Deployment Script (Recommended)

1. Make the script executable:
   ```bash
   chmod +x deploy.sh
   ```
2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

#### Option 2: Manual Deployment

1. Clean previous builds:
   ```bash
   npm run clean
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

#### Option 3: Using npm Scripts

1. Clean and build:
   ```bash
   npm run predeploy
   ```
2. Deploy:
   ```bash
   npm run deploy
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts
- `npm run deploy` - Deploy to production

## 🔧 Configuration

The project uses the following configuration files:

- `vercel.json` - Vercel deployment configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration

## 📝 Notes

- The project is configured for optimal performance with caching and compression
- All static assets are cached for 1 year
- Security headers are properly configured
- The build process is optimized for production
- Material-UI icons are properly configured for production builds

## 🔗 Links

- [GitHub Profile](https://github.com/Marwan-Gama)
- [LinkedIn Profile](https://www.linkedin.com/in/marwan-gama/)

## 📧 Contact

For professional inquiries, please reach out via:

- Email: marwan.dev2@gmail.com
- LinkedIn: [Marwan Abu Gama](https://www.linkedin.com/in/marwan-gama/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📱 Responsive Design

The portfolio is designed to be fully responsive and works on:

- Mobile devices
- Tablets
- Desktop computers
- Large screens
