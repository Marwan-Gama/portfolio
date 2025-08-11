/**
 * Material-UI theme configuration
 * Centralized theme settings for consistent styling across the application
 */

import { createTheme, Theme } from "@mui/material/styles";

/**
 * Custom theme configuration with responsive design and consistent styling
 */
export const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED", // Purple
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EC4899", // Pink
      light: "#F9A8D4",
      dark: "#BE185D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
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
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
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
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 8,
  },
  components: {
    // Button component customization
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
          transition: "all 0.3s ease",
          boxShadow: "none",
          "@media (max-width:600px)": {
            padding: "6px 16px",
            fontSize: "0.875rem",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    // Container component customization
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
    // Card component customization
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    // TextField component customization
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7C3AED",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7C3AED",
            },
          },
        },
      },
    },
    // AppBar component customization
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
