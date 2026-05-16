// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Ensure SSR build treats Node builtins and problematic tanstack modules as external
  vite: {
    ssr: {
      // Keep Node builtins external, but ensure TanStack server packages are
      // bundled (noExternal) so their SSR-specific ESM code is transformed
      // correctly instead of being rewritten to browser externals.
      external: ["node:stream", "node:stream/web"],
      noExternal: ["@tanstack/router-core", "@tanstack/start-server-core"],
    },
    build: {
      rollupOptions: {
        // Treat any `node:` builtin imports as external so Rollup doesn't try to
        // replace them with browser shims. This keeps Node builtins resolved
        // at runtime in the Node SSR environment.
        external: (id: string) => id.startsWith('node:'),
      },
    },
  },
});
