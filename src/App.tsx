/**
 * Main Application Component
 *
 * This component serves as the root of the application and sets up:
 * - React Router for navigation
 * - Global styling
 * - Main layout structure
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// Import components
import { Navbar, Home, About, Projects, Contact } from "./components";

// Import global styles
import "./styles/index.css";

/**
 * Main App component that wraps the entire application
 * @returns JSX.Element - The rendered application
 */
function App(): JSX.Element {
  return (
    <div className="app">
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {/* Navigation component */}
        <Navbar />

        {/* Main content area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
