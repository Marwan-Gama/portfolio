import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Email, WhatsApp } from "@mui/icons-material";
import { useState, useCallback, useMemo } from "react";
import API_CONFIG from "../config/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success"
  );
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get API URL from configuration
  const API_URL = API_CONFIG.getApiUrl();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.name || !formData.email || !formData.message) {
        setMessageType("error");
        setMessageText("Please fill in all fields before submitting.");
        setShowMessage(true);
        return;
      }

      setIsSubmitting(true);

      // Debug logging
      console.log("🌐 API URL being used:", API_URL);
      console.log("📤 Sending data:", formData);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });

        console.log("📥 Response status:", response.status);
        console.log("📥 Response headers:", response.headers);

        const data = await response.json();
        console.log("📥 Response data:", data);

        if (response.ok && data.success) {
          setMessageType("success");
          setMessageText(
            data.message ||
              "Message sent successfully! I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" });
        } else {
          setMessageType("error");
          setMessageText(
            data.message || "Failed to send message. Please try again."
          );
        }
      } catch (error) {
        console.error("❌ Contact form error:", error);
        setMessageType("error");
        setMessageText(
          "Network error. Please check your connection and try again."
        );
      } finally {
        setIsSubmitting(false);
        setShowMessage(true);
      }
    },
    [formData, API_URL]
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: <LinkedIn />,
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/marwan-gama/",
        color: "#0077B5",
        description:
          "Connect with me on LinkedIn to discuss opportunities and collaborations",
      },
      {
        icon: <GitHub />,
        label: "GitHub",
        url: "https://github.com/Marwan-Gama",
        color: "#333",
        description: "Check out my open-source projects and contributions",
      },
      {
        icon: <Email />,
        label: "Email",
        url: "mailto:marwan.dev2@gmail.com",
        color: "#D44638",
        description: "Get in touch for professional inquiries",
      },
      {
        icon: <WhatsApp />,
        label: "WhatsApp",
        url: "https://wa.me/972505519999",
        color: "#25D366",
        description: "Message me directly on WhatsApp",
      },
    ],
    []
  );

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
            Let's Work Together!
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
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                        "& input": {
                          color: "#000000",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#1976D2",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        "&.Mui-focused": {
                          color: "#1976D2",
                        },
                      },
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                        "& input": {
                          color: "#000000",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#1976D2",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        "&.Mui-focused": {
                          color: "#1976D2",
                        },
                      },
                    }}
                  />
                  <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#2196F3",
                        },
                        "& textarea": {
                          color: "#000000",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#1976D2",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        "&.Mui-focused": {
                          color: "#1976D2",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background: "#1a237e",
                      color: "#ffffff",
                      fontWeight: "bold",
                      py: 1.5,
                      "&:hover": {
                        background: "#000051",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      },
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} />
                    ) : (
                      "Send Message"
                    )}
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

      <Snackbar
        open={showMessage}
        autoHideDuration={6000}
        onClose={() => setShowMessage(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowMessage(false)}
          severity={messageType}
          sx={{ width: "100%" }}
        >
          {messageText}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
