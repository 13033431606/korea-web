import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    // host: 'localhost',
    host: '192.168.50.248',
    port: 3003,
    // 是否开启 https
    https: false,
    proxy: {
      // 使用 proxy 实例
      '/api': {
        // target: 'http://137.175.19.125/web',
        target: 'http://137.175.19.125:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        ws: false
      }
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },
  plugins: [
    vue(),
  ]
})

