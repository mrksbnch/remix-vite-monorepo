// import { dirname } from "path";
// import { fileURLToPath } from "url";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// let root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // root,
  plugins: [remix(), tsconfigPaths()],
});
