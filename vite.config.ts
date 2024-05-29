import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'xui',
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'lodash']
    }
  },
  plugins: [vue(),dts({ insertTypesEntry: true, copyDtsFiles: false })],
})
