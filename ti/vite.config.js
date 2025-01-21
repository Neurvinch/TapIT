import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ca78-2406-7400-c4-70ee-adc8-39f4-e46a-d075.ngrok-free.app'
    ],
  },
})
