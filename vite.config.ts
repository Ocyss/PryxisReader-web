import { resolve } from "node:path";
// https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
// https://github.com/lxsmnsyc/solid-labels?tab=readme-ov-file
import solidLabels from "vite-plugin-solid-labels";
// https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#solid-1
// import Pages from 'vite-plugin-pages' // TODO: not supported
import AutoImport from "unplugin-auto-import/vite";
import { VitePWA } from "vite-plugin-pwa";

const pathSrc = resolve(__dirname, "src");

export default defineConfig(() => ({
  build: {
    target: "esnext",
  },
  plugins: [
    solidLabels({
      dev: true,
      filter: {
        exclude: "node_modules/**/*.{ts,js,tsx,jsx}",
        include: "src/**/*.{ts,js,tsx,jsx}",
      },
    }),
    AutoImport({
      imports: ["solid-js", "@solidjs/router"],
    }),
    devtools(),
    solid(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: "#ffffff",
      },
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  server: {
    port: 3000,
  },
}));
