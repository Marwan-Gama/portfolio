import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "mui-icons": ["@mui/icons-material"],
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
