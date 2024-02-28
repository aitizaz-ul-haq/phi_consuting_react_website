import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/phi-react-website/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      plugins: [
        visualizer({
          open: true, // Automatically open the report in your browser
          filename: 'bundle-analysis.html', // Output file for the report
          gzipSize: true, // Show gzip sizes
          brotliSize: true, // Show brotli sizes
        })
      ]
    },
  },
  define: {
    global: 'window', // Shim 'global' to 'window'
  },
});