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
