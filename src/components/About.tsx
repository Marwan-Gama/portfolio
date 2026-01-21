import { motion } from "framer-motion";

// Import constants and types
import { SOCIAL_LINKS } from "../constants";
import "../styles/components/About.css";

/**
 * About page component presenting a CV-style profile with:
 * - Hero section (name, title, contact & social links)
 * - Experience timeline
 * - Education summary
 * - Projects overview
 * - Languages section
 */
const About = (): JSX.Element => {
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
  ];

  /**
   * Work experience data
   */
  const experience = [
    {
      title: "Siraj - OJT Program",
      period: "2024",
      description:
        "On-the-Job Training (OJT) program for talented Bedouin graduates.",
      details: [
        "Collaborated on a web application project from concept to deployment.",
        "Worked with Flask, FastAPI, Python, MySQL, GitHub, HTML, CSS, JavaScript, Bootstrap, React, AWS S3/EC2/IAM.",
        "Implemented automation testing using Pytest and practiced basic networking concepts.",
      ],
      technologies:
        "Flask, FastAPI, Python, MySQL, React, Bootstrap, AWS (S3, EC2, IAM), GitHub, Pytest",
    },
    {
      title: "MindCet - Ibtikar Program",
      period: "2023",
      description:
        "Research & development program in education technology, focusing on market and user needs.",
      details: [
        "Researched the job market and defined the target audience.",
        "Designed and developed an app that meets user needs in a short time using No-Code technology.",
      ],
      technologies: "Bubble.io, Product Research, UX Discovery",
    },
    {
      title: "Perach - Private Tutor",
      period: "2021-2022",
      description:
        "Tutored college students in core CS and math subjects.",
      details: [
        "Guided students through calculus, logic, computer architecture, and programming.",
        "Covered C, C++, Python, and Assembly while focusing on problem-solving and foundations.",
      ],
      technologies: "C, C++, Python, Assembly, Academic Mentoring",
    },
  ];

  /**
   * Projects data
   */
  const projects = [
    {
      title: "Learn Up – Graduation Project",
      period: "2023 - 2024",
      description:
        "Educational app that enhances classroom engagement with interactive learning, real-time communication, and progress tracking.",
      features: [
        "Interactive classroom activities and engagement tools.",
        "Real-time communication between students and teachers.",
        "Progress tracking and insights for continuous improvement.",
      ],
      technologies: ["Android Studio", "Java", "Firebase"],
    },
    {
      title: "Web Application Development",
      period: "2023",
      description:
        "Full-stack web application built with Microsoft stack and modern development practices.",
      features: [
        "Designed and implemented ASP.NET MVC application with SQL Server backend.",
        "Exposure to Agile/Scrum, CI/CD pipelines, microservices principles.",
        "Worked with Jira, GitHub Actions, and Jenkins for workflow automation.",
      ],
      technologies: ["ASP.NET MVC", "C#", ".NET Core", "SQL Server", "Jira", "GitHub Actions", "Jenkins"],
    },
  ];

  const languages = "Arabic – Native | Hebrew – Fluent | English – Upper-Intermediate";

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
        {/* Hero / Profile Section */}
        <motion.section
          className="hero-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.div className="about-header" variants={itemVariants}>
              <motion.div
                className="about-avatar"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                👨‍💻
              </motion.div>
              <motion.h2
                className="hero-title"
                variants={itemVariants}
              >
                Marwan Abu Gama
              </motion.h2>
              <motion.div className="about-subtitle" variants={itemVariants}>
                B.Sc. Software Engineering
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-description"
              variants={itemVariants}
            >
              <p>
                Junior Software Engineer with hands-on experience in Java, MERN
                Stack, .NET Core, plus strong foundations in QA, Data
                Structures, OOP, and Algorithms. Proficient in PHP, C, C++, C#,
                Python, MySQL, MongoDB, and AWS. Passionate about clean,
                scalable code, problem-solving, and delivering high-quality
                software in Agile/Scrum environments under tight deadlines.
              </p>
            </motion.div>

            
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="career-timeline-section">
            <motion.h2 className="about-section-title" variants={itemVariants}>
              Experience
            </motion.h2>
            <div className="timeline-container">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="timeline-item"
                  variants={itemVariants}
                  custom={index}
                >
                  <div
                    className="timeline-marker"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : index === 1
                          ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                          : "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                    }}
                  >
                    <span className="timeline-icon">💼</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.period}</div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-description">{exp.description}</p>
                    {"details" in exp && Array.isArray(exp.details) && (
                      <div className="timeline-details">
                        <div className="achievements">
                          <h4>Main Contributions</h4>
                          <ul>
                            {exp.details.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        {exp.technologies && (
                          <div className="technologies">
                            <h4>Technologies</h4>
                            <div className="tech-tags">
                              {exp.technologies
                                .split(",")
                                .map((tech) => tech.trim())
                                .filter(Boolean)
                                .map((tech) => (
                                  <span
                                    key={tech}
                                    className="tech-tag-small"
                                  >
                                    {tech}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      

        {/* Education Section */}
        <motion.section
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="education-section">
            <motion.h2 className="about-section-title" variants={itemVariants}>
              Education
            </motion.h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  className="education-card"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="education-icon">🎓</div>
                  <h3 className="education-title">{edu.title}</h3>
                  {edu.period && (
                    <p className="education-period">{edu.period}</p>
                  )}
                  {edu.institution && (
                    <p className="education-institution">{edu.institution}</p>
                  )}
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="skills-section">
            <div className="skills-header">
              <div className="skills-icon">🌍</div>
              <h2 className="about-section-title">Languages</h2>
              <p>{languages}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
