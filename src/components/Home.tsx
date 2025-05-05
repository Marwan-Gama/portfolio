import { Box, Typography, Button, Container, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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

  const handleViewWork = () => {
    navigate("/projects");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)",
          zIndex: 0,
        },
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
              fontWeight: "bold",
              mb: 4,
              background: "linear-gradient(45deg, #2196F3, #1976D2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Hi there 👋, I'm Marwan Abu Gama
          </Typography>

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
              <span>🌟</span> About Me
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
              <span>💻</span> Technical Expertise
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill.name}
                  label={`${skill.icon} ${skill.name}`}
                  sx={{
                    background: "linear-gradient(45deg, #2196F3, #1976D2)",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleViewWork}
                sx={{
                  background: "linear-gradient(45deg, #2196F3, #1976D2)",
                  color: "white",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    background: "linear-gradient(45deg, #1976D2, #1565C0)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleContact}
                sx={{
                  borderColor: "#2196F3",
                  color: "#2196F3",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "#1976D2",
                    color: "#1976D2",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
