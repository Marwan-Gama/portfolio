import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
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
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["@mui/icons-material"],
    exclude: ["@mui/icons-material/LinkedIn"],
  },
});
