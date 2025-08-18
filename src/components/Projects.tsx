/**
 * Projects Page Component
 *
 * A showcase of portfolio projects featuring:
 * - Project cards with detailed information
 * - Technology stack display
 * - GitHub links for each project
 * - Responsive grid layout
 * - Fast, smooth animations and hover effects
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
      id: "learn-up",
      title: "Learn Up - Graduation Project",
      description:
        "An educational app that enhances classroom engagement with interactive learning, real-time communication, and progress tracking features. Built with Android Studio, Firebase, and Java.",
      technologies: ["Android Studio", "Firebase", "Java", "XML"],
      image: "/images/learn-up.jpg",
      githubUrl: "https://github.com/Marwan-Gama/LearnUp",
      featured: true,
    },
    {
      id: "compiler-design",
      title: "Designing Compiler",
      description:
        "Learned about lexical analysis, parsing, code generation, and optimization techniques. Built my own compiler using C++, C, and other tools (lex, yacc).",
      technologies: ["C++", "C", "Lex", "Yacc", "Compiler Design"],
      image: "/images/compiler.jpg",
      githubUrl: "https://github.com/Marwan-Gama/Compiler-Design",
      featured: true,
    },
    {
      id: "web-app-development",
      title: "Web Application Development",
      description:
        "Built a full-stack web app using ASP.NET MVC, C#, .NET Core, and SQL Server. Applied agile practices with Scrum, Git, JIRA, and CI/CD using Jenkins.",
      technologies: ["ASP.NET MVC", "C#", ".NET Core", "SQL Server", "Jenkins", "JIRA"],
      image: "/images/web-app.jpg",
      githubUrl: "https://github.com/Marwan-Gama/WebApp-Development",
      featured: false,
    },
    {
      id: "siraj-ojt-project",
      title: "Siraj OJT Program Project",
      description:
        "Collaborated on a web application project using Flask, Python, MySQL, GitHub, HTML, CSS, JavaScript, Bootstrap, React, AWS S3. Implemented automation testing with Pytest.",
      technologies: ["Flask", "Python", "MySQL", "React", "AWS S3", "Pytest", "Bootstrap"],
      image: "/images/siraj-project.jpg",
      githubUrl: "https://github.com/Marwan-Gama/Siraj-OJT",
      featured: false,
    },
    {
      id: "ibtikar-app",
      title: "Ibtikar Program App",
      description:
        "A research and development program in technology and education. Researched the job market and target audience, developed an app using No-Code technology (Bubble.io).",
      technologies: ["Bubble.io", "No-Code", "Market Research", "UI/UX Design"],
      image: "/images/ibtikar-app.jpg",
      githubUrl: "https://github.com/Marwan-Gama/Ibtikar-App",
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

  // Animation variants for faster, smoother animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1, ease: "easeOut" }
    }
  };

  return (
    <div className="projects-container">
      <motion.div 
        className="projects-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="projects-header"
          variants={itemVariants}
        >
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience in my journey
            as a developer.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              {project.featured && (
                <motion.div 
                  className="featured-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Featured
                </motion.div>
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
                  <motion.button
                    onClick={() =>
                      project.githubUrl && handleProjectClick(project.githubUrl)
                    }
                    className="project-button project-button-primary"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View Code
                  </motion.button>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button project-button-secondary"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
