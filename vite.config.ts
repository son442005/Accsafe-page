import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Dùng '/' để phù hợp với custom domain https://accsafe.site/
  base: '/',
  server: {
    host: true,
  },
});


