import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import serviceWorkerPlugin from './sw-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    serviceWorkerPlugin()
  ],
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
