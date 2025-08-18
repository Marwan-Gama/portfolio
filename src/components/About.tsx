/**
 * About Page Component
 *
 * A comprehensive about page that showcases:
 * - Personal introduction and background
 * - Technical skills and expertise
 * - Work experience timeline
 * - Educational background
 * - Fast, smooth animations with Framer Motion
 */

import { motion } from "framer-motion";
import { useRef } from "react";

// Import constants and types
import { SOCIAL_LINKS } from "../constants";
import "../styles/components/About.css";

/**
 * About page component with personal information, skills, and experience
 * @returns JSX.Element - The rendered about page
 */
const About = (): JSX.Element => {
  // Refs for scroll navigation
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  /**
   * Technical skills data with icons and names
   */
  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "C#", icon: "🔵" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🗄️" },
    { name: "MySQL", icon: "🐬" },
    { name: "Spring Boot", icon: "🍃" },
    { name: ".NET Core", icon: "🔵" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "AWS", icon: "☁️" },
    { name: "Android Studio", icon: "📱" },
    { name: "Firebase", icon: "🔥" },
    { name: "Jenkins", icon: "🤖" },
    { name: "JIRA", icon: "📋" },
    { name: "Agile/Scrum", icon: "🔄" },
    { name: "QA Testing", icon: "🧪" },
    { name: "Data Structures", icon: "🏗️" },
    { name: "Algorithms", icon: "🔢" },
    { name: "OOP", icon: "🎯" },
  ];

  /**
   * Educational background data
   */
  const education = [
    {
      title: "B.Sc. Software Engineering",
      period: "2020-2024",
      institution: "Sami Shamoon College of Engineering (SCE)",
      location: "Beersheba, Israel",
      description: "Graduated in 2024, Specialization in Cybersecurity",
    },
    {
      title: "Moshal Program Member",
      period: "2020-Present",
      description:
        "Awarded a global scholarship empowering top students with skills for success in academics, career, and life.",
    },
    {
      title: "Udemy Courses",
      period: "2019-Present",
      description:
        "Web Development Bootcamp, Git & GitHub, HTML, CSS, and JavaScript.",
    },
    {
      title: "Technion - Preparatory Year",
      period: "2018-2019",
      description: "Focused studies in Psychometry, Math, Physics.",
    },
  ];

  /**
   * Work experience data
   */
  const experience = [
    {
      title: "Siraj - OJT Program",
      period: "2024",
      description:
        "On-the-Job Training (OJT) program for talented Bedouin graduates. Collaborated on a web application project using Flask, Python, MySQL, GitHub, HTML, CSS, JavaScript, Bootstrap, React, AWS S3. Implemented automation testing with Pytest and gained hands-on experience in basic networking concepts.",
    },
    {
      title: "MindCet - Ibtikar Program",
      period: "2023",
      description:
        "A research and development program in technology and education. Researched the job market and target audience, developed an app that meets needs using No-Code technology (Bubble.io).",
    },
    {
      title: "Perach - Private Tutor",
      period: "2021-2022",
      description:
        "Tutored college students in calculus, logic, computer architecture, and programming (C, C++, Python, Assembly).",
    },
  ];

  /**
   * Projects data
   */
  const projects = [
    {
      title: "Learn Up - Graduation Project",
      period: "2023-2024",
      description:
        "An educational app that enhances classroom engagement with interactive learning, real-time communication, and progress tracking features. Built with Android Studio, Firebase, and Java.",
    },
    {
      title: "Designing Compiler",
      period: "2023",
      description:
        "Learned about lexical analysis, parsing, code generation, and optimization techniques. Built my own compiler using C++, C, and other tools (lex, yacc).",
    },
    {
      title: "Web Application Development",
      period: "2023",
      description:
        "Built a full-stack web app using ASP.NET MVC, C#, .NET Core, and SQL Server. Applied agile practices with Scrum, Git, JIRA, and CI/CD using Jenkins.",
    },
  ];

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <div className="about-container">
      <div className="about-content">
        {/* About Me Section */}
        <motion.section 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="about-intro">
            <motion.h2 
              className="about-section-title"
              variants={itemVariants}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform", transform: "translateZ(0)" }}
              >
                🌟
              </motion.span>{" "}
              About Me
            </motion.h2>
            <motion.p 
              className="about-intro-text"
              variants={itemVariants}
            >
              🎓 <strong>Junior Software Engineer</strong> with hands-on experience in{" "}
              <strong>Java, MERN Stack, .NET Core, Spring Boot</strong>, plus strong foundations in{" "}
              <strong>QA, Data Structures, OOP, and Algorithms</strong>. Proficient in{" "}
              <strong>C, C++, C#, Python, MySQL, MongoDB, and Docker</strong>.
            </motion.p>
            <motion.p 
              className="about-intro-text"
              variants={itemVariants}
            >
              🚀 Passionate about clean, scalable code, problem-solving, and delivering high-quality software in{" "}
              <strong>Agile/Scrum environments</strong> under tight deadlines. I specialize in building robust applications 
              and have experience with modern development practices including CI/CD, automation testing, and cloud services.
            </motion.p>
            <motion.p 
              className="about-intro-text"
              variants={itemVariants}
            >
              🌍 <strong>Languages:</strong> Arabic (Native) | Hebrew (Fluent) | English (Upper-Intermediate)
            </motion.p>
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="skills-section">
            <motion.h2 
              className="about-section-title"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h2>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-chip"
                  variants={skillVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section 
          className="about-section" 
          ref={experienceRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="experience-section">
            <motion.h2 
              className="about-section-title"
              variants={itemVariants}
            >
              Work Experience
            </motion.h2>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="experience-item"
                variants={itemVariants}
                custom={index}
              >
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="projects-section">
            <motion.h2 
              className="about-section-title"
              variants={itemVariants}
            >
              Key Projects
            </motion.h2>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-item"
                variants={itemVariants}
                custom={index}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="about-section" 
          ref={educationRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="education-section">
            <motion.h2 
              className="about-section-title"
              variants={itemVariants}
            >
              Education
            </motion.h2>
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                className="education-item"
                variants={itemVariants}
                custom={index}
              >
                <h3 className="education-title">{edu.title}</h3>
                {edu.period && <p className="education-period">{edu.period}</p>}
                {edu.institution && (
                  <p className="education-institution">{edu.institution}</p>
                )}
                {edu.location && (
                  <p className="education-location">{edu.location}</p>
                )}
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Links Section */}
        <motion.section 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="social-links">
            {Object.entries(SOCIAL_LINKS).map(([key, url], index) => {
              const icons = {
                github: "🐙",
                linkedin: "💼",
                twitter: "🐦",
                email: "📧",
              };

              return (
                <motion.a
                  key={key}
                  href={key === "email" ? `mailto:${url}` : url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  variants={skillVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <span className="social-icon">
                    {icons[key as keyof typeof icons]}
                  </span>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
