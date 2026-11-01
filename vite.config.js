import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [
          path.resolve(import.meta.dirname, 'src/styles'),
          path.resolve(import.meta.dirname, 'src'),
        ],
      }
    }
  }
})
