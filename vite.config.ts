import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// import ViteFonts from 'unplugin-fonts/vite'
// import { NodePackageImporter } from 'sass-embedded'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    // vuetify({
    //   autoImport: { labs: true },
    //   styles: { configFile: 'src/assets/main.css' },
    // }),
    // ViteFonts({
    //   fontsource: {
    //     families: [
    //       {
    //         name: 'Roboto',
    //         weights: [100, 300, 400, 500, 700, 900],
    //         styles: ['normal', 'italic'],
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       api: 'modern-compiler'
  //     }
  //   }
  // }
})
