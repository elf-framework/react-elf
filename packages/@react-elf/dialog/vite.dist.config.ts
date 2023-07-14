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
      name: "@react-elf/dialog",
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "classnames",
        "@react-elf/button",
        "@react-elf/shared",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          classnames: "classNames",
          "@react-elf/button": "ReactElf.Button",
          "@react-elf/shared": "ReactElf.Shared",
        },
      },
    },
  },
  plugins: [dts({ outDir: "dist/types" })],
});
