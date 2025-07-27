import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      '@': path.resolve('./src') // 直接使用相对路径
    }
  }
})
