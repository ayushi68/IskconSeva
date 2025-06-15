import express from "express";
import type { Request, Response, Express } from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";
import { join, dirname } from "path";
import dotenv from "dotenv";
import { connectDB } from "./storage.js";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

let __dirname = "";
try {
  __dirname = dirname(fileURLToPath(import.meta.url));
} catch (e) {
  log(`Failed to resolve __dirname: ${e instanceof Error ? e.message : e}`);
}

const app: Express = express();

// Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize server and connect to MongoDB
(async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    log("Successfully connected to MongoDB");

    let server = await registerRoutes(app);

    if (app.get("env") === "development") {
      // Use Vite as middleware in development
      await setupVite(app, server);
      log("Vite development server setup complete");
    } else {
      // Serve Vite build output in production
      const staticDir = join(__dirname, "../dist/public");
      app.use(
        express.static(staticDir, {
          setHeaders: (res, filePath) => {
            if (filePath.endsWith(".js")) {
              res.setHeader("Content-Type", "application/javascript");
            }
            // Explicitly prevent serving .tsx files
            if (filePath.endsWith(".tsx")) {
              res.status(403).end("Forbidden: .tsx files are not served in production");
            }
          },
        })
      );
      log("Serving static files for production from " + staticDir);

      // Fallback for SPA
      app.get("*", (req: Request, res: Response) => {
        res.sendFile(join(staticDir, "index.html"));
      });
    }

    // Set server timeout to 30 seconds
    server.setTimeout(30000);

    // Start server
    const port = Number(process.env.PORT) || 5000;
    server.listen(
      {
        port,
        host: "0.0.0.0",
      },
      () => {
        log(`Server running on http://0.0.0.0:${port}`);
      }
    );
  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : "Unknown error"}`);
    process.exit(1);
  }
})();