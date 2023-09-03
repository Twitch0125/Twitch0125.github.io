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
  modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt', '@nuxthq/studio'],
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
})
