// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable nitro with the Netlify preset so the SSR server is built and deployed
  // as a Netlify Function on Netlify's build infra. Without an explicit `nitro` option,
  // the Lovable config only runs nitro inside the Lovable sandbox and otherwise skips it,
  // producing a client-only build with no index.html — nothing usable to serve.
  // The output dirs match the Netlify preset's expectations:
  //   - server function -> .netlify/functions-internal/server/{main,server}.mjs
  //   - static assets + _redirects/_headers -> dist (the publish directory)
  nitro: {
    preset: "netlify",
    output: {
      dir: ".netlify/functions-internal",
      serverDir: ".netlify/functions-internal/server",
      publicDir: "dist",
    },
  },
});
