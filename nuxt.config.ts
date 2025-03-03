// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@unocss/reset/tailwind.css',
    'assets/css/styles.css',
    'assets/css/prose.css',
  ],

  devtools: {
    enabled: true,
  },

  modules: ['@nuxt/content', '@nuxt/image', '@unocss/nuxt', '@nuxt/eslint'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  compatibilityDate: '2025-03-02',
})
