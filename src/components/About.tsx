import { Box, Typography, Container, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const About = () => {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚡" },
    { name: "JavaScript", icon: "📜" },
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
  ];

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
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* About Me Section */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 3,
                color: "#1976D2",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🌟
              </motion.span>{" "}
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "#2c3e50",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                textAlign: "justify",
              }}
            >
              🎓 <strong>Software Engineering Graduate</strong> from{" "}
              <strong>Sami Shamoon College of Engineering</strong> with a
              passion for solving complex problems and building innovative
              solutions. I have hands-on experience in{" "}
              <strong>web and software development</strong>, and I am constantly
              improving my technical skills to make meaningful contributions to
              the tech community.
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 3,
                color: "#1976D2",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                💻
              </motion.span>{" "}
              Technical Expertise
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Chip
                    label={`${skill.icon} ${skill.name}`}
                    sx={{
                      background: "linear-gradient(45deg, #2196F3, #1976D2)",
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>

          {/* Scroll Indicator */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <KeyboardDoubleArrowDownIcon
                sx={{
                  fontSize: 40,
                  color: "#1976D2",
                  cursor: "pointer",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1976D2",
                  mt: 1,
                  fontWeight: "medium",
                }}
              >
                Scroll to see more
              </Typography>
            </motion.div>
          </Box>

          {/* Education Section */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 3,
                color: "#1976D2",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🎓
              </motion.span>{" "}
              Education
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#1976D2", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    {item.period && (
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#666", mb: 1 }}
                      >
                        {item.period}
                      </Typography>
                    )}
                    {item.institution && (
                      <Typography
                        variant="body1"
                        sx={{ color: "#2c3e50", mb: 1 }}
                      >
                        {item.institution}
                        {item.location && `, ${item.location}`}
                      </Typography>
                    )}
                    {item.description && (
                      <Typography variant="body1" sx={{ color: "#2c3e50" }}>
                        {item.description}
                      </Typography>
                    )}
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Paper>

          {/* Experience Section */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 3,
                color: "#1976D2",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                💼
              </motion.span>{" "}
              Work Experience
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#1976D2", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#666", mb: 1 }}
                    >
                      {item.period}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#2c3e50" }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
