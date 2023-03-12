/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import ts from 'rollup-plugin-ts';
import { di } from '@wessberg/di-compiler';
import { defineConfig, type Plugin } from 'vite';

// https://github.com/wessberg/DI-compiler
const DiPlugin = (options = {}): Plugin => {
  return {
    ...ts({
      ...options,
      transformers: [di],
      transpileOnly: true,
      exclude: ['**/*.test.ts'],
      tsconfig: resolvedConfig => ({ ...resolvedConfig, declaration: false }),
    }),
    name: 'vite:di',
    enforce: 'pre',
  };
};

export default defineConfig({
  plugins: [DiPlugin()],
});
