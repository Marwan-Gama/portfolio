/**
 * Navigation Bar Component
 *
 * A responsive navigation bar that includes:
 * - Desktop navigation with horizontal menu
 * - Mobile navigation with hamburger menu and drawer
 * - Active page highlighting
 * - Smooth transitions and animations
 */

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import constants
import { NAV_ITEMS } from "../constants";
import "../styles/components/Navbar.css";

/**
 * Navigation bar component with responsive design
 * @returns JSX.Element - The rendered navigation bar
 */
const Navbar = (): JSX.Element => {
  // Hooks for navigation and responsive design
  const location = useLocation();
  const navigate = useNavigate();

  // State for mobile drawer
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /**
   * Handles navigation to home page and closes mobile drawer
   */
  const handleNameClick = (): void => {
    navigate("/");
    setMobileOpen(false);
  };

  /**
   * Toggles the mobile drawer open/closed state
   */
  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Closes the mobile drawer when a navigation item is clicked
   */
  const handleNavItemClick = (): void => {
    setMobileOpen(false);
  };

  /**
   * Renders the mobile navigation drawer
   * @returns JSX.Element - The mobile drawer content
   */
  const renderMobileDrawer = (): JSX.Element => (
    <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
      {/* Drawer header with name and close button */}
      <div className="drawer-header">
        <div className="brand-name" onClick={handleNameClick}>
          Marwan Abu Gama
        </div>
        <button onClick={handleDrawerToggle} className="drawer-close-button">
          <svg
            className="drawer-close-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>

      {/* Navigation items list */}
      <ul className="mobile-nav-menu">
        {NAV_ITEMS.map((item) => (
          <li key={item.path} className="mobile-nav-item">
            <RouterLink
              to={item.path}
              onClick={handleNavItemClick}
              className={`mobile-nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </RouterLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand Name */}
          <div className="brand-name" onClick={handleNameClick}>
            Marwan Abu Gama
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="nav-item">
                <RouterLink
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </RouterLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={handleDrawerToggle} className="mobile-menu-button">
              <svg
                className="mobile-menu-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobile && renderMobileDrawer()}

      {/* Overlay for mobile drawer */}
      {isMobile && (
        <div
          className={`overlay ${mobileOpen ? "open" : ""}`}
          onClick={handleDrawerToggle}
        />
      )}
    </>
  );
};

export default Navbar;
