import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueImages from 'vite-plugin-vue-images';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueImages({ dirs: ['src/assets/img', 'src/assets'] })],
});
