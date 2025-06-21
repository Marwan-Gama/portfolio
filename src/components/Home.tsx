import { Box, Typography, Button, Container, Avatar } from "@mui/material";
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
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Avatar
            src="/images/profile.jpg"
            alt="Marwan Abu Gama"
            sx={{
              width: { xs: 150, sm: 180, md: 200 },
              height: { xs: 150, sm: 180, md: 200 },
              border: "4px solid #2196F3",
              boxShadow: "0 4px 20px rgba(33, 150, 243, 0.3)",
              mb: 4,
            }}
          />

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
            }}
          >
            Hi there 👋, I'm Marwan Abu Gama
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              color: "#1976D2",
              fontWeight: "medium",
              mb: 4,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            Software Engineer | Full Stack Developer
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1, md: 0.5 },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              maxWidth: { xs: "100%", sm: "none" },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleAbout}
              sx={{
                background: "linear-gradient(45deg, #2196F3, #1976D2)",
                color: "white",
                fontWeight: "bold",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.2, sm: 1.5 },
                borderRadius: 2,
                width: { xs: "100%", sm: "auto" },
                minWidth: { xs: "auto", sm: "200px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              About Me
            </Button>

            <Button
              variant="contained"
              size="large"
              onClick={handleViewWork}
              sx={{
                background: "linear-gradient(45deg, #2196F3, #1976D2)",
                color: "white",
                fontWeight: "bold",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.2, sm: 1.5 },
                borderRadius: 2,
                width: { xs: "100%", sm: "auto" },
                minWidth: { xs: "auto", sm: "200px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
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
                px: { xs: 3, sm: 4 },
                py: { xs: 1.2, sm: 1.5 },
                borderRadius: 2,
                width: { xs: "100%", sm: "auto" },
                minWidth: { xs: "auto", sm: "200px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
