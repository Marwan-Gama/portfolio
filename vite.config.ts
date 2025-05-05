import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      external: ["@mui/icons-material"],
      output: {
        globals: {
          "@mui/icons-material": "MuiIcons",
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["@mui/icons-material"],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
