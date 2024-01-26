import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.BASE_URL ?? '/',
    plugins: [
      react({
        include: '**/*.tsx',
      }),
      viteTsconfigPaths(),
      svgrPlugin(),
    ],
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
      'process.env': process.env,
    },
    server: {
      open: true,
      port: 4200,
      host: 'localhost',
    },
  };
});
