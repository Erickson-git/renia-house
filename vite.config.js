import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = nom EXACT du dépôt GitHub (pour GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: '/renia-house/',
})
