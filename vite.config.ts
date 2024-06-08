import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import solid from 'vite-plugin-solid'

// https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
import devtools from 'solid-devtools/vite'
// https://github.com/lxsmnsyc/solid-labels?tab=readme-ov-file
import solidLabels from 'vite-plugin-solid-labels'
// https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#solid-1
// import Pages from 'vite-plugin-pages' // TODO: not supported
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig(() => ({
  plugins: [
    solidLabels({
      dev: true,
      filter: {
        include: 'src/**/*.{ts,js,tsx,jsx}',
        exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
      },
    }),
    AutoImport({
      imports: ['solid-js'],
    }),
    Components({
      resolvers: [],
    }),
    devtools(),
    solid(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
}),
)
