// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fontsource/epilogue/variable.css',
    '@unocss/reset/tailwind.css',
    'assets/css/prose.css',
  ],
  modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt'],
  content: {},
  experimental: {
    renderJsonPayloads: true,
  },
  routeRules: {
    '*': {
      experimentalNoScripts: true,
    },
  },
  vite: {
    esbuild: {
      target: 'esnext',
    },
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
