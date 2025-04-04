import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // слушает на 0.0.0.0, а не только на localhost
    port: 5173
  }
})
