import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      angular({
        tsconfig: './tsconfig.json',
      }),
    ],
    base: './', 
    define: {
      'process.env': {
        // 不需要Key了，直接给空值，保证代码不报错
        API_KEY: ''
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    resolve: {
      mainFields: ['module'],
    },
  };
});