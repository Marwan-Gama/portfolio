import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleNameClick = () => {
    navigate("/");
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About", section: "about" },
    { path: "/projects", label: "Projects", section: "projects" },
    { path: "/contact", label: "Contact", section: "contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            background: "linear-gradient(45deg, #2196F3, #1976D2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
          onClick={handleNameClick}
        >
          Marwan Abu Gama
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#666" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={() => item.section && scrollToSection(item.section)}
            sx={{
              color: location.pathname === item.path ? "#1976D2" : "#666",
              fontWeight: location.pathname === item.path ? "bold" : "normal",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.08)",
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
      <Toolbar sx={{ minHeight: { xs: "56px", sm: "64px" } }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              cursor: "pointer",
              background: "linear-gradient(45deg, #2196F3, #1976D2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={handleNameClick}
          >
            Marwan Abu Gama
          </Typography>
        </motion.div>
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => item.section && scrollToSection(item.section)}
                sx={{
                  color: location.pathname === item.path ? "#1976D2" : "#666",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  position: "relative",
                  willChange: "transform",
                  transform: "translateZ(0)",
                  fontSize: { sm: "0.875rem", md: "1rem" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: location.pathname === item.path ? "100%" : "0%",
                    height: "2px",
                    background: "linear-gradient(45deg, #2196F3, #1976D2)",
                    transition: "width 0.2s ease",
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
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color: "#666" }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
