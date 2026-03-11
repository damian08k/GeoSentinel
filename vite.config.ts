/// <reference types="vitest/config" />

import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      tests: path.resolve(__dirname, './src/tests'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 5008,
    open: true,
  },
  test: {
    clearMocks: true,
    css: true,
    dir: './src',
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
  },
});
