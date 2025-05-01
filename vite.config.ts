import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['nasty-cases-show.loca.lt', 'b76d-2804-5d80-8140-add9-00-1003.ngrok-free.app'],
  },
})
