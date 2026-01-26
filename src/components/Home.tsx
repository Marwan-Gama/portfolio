/**
 * Professional Home Page Component
 *
 * A clean, business-focused landing page featuring:
 * - Professional hero section with clear value proposition
 * - Clean, minimal design suitable for corporate clients
 * - Focus on expertise and business value
 * - Fast, simple animations for better performance
 * - Clear call-to-actions for business engagement
 */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/components/Home.css";

// Professional skills with business focus
const expertise = [
  { area: "Java & Spring Boot", description: "Enterprise applications" },
  { area: "MERN Stack", description: "Full-stack web development" },
  { area: ".NET Core & C#", description: "Microsoft ecosystem" },
  { area: "Python & Flask", description: "Backend & automation" },
  { area: "Mobile Development", description: "Android & Firebase" },
  { area: "DevOps & CI/CD", description: "Jenkins & Docker" },
];

/**
 * Professional home page component for client/HR focus
 * @returns JSX.Element - The rendered home page
 */
const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentExpertise, setCurrentExpertise] = useState(0);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);

    // Auto-rotate through expertise areas
    const interval = setInterval(() => {
      setCurrentExpertise((prev) => (prev + 1) % expertise.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /**
   * Professional navigation handlers
   */
  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  const handleAbout = (): void => handleNavigation("/about");
  const handleViewWork = (): void => handleNavigation("/projects");
  const handleContact = (): void => handleNavigation("/contact");

  /**
   * Handle CV download - opens PDF in new tab and triggers download
   */
  const handleDownloadCV = (): void => {
    const cvPath = "/static/MarwanCV.pdf";
    
    // Open PDF in new tab
    window.open(cvPath, "_blank", "noopener,noreferrer");
    
    // Trigger download as well
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "MarwanCV.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Track download event if analytics are present
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "download_cv", {
        event_category: "engagement",
        event_label: "CV Download",
      });
    }
  };

  return (
    <div className="home-container">
      <div className="container">
        {/* Professional Hero Section */}
        <section className={`hero-section ${isVisible ? "visible" : ""}`}>
          <div className="hero-content">
            {/* Professional Profile Section */}
            <div className="profile-section">
              <div className="profile-container">
                <img
                  src="/images/profile.jpg"
                  alt="Marwan Abu Gama - Software Engineer"
                  className="profile-avatar"
                />
                <div className="profile-border"></div>
              </div>
            </div>

            {/* Professional Introduction */}
            <div className="introduction-section">
              <div className="professional-greeting">
                <span className="greeting-text">Hello, I'm</span>
              </div>

              <h1 className="main-heading">
                <span className="name">Marwan Abu Gama</span>
              </h1>

              <h2 className="professional-title">Software Engineer</h2>
            </div>

            {/* Professional Action Buttons */}
            <div className="action-section">
              <div className="action-buttons">
                <button
                  onClick={handleViewWork}
                  className="action-button primary"
                  aria-label="View professional portfolio and case studies"
                >
                  <span className="button-text">View Projects</span>
                  <span className="button-icon">→</span>
                </button>

                <button
                  onClick={handleAbout}
                  className="action-button secondary"
                  aria-label="Learn about professional background and experience"
                >
                  <span className="button-text">About Me</span>
                  <span className="button-icon">→</span>
                </button>

                <button
                  onClick={handleContact}
                  className="action-button outlined"
                  aria-label="Schedule a consultation or discuss project requirements"
                >
                  <span className="button-text">Contact Me</span>
                  <span className="button-icon">→</span>
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="action-button download"
                  aria-label="Download CV as PDF"
                >
                  <span className="button-text">Download CV</span>
                  <span className="button-icon">⬇</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
