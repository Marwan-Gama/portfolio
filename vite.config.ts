import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "mui-vendor": ["@mui/material", "@mui/icons-material"],
          "framer-vendor": ["framer-motion"],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["@mui/icons-material"],
    exclude: ["@mui/icons-material/LinkedIn"],
  },
});
