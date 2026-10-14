import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Replaces every HTML page (homepage + blog pages) with maintenance.html.
// Runs before Vite scans the HTML for scripts, so the React app isn't bundled.
function maintenancePage(): Plugin {
  const html = fs.readFileSync(path.resolve(__dirname, 'maintenance.html'), 'utf-8');
  return {
    name: 'maintenance-page',
    transformIndexHtml: { order: 'pre', handler: () => html },
  };
}

// Maintenance is on by default. To restore the full site, set MAINTENANCE_MODE=false
// (in .env.local or the host's build environment) or flip this default.
function isMaintenanceMode(env: Record<string, string>): boolean {
  return env.MAINTENANCE_MODE !== 'false';
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), isMaintenanceMode(env) && maintenancePage()],
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
