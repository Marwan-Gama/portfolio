/**
 * Navigation Bar Component
 *
 * A clean and simple responsive navigation bar with:
 * - Desktop navigation with horizontal menu
 * - Mobile navigation with simple dropdown
 * - Active page highlighting
 * - Minimal animations for better performance
 * - Keyboard navigation support
 */

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Import constants
import { NAV_ITEMS } from "../constants";
import "../styles/components/Navbar.css";

/**
 * Navigation bar component with clean responsive design
 * @returns JSX.Element - The rendered navigation bar
 */
const Navbar = (): JSX.Element => {
  // Hooks for navigation and responsive design
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // State for mobile menu
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  /**
   * Handles navigation to home page and closes mobile menu
   */
  const handleNameClick = (): void => {
    navigate("/");
    setMobileOpen(false);
  };

  /**
   * Toggles the mobile menu open/closed state
   */
  const handleMobileToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Closes the mobile menu when a navigation item is clicked
   */
  const handleNavItemClick = (): void => {
    setMobileOpen(false);
  };

  /**
   * Handles keyboard navigation for mobile menu
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMobileToggle();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Brand Name */}
        <div
          className="brand-name"
          onClick={handleNameClick}
          onKeyDown={(e) => e.key === "Enter" && handleNameClick()}
          tabIndex={0}
          role="button"
          aria-label="Go to home page"
        >
          Marwan Abu Gama
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="nav-item" role="none">
              <RouterLink
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                role="menuitem"
                aria-current={
                  location.pathname === item.path ? "page" : undefined
                }
              >
                {item.label}
              </RouterLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={handleMobileToggle}
            onKeyDown={handleKeyDown}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`hamburger ${mobileOpen ? "open" : ""}`}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`mobile-menu ${mobileOpen ? "open" : ""}`}
          role="menu"
          aria-hidden={!mobileOpen}
        >
          <ul className="mobile-nav-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="mobile-nav-item" role="none">
                <RouterLink
                  to={item.path}
                  onClick={handleNavItemClick}
                  className={`mobile-nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  role="menuitem"
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  {item.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
