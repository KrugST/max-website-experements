import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const port = Number(env.PORT) || 8080

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port,
    },
    preview: {
      host: '0.0.0.0',
      port,
      allowedHosts: [
        'max-sentsov-app-e4xoe.ondigitalocean.app',
        'maxsentsov.com',
        'www.maxsentsov.com',
      ],
    },
  }
})
