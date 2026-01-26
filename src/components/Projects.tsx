/**
 * Projects Page Component
 *
 * A showcase of portfolio projects featuring:
 * - Project cards with detailed information
 * - Technology stack display
 * - GitHub links for each project
 * - Responsive grid layout
 * - Simple, fast design without animations
 */

import { useMemo, useCallback } from "react";

// Import types and constants
import { Project } from "../types";
import "../styles/components/Projects.css";

/**
 * Individual Project Card Component
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/placeholder-project.svg";
          }}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="technology-chip">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="technology-chip more-tech">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="project-actions">
          <button
            onClick={() =>
              project.githubUrl &&
              window.open(project.githubUrl, "_blank", "noopener,noreferrer")
            }
            className="project-button project-button-primary"
            aria-label={`View code for ${project.title}`}
          >
            <svg
              className="button-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button project-button-secondary"
            aria-label={`Go live to ${project.title}`}
          >
            <svg
              className="button-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Go Live
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * Projects page component showcasing portfolio work
 * @returns JSX.Element - The rendered projects page
 */
const Projects = (): JSX.Element => {
  /**
   * Portfolio projects data with detailed information
   */
  const projects: Project[] = useMemo(
    () => [
      {
        id: "CloudTask",
        title: "Cloud Task is a web-based task management system",
        description:
          "Cloud Task is a PHP-based task management system using MySQL, deployed on AWS EC2 with Apache, managed via Git and secure SSH access..",
        technologies: ["PHP", "MySQL", "AWS EC2", "Apache2" , "UserSpice Framework"],
        image: "/images/CloudTask.png",
        githubUrl: "https://github.com/Marwan-Gama/CloudTask",
        liveUrl: "https://cloud-tasks.duckdns.org/login.php",
        featured: true,
      },
      {
        id: "learn-up",
        title: "Learn Up - Graduation Project",
        description:
          "An educational app that enhances classroom engagement with interactive learning, real-time communication, and progress tracking features. Built with Android Studio, Firebase, and Java.",
        technologies: ["Android Studio", "Firebase", "Java", "XML"],
        image: "/images/learn-up.jpg",
        githubUrl: "",
        liveUrl: "",
        featured: true,
      },
      
      
      {
        id: "siraj-ojt-project",
        title: "Siraj OJT Program Project",
        description:
          "Collaborated on a web application project using Flask, Python, MySQL, GitHub, HTML, CSS, JavaScript, Bootstrap, React, AWS S3. Implemented automation testing with Pytest.",
        technologies: [
          "Flask",
          "Python",
          "MySQL",
          "React",
          "AWS S3",
          "Pytest",
          "Bootstrap",
        ],
        image: "/images/siraj-project.jpg",
        githubUrl: "",
        liveUrl: "",
        featured: false,
      },
      
    ],
    []
  );

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
