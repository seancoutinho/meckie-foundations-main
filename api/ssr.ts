// Vercel Node handler: proxies HTTP into TanStack Start's built SSR entry.
//
// IMPORTANT: Import the SSR bundle statically (not `import(dynamicPath)`).
// `@vercel/node` file-traces dependencies from this file only; a runtime
// `import()` skips React / Tanstack / etc., so Lambda can ship without those
// packages and every route returns the app's generic 500 HTML.

// @ts-expect-error — production build emits this module before Vercel bundles the function.
import server from "../dist/server/server.js";

import type { IncomingMessage, ServerResponse } from "node:http";

function inferRequestOrigin(req: IncomingMessage): string {
  const host = (req.headers.host as string | undefined) ?? "localhost";
  const forwarded = req.headers["x-forwarded-proto"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  const first = raw?.split(",")[0]?.trim();
  const scheme =
    first === "https" || first === "http" ? first : host.startsWith("localhost") ? "http" : "https";
  return `${scheme}://${host}`;
}

async function readRequestBody(req: IncomingMessage): Promise<Buffer | undefined> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(chunks.length ? Buffer.concat(chunks) : undefined));
    req.on("error", reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    if (!server || typeof server.fetch !== "function") {
      throw new Error("SSR bundle does not export fetch.");
    }

    const rawUrl = req.url ?? "/";
    const url = new URL(rawUrl, `${inferRequestOrigin(req)}/`);

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
