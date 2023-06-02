// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fontsource-variable/epilogue',
    '@unocss/reset/tailwind.css',
    'assets/css/prose.css',
  ],
  modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt', '@nuxthq/studio'],
  vite: {
    build: {
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
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
})
