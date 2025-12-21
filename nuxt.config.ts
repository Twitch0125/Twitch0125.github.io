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
    '@nuxthub/core',
    '@nuxt/hints',
    'nuxt-og-image',
  ],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        highlight: {
          theme: 'everforest-dark',
        },
      },
    },
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true,
    },
  },
  ogImage: {
    zeroRuntime: true,
    fonts: ['Epilogue:900'],
  },
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'twitch0125',
      repo: 'Twitch0125.github.io',
      branch: 'main',
    },
  },
  compatibilityDate: '2025-12-20',
  $production: {
    hub: {
      db: {
        dialect: 'sqlite',
        driver: 'd1',
        connection: {
          databaseId: '2867af71-1dbd-46a8-9e5e-75d37b68baeb',
        },
      },
    },
    image: {
      provider: 'ipxStatic',
    },
  },
})
