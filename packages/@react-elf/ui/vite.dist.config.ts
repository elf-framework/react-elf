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
      name: "@react-elf/ui",
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "@react-elf/button",
        "@react-elf/tooltip",
        "@react-elf/notification",
        "@react-elf/popover",
        "@react-elf/alert",
        "@react-elf/shared",
        "@react-elf/layout",
        "@react-elf/menu",
        "@react-elf/divider",

        "@react-elf/dialog",
        "@react-elf/toast",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@react-elf/button": "Button",
          "@react-elf/tooltip": "Tooltip",
          "@react-elf/notification": "Notification",
          "@react-elf/popover": "Popover",
          "@react-elf/shared": "Shared",
          "@react-elf/alert": "Alert",
          "@react-elf/layout": "Layout",
          "@react-elf/menu": "Menu",
          "@react-elf/divider": "Divider",
          "@react-elf/dialog": "Dialog",
          "@react-elf/toast": "Toast",
        },
      },
    },
  },
  plugins: [dts({ outDir: "dist/types" })],
});
