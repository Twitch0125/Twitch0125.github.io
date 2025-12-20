// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/styles.css',
    '~/assets/css/prose.css',
  ],

  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxt/eslint',
    'nuxt-studio',
  ],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-12-20',
})
