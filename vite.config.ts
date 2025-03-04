import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/', // Ajustar esta ruta según mi repositorio, URL base de GitHub Pages
})
//'/hans-rafael.github.io',