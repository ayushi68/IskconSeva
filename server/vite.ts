import express from "express";
import type { Express } from "express";
import { promises as fs } from "fs";
import { join, resolve, dirname } from "path";
import { createServer as createViteServer, createLogger } from "vite";
import type { Server } from "http";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Vite logger
const viteLogger = createLogger();

// Custom log function
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// 🟡 Vite Setup for Development
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as true,
  };

  const viteConfig = (await import("../vite.config.js")).default;

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  // Apply Vite middleware
  app.use(vite.middlewares);

  // Serve index.html through Vite transform
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = resolve(__dirname, "../client/index.html");
      let template = await fs.readFile(clientTemplate, "utf-8");

      // Append nanoid to bust cache
      template = template.replace(
        /src="\.\/src\/main\.tsx(\?v=.*)?"/,
        `src="./src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);
      log(`Serving transformed index.html for ${url}`);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      log(`Error transforming index.html for ${url}: ${e instanceof Error ? e.message : e}`);
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// 🟢 Static Asset Serving for Production
export async function serveStatic(app: Express) {
  // Serve root-level public assets
  const staticAssetsPath = resolve(process.cwd(), "public");
  try {
    await fs.stat(staticAssetsPath);
    app.use(express.static(staticAssetsPath));
  } catch {
    log("Public directory not found, skipping static asset serving");
  }

  // Serve built React/Vite app from client/dist
  const distPath = resolve(__dirname, "..", "client", "dist");
  try {
    await fs.stat(distPath);
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(resolve(distPath, "index.html"));
    });
  } catch {
    throw new Error(`❌ Missing client build at ${distPath}. Run \`npm run build\` before deploying.`);
  }
}