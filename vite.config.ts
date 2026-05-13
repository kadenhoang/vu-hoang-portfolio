import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url'; // Added for path handling
import { defineConfig, loadEnv } from 'vite';
 
// Fix for __dirname in ESM environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Add this line below. Replace 'vu-hoang-portfolio' with your exact repo name if different.
    base: '/vu-hoang-portfolio/',
    
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});