import { defineConfig } from 'vite'

export default defineConfig({
  base: '/points-of-interest/',  // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}) 