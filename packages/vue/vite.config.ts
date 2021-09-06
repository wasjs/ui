import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const resolve = {
  alias: [
    {
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    },
  ]
}

const plugins = [vue()]

const libraryBuild = {

  lib: {
    entry: path.resolve(__dirname, 'src/index.ts'),
    name: 'was',
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: 'Vue',
      },
    },
  },
}

export default defineConfig(({ command, mode }) => {
  // if (command === 'build' && mode === 'site') return { resolve, plugins }
  return { resolve, plugins, build: libraryBuild }
})