import tailwindcss from '@tailwindcss/vite';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  icon: {
    mode: "svg"
  },
  svgo: {
    defaultImport: 'component',
    svgo: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-svgo'
  ],
  content: {
    build: {
      markdown: {
        // remarkPlugins: {
        //   '~/plugins/remark/ImageToFigureCaption.js': {}
        // }
      }
    }
  }
})
