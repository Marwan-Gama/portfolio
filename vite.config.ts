import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    // In dev, /api is not available unless you run `vercel dev` or set VITE_API_PROXY to your deployed URL (e.g. https://your-app.vercel.app)
    ...(process.env.VITE_API_PROXY && {
      proxy: {
        "/api": { target: process.env.VITE_API_PROXY, changeOrigin: true },
      },
    }),
  },
});
