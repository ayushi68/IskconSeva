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
app.use(express.static(path.resolve(__dirname, "../public")));

// Serve static files from the client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

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
