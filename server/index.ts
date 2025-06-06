import express, { type Request, Response, NextFunction, Express } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./storage";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
app.use(express.static(path.resolve(__dirname, "../public")));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Global error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  log(`Error: ${status} - ${message}`);
  res.status(status).json({ message });
});

// Initialize server and connect to MongoDB
(async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    log("Successfully connected to MongoDB");

    // Register routes
    const server = await registerRoutes(app);

    // Set server timeout to 30 seconds
    server.setTimeout(30000);

    // Set up Vite for development or serve static files for production
    if (app.get("env") === "development") {
      await setupVite(app, server);
      log("Vite development server setup complete");
    } else {
      serveStatic(app);
      log("Serving static files for production");
    }

    // Start server
    const port = 5000;
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