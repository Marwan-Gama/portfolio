/**
 * Application Entry Point
 *
 * Main entry point for the React application that:
 * - Renders the root component
 * - Imports global styles
 * - Sets up React StrictMode
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
