import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
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
};
