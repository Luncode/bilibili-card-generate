import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    sourcemap:false
  },
  server:{
    proxy:{
      '/bilibili': {
        target: 'https://api.bilibili.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bilibili/, '')
      },
    }
  }
})
