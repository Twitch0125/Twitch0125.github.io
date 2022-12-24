import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@fontsource/figtree/variable.css",
    "@fontsource/epilogue/variable.css",
    "~/assets/css/tailwind.css",
  ],
  modules: ["@nuxt/content"],
  content: {},
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
