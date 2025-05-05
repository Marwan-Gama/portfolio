import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About", section: "about" },
    { path: "/projects", label: "Projects", section: "projects" },
    { path: "/contact", label: "Contact", section: "contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: "linear-gradient(45deg, #2196F3, #1976D2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Marwan Abu Gama
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={() => item.section && scrollToSection(item.section)}
              sx={{
                color: location.pathname === item.path ? "#1976D2" : "#666",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: location.pathname === item.path ? "100%" : "0%",
                  height: "2px",
                  background: "linear-gradient(45deg, #2196F3, #1976D2)",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
