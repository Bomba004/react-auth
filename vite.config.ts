import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // يتجاهل تحذيرات dependencies
        logger: {
          warn: () => {} // يعطل جميع تحذيرات SCSS
        }
      }
    }
  },
  // base: "/react-auth/", // تأكد أن هذا يطابق اسم المستودع على GitHub
  server: {
    // port: 5173,
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/nesting'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
  },
});