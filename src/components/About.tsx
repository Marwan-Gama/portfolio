import { Box, Typography, Container, Paper, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "CI/CD",
];

const About = () => {
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
              <span>🎓</span> Education
            </Typography>
            <Grid container spacing={3}>
              {education.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
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
                </Grid>
              ))}
            </Grid>
          </Paper>

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
              <span>💼</span> Work Experience
            </Typography>
            <Grid container spacing={3}>
              {experience.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
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
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
