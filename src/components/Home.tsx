import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };

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
      {/* Floating particles background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "rgba(33, 150, 243, 0.2)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginBottom: "2rem" }}
            >
              <Avatar
                src="/images/profile.jpg"
                alt="Marwan Abu Gama"
                sx={{
                  width: { xs: 150, sm: 180, md: 200 },
                  height: { xs: 150, sm: 180, md: 200 },
                  border: "4px solid #2196F3",
                  boxShadow: "0 4px 20px rgba(33, 150, 243, 0.3)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -4,
                    left: -4,
                    right: -4,
                    bottom: -4,
                    border: "2px solid rgba(33, 150, 243, 0.3)",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h1"
                component="h1"
                align="center"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  background: "linear-gradient(45deg, #2196F3, #1976D2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "50%",
                    height: "3px",
                    background:
                      "linear-gradient(90deg, transparent, #2196F3, transparent)",
                  },
                }}
              >
                Hi there 👋, I'm Marwan Abu Gama
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="h5"
                component="h2"
                align="center"
                sx={{
                  color: "#1976D2",
                  fontWeight: "medium",
                  mb: 4,
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                Software Engineer | Full Stack Developer
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAbout}
                  sx={{
                    background: "linear-gradient(45deg, #2196F3, #1976D2)",
                    color: "white",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    minWidth: "200px",
                  }}
                >
                  About Me
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
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
                    minWidth: "200px",
                  }}
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
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
                    minWidth: "200px",
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
