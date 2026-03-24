import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  // Depuis `node_modules/blocks` (GitHub), certains setups ne résolvent pas les peers ; alias explicite.
  resolve: {
    alias: {
      '@mdi/react': path.resolve(__dirname, 'node_modules/@mdi/react'),
      '@mdi/js': path.resolve(__dirname, 'node_modules/@mdi/js'),
    },
  },
  optimizeDeps: {
    include: ['blocks', '@mdi/react'],
  },
})
