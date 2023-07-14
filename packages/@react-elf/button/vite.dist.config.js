import { defineConfig } from "vite";

import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  esbuild: {
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react",
      },
    },
  },
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@react-elf/button",
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "@react-elf/shared",
        "@react-elf/tooltip",
        "classnames"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "@react-elf/shared": "ReactElfShared",
          "@react-elf/tooltip": "ReactElfTooltip",
          classnames: "classNames"
        },
      },
    },
  },
  plugins: [dts({ outDir: "dist/types" })],
});
