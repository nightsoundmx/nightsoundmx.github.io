import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Cambiar a '/' cuando se conecte un dominio personalizado
  base: '/nightsound-biolinks/',
})
