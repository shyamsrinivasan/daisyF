import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unimport from 'unimport/unplugin'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8090,
    // host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    vue(),
    Unimport.vite({
      addons: {
        vueTemplate: true,
      },
      imports: [
        { name: 'push', from: 'notivue' },
        { name: 'ref', from: 'vue' },
        { name: 'watch', from: 'vue' },
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
      // "@router": path.resolve(__dirname, "src/router/index.ts"),
    },
  },
  // envFile: '.env',
})
