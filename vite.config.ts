import { defineConfig } from 'vite';

export default defineConfig({
  base: '/01-ts-basics/',
  server: {
    port: 3000, // можно задать привычный порт
  },
  build: {
    outDir: 'dist', // папка для готовой сборки
  },
});
