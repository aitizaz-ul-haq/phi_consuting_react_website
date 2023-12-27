import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/phi_consulting_react_website',
  build: {
    assetsDir: 'assets',
  },
});