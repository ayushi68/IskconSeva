import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
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
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  // Mount Vite middleware for all non-API routes
  app.use((req, res, next) => {
    if (!req.url.startsWith("/api")) {
      vite.middlewares(req, res, next);
    } else {
      next();
    }
  });

  // Serve index.html for SPA routes (non-API)
  app.get(/^(?!\/api).*/, async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      if (!fs.existsSync(clientTemplate)) {
        throw new Error(`index.html not found at ${clientTemplate}`);
      }
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200)
        .set({
          "Content-Type": "text/html",
          "Cache-Control": "no-cache",
        })
        .end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      log(`Error serving ${url}: ${(e as Error).message}`, "vite");
      next(e);
    }
  });

  return vite;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(
    express.static(distPath, {
      setHeaders: (res, filePath) => {
        log(`Serving static file: ${filePath}`, "static");
        if (filePath.match(/\.(js|mjs)$/)) {
          res.setHeader("Content-Type", "application/javascript");
        } else if (filePath.match(/\.(ts|tsx)$/)) {
          res.status(403).end("Forbidden: .ts/.tsx files are not served in production");
        } else if (filePath.endsWith(".wasm")) {
          res.setHeader("Content-Type", "application/wasm");
        }
        res.setHeader("Cache-Control", "no-cache");
      },
    })
  );

  app.get(/^(?!\/api).*/, (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    log(`Serving index.html for ${req.url}`, "static");
    res.set({
      "Content-Type": "text/html",
      "Cache-Control": "no-cache",
    }).sendFile(indexPath, (err) => {
      if (err) {
        log(`Error serving index.html for ${req.url}: ${err.message}`, "static");
        res.status(500).end("Internal Server Error");
      }
    });
  });
}
