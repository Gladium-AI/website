import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'n8n-cli': resolve(__dirname, 'tools/n8n-cli/index.html'),
        'x-cli': resolve(__dirname, 'tools/x-cli/index.html'),
      },
    },
  },
})
