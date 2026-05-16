// Vercel Node serverless handler: forwards HTTP to TanStack Start's built server entry.
import path from "node:path";
import { pathToFileURL } from "node:url";

// Prefer final `vite build` output so manifest/hashes match `outputDirectory` (dist/client).
const SERVER_ENTRY_RELATIVE_PATHS = [
  "dist/server/server.js",
  "dist/server/index.js",
  "dist/server/entry.mjs",
  "dist-ssr/server/server.js",
  "dist-ssr/server/index.js",
  "dist-ssr/server/entry.mjs",
  "dist-ssr/entry.mjs",
];

let serverModule: {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
} | null = null;

async function loadServerModule() {
  if (serverModule) return serverModule;
  const cwd = process.cwd();
  let lastErr: unknown;
  for (const rel of SERVER_ENTRY_RELATIVE_PATHS) {
    try {
      const fileUrl = pathToFileURL(path.join(cwd, rel)).href;
      const mod = (await import(fileUrl)) as { default?: typeof serverModule };
      const entry = mod.default ?? (mod as unknown as typeof serverModule);
      serverModule = entry;
      return serverModule;
    } catch (err) {
      lastErr = err;
    }
  }
  throw (
    lastErr ??
    new Error("Server entry not found. Run production build and check dist/server output.")
  );
}

async function readRequestBody(req: {
  on: typeof import("node:stream").Readable.prototype.on;
}): Promise<Buffer | undefined> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(chunks.length ? Buffer.concat(chunks) : undefined));
    req.on("error", reject);
  });
}

export default async function handler(
  req: import("node:http").IncomingMessage,
  res: import("node:http").ServerResponse,
) {
  try {
    const server = await loadServerModule();

    if (!server || typeof server.fetch !== "function") {
      throw new Error("Loaded server module does not export a fetch handler.");
    }

    const host = (req.headers.host as string | undefined) ?? "localhost";
    const rawUrl = req.url ?? "/";
    const url = new URL(rawUrl, `http://${host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(",") : String(v));
    }

    let body: Buffer | undefined;
    if (!["GET", "HEAD"].includes(req.method ?? "GET")) {
      body = await readRequestBody(req);
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body: body && body.length ? body : undefined,
    });

    const response: Response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err: unknown) {
    console.error("SSR handler error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
