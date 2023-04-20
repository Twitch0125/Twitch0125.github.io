// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fontsource/figtree/variable.css',
    '@fontsource/epilogue/variable.css',
    '@unocss/reset/tailwind.css',
  ],
  modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt'],
  content: {},
})
