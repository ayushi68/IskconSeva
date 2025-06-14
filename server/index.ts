import express from "express";
import type { Request, Response, Express } from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";
import { join, dirname } from "path";
import dotenv from "dotenv";
import { connectDB } from "./storage.js";
import { fileURLToPath } from "url";

// ✅ Fix __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Load environment variables
dotenv.config();

// ✅ Create Express app
const app: Express = express();

// ✅ Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Initialize and run the server
(async () => {
  try {
    // ✅ Connect to MongoDB
    await connectDB();
    log("Successfully connected to MongoDB");

    // ✅ Register API routes
    let server = await registerRoutes(app);

    // ✅ Dev vs Production
    if (app.get("env") === "development") {
      await setupVite(app, server);
      log("Vite development server setup complete");
    } else {
      serveStatic(app);
      log("Serving static files for production");

      // ✅ Serve SPA fallback
      app.get("*", (req: Request, res: Response) => {
        res.sendFile(join(__dirname, "../dist/index.html"));
      });
    }

    // ✅ Set timeout and start server
    server.setTimeout(30000);
    const port = Number(process.env.PORT) || 5000;

    server.listen(
      {
        port,
        host: "localhost",
      },
      () => {
        log(`Server running on http://localhost:${port}`);
      }
    );
  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : "Unknown error"}`);
    process.exit(1);
  }
})();
