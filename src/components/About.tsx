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
   * Educational background data
   */
  const education = [
    {
      title: "B.Sc. Software Engineering",
      period: "2020-2024",
      institution: "Sami Shamoon College of Engineering (SCE)",
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
        "Completed courses in Web Development Bootcamp, Git & GitHub, HTML, CSS, and JavaScript.",
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
        "On-the-Job Training (OJT) - training program for talented Bedouin graduates. Collaborated on a web application project using: Flask, Python, MySQL, GitHub, HTML, CSS, JavaScript, Bootstrap, React, AWS S3. Implemented automation testing with Pytest and gained hands-on experience in basic networking concepts.",
    },
    {
      title: "MindCet - Ibtikar Program",
      period: "2023",
      description:
        "A research and development program in the field of technology and education, we researched the job market and the target audience and developed an app that meets the needs in a short time using No-Code technology (Bubble.io).",
    },
    {
      title: "Perach - Private Tutor",
      period: "2021-2022",
      description:
        "Tutored college students in calculus, logic, computer architecture, and programming (C, C++, Python, Assembly).",
    },
  ];

  // Animation variants for faster, smoother animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
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
            <motion.div className="about-header" variants={itemVariants}>
              <motion.div
                className="about-avatar"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                👨‍💻
              </motion.div>
              <motion.h2
                className="about-section-title"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div className="about-subtitle" variants={itemVariants}>
                Junior Software Engineer
              </motion.div>
            </motion.div>

            <motion.div className="about-description" variants={itemVariants}>
              <p>
                Junior Software Engineer with hands-on experience in Java, MERN
                Stack, .NET Core, Spring Boot, plus strong foundations in QA,
                Data Structures, OOP, and Algorithms. Proficient in C, C++, C#,
                Python, MySQL, MongoDB, and Docker. Passionate about clean,
                scalable code, problem-solving, and delivering high-quality
                software in Agile/Scrum environments under tight deadlines.
              </p>
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
            <motion.h2 className="about-section-title" variants={itemVariants}>
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

        {/* Education Section */}
        <motion.section
          className="about-section"
          ref={educationRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="education-section">
            <motion.h2 className="about-section-title" variants={itemVariants}>
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
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
