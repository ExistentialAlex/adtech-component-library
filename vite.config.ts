import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: `./src/components/main.ts`,
      name: 'adtech_component_library',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `adtech-component-library.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: './src/components/main.ts',
      },
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css')
            return 'adtech-component-library.css';
          return assetInfo.name;
        },
      },
    },
  },
});
