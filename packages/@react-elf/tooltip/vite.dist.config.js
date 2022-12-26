// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  build: {
    emptyOutDir: false,
    minify: false,
    esbuild: {
      keepNames: true,
    },
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "tooltip",
      fileName: (format) => `tooltip.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [],
});
