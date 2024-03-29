import path from 'path';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [viteSvgr(), react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@common/*': path.resolve(__dirname, './src/common'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
});
