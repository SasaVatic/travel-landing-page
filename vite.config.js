import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/media-queries.scss" as mq;
         @use "./src/assets/scss/mixins.scss" as *;`,
      },
    },
  },
});
