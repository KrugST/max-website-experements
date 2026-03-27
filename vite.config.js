import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const port = Number(env.PORT) || 8080
  const noCacheHeaders = {
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    'Surrogate-Control': 'no-store',
  }

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port,
      headers: noCacheHeaders,
    },
    preview: {
      host: '0.0.0.0',
      port,
      headers: noCacheHeaders,
      allowedHosts: [
        'max-sentsov-app-e4xoe.ondigitalocean.app',
        'maxsentsov.com',
        'www.maxsentsov.com',
      ],
    },
  }
})
