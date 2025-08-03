import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@layouts': fileURLToPath(
        new URL('./src/layouts/index.ts', import.meta.url)
      ),
      '@components': fileURLToPath(
        new URL('./src/components/index.ts', import.meta.url)
      ),
      '@assets': fileURLToPath(
        new URL('./src/assets/index.ts', import.meta.url)
      ),
      '@views': fileURLToPath(new URL('./src/views/index.ts', import.meta.url)),
      '@stores': fileURLToPath(
        new URL('./src/stores/index.ts', import.meta.url)
      ),
      '@utils': fileURLToPath(new URL('./src/utils/index.ts', import.meta.url)),
    },
  },
});
