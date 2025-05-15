import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // base: "/react-auth/", // تأكد أن هذا يطابق اسم المستودع على GitHub
  server: {
    // port: 5173,
    port: 3000,
    host: true,
    
    // proxy: {
    //   '/api': {
    //     target: '', // غيّر هذا للمنفذ الذي يعمل عليه سيرفرك
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/nesting'],
  },
});