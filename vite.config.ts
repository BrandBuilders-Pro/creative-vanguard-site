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
  // Build the SSR server for Netlify. Without an explicit `nitro` option the deploy
  // plugin is skipped outside Lovable's sandbox, so a production build emits only the
  // client bundle (no server, no index.html) and every route 404s.
  // Setting the preset force-enables Nitro and targets Netlify Functions; the `output`
  // overrides restore the Netlify preset's expected paths (the config wrapper otherwise
  // forces dist/dist/server/dist/client, which the Cloudflare default assumes).
  nitro: {
    preset: "netlify",
    output: {
      dir: ".netlify/functions-internal",
      serverDir: ".netlify/functions-internal/server",
      publicDir: "dist",
    },
  },
});
