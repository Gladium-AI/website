import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'n8n-cli': resolve(__dirname, 'tools/n8n-cli/index.html'),
      },
    },
  },
})
