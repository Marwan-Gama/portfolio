/**
 * Home Page Component
 *
 * The landing page of the portfolio that includes:
 * - Hero section with profile image and introduction
 * - Call-to-action buttons for navigation
 * - Responsive design for all screen sizes
 * - Smooth animations and transitions
 */

import { useNavigate } from "react-router-dom";
import "../styles/components/Home.css";

/**
 * Home page component with hero section and navigation buttons
 * @returns JSX.Element - The rendered home page
 */
const Home = (): JSX.Element => {
  const navigate = useNavigate();

  /**
   * Navigation handlers for different sections
   */
  const handleAbout = (): void => {
    navigate("/about");
  };

  const handleViewWork = (): void => {
    navigate("/projects");
  };

  const handleContact = (): void => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      <div className="container">
        <div className="home-content">
          {/* Profile Avatar */}
          <img
            src="/images/profile.jpg"
            alt="Marwan Abu Gama"
            className="profile-avatar"
          />

          {/* Main Heading */}
          <h1 className="main-heading">Hi there 👋, I'm Marwan Abu Gama</h1>

          {/* Subtitle */}
          <h2 className="subtitle">Software Engineer | Full Stack Developer</h2>

          {/* Action Buttons */}
          <div className="action-buttons">
            {/* About Me Button */}
            <button onClick={handleAbout} className="action-button">
              About Me
            </button>

            {/* View My Work Button */}
            <button onClick={handleViewWork} className="action-button">
              View My Work
            </button>

            {/* Contact Me Button */}
            <button onClick={handleContact} className="outlined-button">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
