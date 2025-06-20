import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  root: path.resolve(__dirname, "client"), // React app root
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Output to dist/public for Express to serve
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@db": path.resolve(__dirname, "db"),
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  // 👇 Optional for local dev, ignored in production
  // server: {
  //   host: "0.0.0.0", // ensures accessibility in Docker/Render/local
  //   port: 5173,
  //   allowedHosts: ["https://iskconseva.onrender.com/"], // allows access from any host
  //   // strictPort: true, // fails if port is already in use
  // },
});
