import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://htetnaing-hub.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
