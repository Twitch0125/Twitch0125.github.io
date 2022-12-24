import { presetTypography, presetUno, transformerDirectives } from "unocss";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@fontsource/figtree/variable.css",
    "@fontsource/epilogue/variable.css",
    "@/assets/global.css",
    '@/assets/utilities.css'
  ],
  modules: ["@nuxt/content", "@unocss/nuxt", "nuxt-icons"],
  content: {},
  unocss: {
    presets: [presetUno(), presetTypography()],
    preflight: true,
    transformers: [transformerDirectives()],
    theme: {
      fontFamily: {
        "sans": ["Figtree", "ui-sans-serif", "system-ui"],
        "body": ["Figtree", "ui-sans-serif", "system-ui"],
        "display": ["Epilogue", "ui-sans-serif", "system-ui"],
      },
      extend: {
        colors: {
          primary: "#FCAA1D",
          text: "#121539",
          background: "#FFFFFF",
        },
      },
    },
  },
});
