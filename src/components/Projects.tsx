import { Box, Typography, Container, Paper, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React.js, featuring product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Firebase"],
      githubUrl: "https://github.com/Marwan-Gama/E-Commerce",
      period: "2024",
    },
    {
      title: "OJT-Siraj Program Project",
      description:
        "Developed a comprehensive web application during the Siraj OJT program, implementing Flask, Python, MySQL, and React. Focused on automation testing with Pytest and network management.",
      technologies: ["Flask", "Python", "MySQL", "React", "AWS S3", "Pytest"],
      githubUrl: "https://github.com/Marwan-Gama/OJT-Siraj",
      period: "2023-2024",
    },
    {
      title: "Wizard Application",
      description:
        "A wizard application developed during the OJT Program, focusing on user experience and step-by-step guidance.",
      technologies: ["Python", "Flask", "MySQL", "React"],
      githubUrl: "https://github.com/Marwan-Gama/Wizard",
      period: "2023",
    },
    {
      title: "React Training Projects",
      description:
        "A collection of React.js training projects showcasing various features and best practices in modern web development.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Marwan-Gama/react-training",
      period: "2023",
    },
    {
      title: "Saints App",
      description:
        "A Python-based application developed for managing and tracking various aspects of a community or organization.",
      technologies: ["Python", "Flask", "MySQL"],
      githubUrl: "https://github.com/Marwan-Gama/saints-app",
      period: "2023",
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
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mb: 6,
              background: "linear-gradient(45deg, #2196F3, #1976D2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            My Projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", md: "calc(50% - 16px)" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      height: "100%",
                      p: 4,
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s ease",
                      willChange: "transform",
                      transform: "translateZ(0)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 2,
                        color: "#1976D2",
                        fontWeight: "bold",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 2,
                        color: "#666",
                      }}
                    >
                      {project.period}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: "#2c3e50",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            background:
                              "linear-gradient(45deg, #2196F3, #1976D2)",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="outlined"
                      href={project.githubUrl}
                      target="_blank"
                      sx={{
                        borderColor: "#2196F3",
                        color: "#2196F3",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#1976D2",
                          color: "#1976D2",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      View on GitHub
                    </Button>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
