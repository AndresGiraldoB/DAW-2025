/* eslint-disable no-undef */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        page2: resolve(__dirname, 'new_property.html'),
      },
    },
  },
  /*añadir plugin de tailwindcss()*/ 
  plugins:[
    tailwindcss(),
  ],
})