import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline, Typography } from "@mui/material";
import { Navbar, Home, About, Projects, Contact } from "./components";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",
    },
    secondary: {
      main: "#EC4899",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:900px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
          transition: "all 0.3s ease",
          "@media (max-width:600px)": {
            padding: "6px 16px",
            fontSize: "0.875rem",
          },
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", background: "#f8f9fa" }}>
        <Router>
          <Navbar />
          <Box component="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
