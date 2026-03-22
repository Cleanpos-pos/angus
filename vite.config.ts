import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            'best-burgers-wembley': path.resolve(__dirname, 'best-burgers-wembley/index.html'),
            'best-kebabs-wembley': path.resolve(__dirname, 'best-kebabs-wembley/index.html'),
            'best-gyros-wembley': path.resolve(__dirname, 'best-gyros-wembley/index.html'),
            'takeaways-near-me': path.resolve(__dirname, 'takeaways-near-me/index.html'),
          },
        },
      },
    };
});
