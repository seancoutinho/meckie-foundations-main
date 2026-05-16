// Vercel Node serverless handler that forwards requests to the built SSR entry.
// It dynamically imports the server bundle produced by the SSR build.

const possiblePaths = [
  '../dist-ssr/server/server.js',
  '../dist-ssr/server/index.js',
  '../dist-ssr/server/entry.mjs',
  '../dist-ssr/entry.mjs',
  '../dist/server/server.js',
  '../dist/server/index.js',
  '../dist/server-entry.js',
];

let serverModule: any = null;

async function loadServerModule() {
  if (serverModule) return serverModule;
  for (const p of possiblePaths) {
    try {
      // dynamic import; runtime will resolve relative to the lambda working dir
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mod = await import(p);
      serverModule = mod.default ?? mod;
      return serverModule;
    } catch (err) {
      // try next path
    }
  }
  throw new Error('Server entry not found. Run the SSR build and inspect the `dist-ssr` output paths.');
}

async function readRequestBody(req: any): Promise<Buffer | undefined> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => resolve(chunks.length ? Buffer.concat(chunks) : undefined));
    req.on('error', reject);
  });
}

export default async function handler(req: any, res: any) {
  try {
    const server = await loadServerModule();

    if (!server || typeof server.fetch !== 'function') {
      throw new Error('Loaded server module does not export a fetch handler.');
    }

    const host = req.headers.host ?? 'localhost';
    const rawUrl = req.url ?? '/';
    const url = new URL(rawUrl, `http://${host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(',') : String(v));
    }

    let body: any = undefined;
    if (!['GET', 'HEAD'].includes(req.method)) {
      const b = await readRequestBody(req);
      if (b) body = b;
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const response: Response = await server.fetch(request, {}, {});

    res.status(response.status);
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err: any) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
