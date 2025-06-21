import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Navbar, Home, About, Projects, Contact } from "./components";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED", // Vibrant purple
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#EC4899", // Pink
      light: "#F472B6",
      dark: "#BE185D",
    },
    background: {
      default: "#0F172A", // Dark blue
      paper: "#1E293B", // Slightly lighter blue
    },
    text: {
      primary: "#F8FAFC", // Light gray
      secondary: "#94A3B8", // Medium gray
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
      "@media (max-width:900px)": {
        fontSize: "2.2rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:900px)": {
        fontSize: "1.8rem",
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
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          transition: "all 0.3s ease",
          "@media (max-width:600px)": {
            borderRadius: "12px",
          },
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
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
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        }}
      >
        <Router>
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
                pointerEvents: "none",
              },
            }}
          >
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
