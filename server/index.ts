import express from "express";
import cors from "cors";
import { setupVite, log } from "./vite";
import { createServer } from "http";
import dotenv from "dotenv";
import { registerRoutes } from "./routes"; // Custom API routes

dotenv.config();

const app = express();
const server = createServer(app);
const port = 5173;

// Middlewares
app.use(express.json());

// Optional: enable CORS only if needed (if frontend is on different domain in prod)
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Log all requests (useful for debugging)
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

(async () => {
  try {
    // ✅ Register your API routes first
    await registerRoutes(app);
    log("✅ API routes registered");

    // ✅ Then setup Vite middleware (should be LAST)
    await setupVite(app, server);
    log("✅ Vite dev middleware setup complete");

    // ✅ Start server
    server.listen(port, "localhost", () => {
      log(`🚀 Server running at: http://localhost:${port}`);

      const mongoUri = process.env.MONGODB_URI;
      if (mongoUri) {
        const maskedUri = mongoUri.replace(/(mongodb(?:\+srv)?:\/\/)([^@]+)@/, "$1****:****@");
        log(`✅ MongoDB URI: ${maskedUri}`);
      } else {
        log("⚠️ No MongoDB URI found in environment variables.");
      }
    });
  } catch (error) {
    log(`❌ Server startup failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    process.exit(1);
  }
})();
