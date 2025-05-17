import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['9dc64329-a5c6-4011-997d-eee733bb5ce1-00-1rlp85797t967.sisko.replit.dev']
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
