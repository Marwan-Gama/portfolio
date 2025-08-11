/**
 * About Page Component
 *
 * A comprehensive about page that showcases:
 * - Personal introduction and background
 * - Technical skills and expertise
 * - Work experience timeline
 * - Educational background
 * - Animated sections with Framer Motion
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
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚡" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Git", icon: "📦" },
    { name: "MongoDB", icon: "🗄️" },
    { name: "NodeJS", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "Angular", icon: "🅰️" },
    { name: ".NET Core", icon: "🔵" },
    { name: "MySQL", icon: "🐬" },
    { name: "AWS", icon: "☁️" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Algorithms", icon: "🔢" },
  ];

  /**
   * Educational background data
   */
  const education = [
    {
      title: "B.Sc in Software Engineering",
      period: "2020-2024",
      institution: "Sami Shamoon College of Engineering",
      location: "Beersheba, Israel",
    },
    {
      title: "Moshal Program Member",
      period: "2020-Present",
      description:
        "Participating in a unique program that equips students with advanced academic and professional skills.",
    },
    {
      title: "Udemy Courses",
      description:
        "Web Development Bootcamp, Git & GitHub, HTML, CSS, and JavaScript.",
    },
  ];

  /**
   * Work experience data
   */
  const experience = [
    {
      title: "Siraj - OJT Program",
      period: "12/2023 – 03/2024",
      description:
        "Developed a web application using Flask, Python, MySQL, React, AWS S3, and more. Gained experience in automation testing with Pytest and network management.",
    },
    {
      title: "Ibtikar Program",
      period: "08/2023 – 11/2023",
      description:
        "Researched the job market and developed a no-code application using Bubble.io.",
    },
    {
      title: "Private Tutor",
      period: "2021 – 2022",
      description:
        "Taught programming languages (C, C++, Python, Assembly) and mathematics (calculus, logic) to college students.",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* About Me Section */}
        <section className="about-section">
          <div className="about-intro">
            <h2 className="about-section-title">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform", transform: "translateZ(0)" }}
              >
                🌟
              </motion.span>{" "}
              About Me
            </h2>
            <p className="about-intro-text">
              🎓 <strong>Software Engineering Graduate</strong> from{" "}
              <strong>Sami Shamoon College of Engineering</strong> with a
              passion for solving complex problems and building innovative
              solutions. I have hands-on experience in{" "}
              <strong>web and software development</strong>, and I am constantly
              improving my technical skills to make meaningful contributions to
              the tech community.
            </p>
            <p className="about-intro-text">
              🚀 I'm passionate about creating user-friendly applications and
              solving real-world problems through code. My journey in software
              development has equipped me with a strong foundation in both
              frontend and backend technologies, allowing me to build complete
              solutions from concept to deployment.
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="about-section">
          <div className="skills-section">
            <h2 className="about-section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-chip"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="about-section" ref={experienceRef}>
          <div className="experience-section">
            <h2 className="about-section-title">Work Experience</h2>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="about-section" ref={educationRef}>
          <div className="education-section">
            <h2 className="about-section-title">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
        </section>

        {/* Social Links Section */}
        <section className="about-section">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="social-icon">
                    {icons[key as keyof typeof icons]}
                  </span>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </motion.a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
