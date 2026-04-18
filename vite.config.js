import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";


export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    sourcemap: false,
    cssCodeSplit: true,
    emptyOutDir: true
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    legacy({
      targets: ["IE 11, Firefox ESR"],
      modernTargets: [
        "chrome >= 70",
        "firefox >= 70",
        "safari >= 11",
        "edge >= 18",
      ],
      additionalLegacyPolyfills: true,
    }),
  ],
});
