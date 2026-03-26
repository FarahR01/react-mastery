import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure public assets are copied to dist
    copyPublicDir: true,
    assetsDir: "assets",
  },
  server: {
    // In dev, serve public files
    middlewareMode: false,
  },
});
