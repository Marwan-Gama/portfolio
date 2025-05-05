import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/marwan-gama/",
      color: "#0077B5",
      description:
        "Connect with me on LinkedIn to discuss opportunities and collaborations",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      url: "https://github.com/Marwan-Gama",
      color: "#333",
      description: "Check out my open-source projects and contributions",
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      url: "mailto:marwan.dev2@gmail.com",
      color: "#D44638",
      description: "Get in touch for professional inquiries",
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
            Get in Touch
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 16px)" },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
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
                  <span>📧</span> Contact Form
                </Typography>
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: "linear-gradient(45deg, #2196F3, #1976D2)",
                      color: "white",
                      fontWeight: "bold",
                      py: 1.5,
                      "&:hover": {
                        background: "linear-gradient(45deg, #1976D2, #1565C0)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 16px)" },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
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
                  <span>🌐</span> Connect With Me
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outlined"
                      startIcon={social.icon}
                      href={social.url}
                      target="_blank"
                      sx={{
                        justifyContent: "flex-start",
                        borderColor: social.color,
                        color: social.color,
                        fontWeight: "bold",
                        py: 2,
                        "&:hover": {
                          background: `${social.color}15`,
                          borderColor: social.color,
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {social.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#666" }}>
                          {social.description}
                        </Typography>
                      </Box>
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
