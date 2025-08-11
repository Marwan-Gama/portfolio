/**
 * Projects Page Component
 *
 * A showcase of portfolio projects featuring:
 * - Project cards with detailed information
 * - Technology stack display
 * - GitHub links for each project
 * - Responsive grid layout
 * - Smooth animations and hover effects
 */

import { motion } from "framer-motion";

// Import types and constants
import { Project } from "../types";
import "../styles/components/Projects.css";

/**
 * Projects page component showcasing portfolio work
 * @returns JSX.Element - The rendered projects page
 */
const Projects = (): JSX.Element => {
  /**
   * Portfolio projects data with detailed information
   */
  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React.js, featuring product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Firebase"],
      image: "/images/ecommerce.jpg",
      githubUrl: "https://github.com/Marwan-Gama/E-Commerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      id: "ojt-siraj-project",
      title: "OJT-Siraj Program Project",
      description:
        "Developed a comprehensive web application during the Siraj OJT program, implementing Flask, Python, MySQL, and React. Focused on automation testing with Pytest and network management.",
      technologies: ["Flask", "Python", "MySQL", "React", "AWS S3", "Pytest"],
      image: "/images/siraj-project.jpg",
      githubUrl: "https://github.com/Marwan-Gama/OJT-Siraj",
      featured: true,
    },
    {
      id: "wizard-application",
      title: "Wizard Application",
      description:
        "A wizard application developed during the OJT Program, focusing on user experience and step-by-step guidance.",
      technologies: ["Python", "Flask", "MySQL", "React"],
      image: "/images/wizard-app.jpg",
      githubUrl: "https://github.com/Marwan-Gama/Wizard",
      featured: false,
    },
    {
      id: "react-training",
      title: "React Training Projects",
      description:
        "A collection of React.js training projects showcasing various features and best practices in modern web development.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
      image: "/images/react-training.jpg",
      githubUrl: "https://github.com/Marwan-Gama/react-training",
      featured: false,
    },
    {
      id: "saints-app",
      title: "Saints App",
      description:
        "A Python-based application developed for managing and tracking various aspects of a community or organization.",
      technologies: ["Python", "Flask", "MySQL"],
      image: "/images/saints-app.jpg",
      githubUrl: "https://github.com/Marwan-Gama/saints-app",
      featured: false,
    },
  ];

  /**
   * Handle project card click to open GitHub repository
   * @param url - GitHub repository URL
   */
  const handleProjectClick = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience in my journey
            as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="technology-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    onClick={() =>
                      project.githubUrl && handleProjectClick(project.githubUrl)
                    }
                    className="project-button project-button-primary"
                  >
                    View Code
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button project-button-secondary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
