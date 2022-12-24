const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      body: ["FigtreeVariable", ...defaultTheme.fontFamily.sans],
      display: ["EpilogueVariable", ...defaultTheme.fontFamily.sans],
    },
    boxShadow: ({theme}) => ({
      DEFAULT: `4px 4px 0px ${theme('colors.body')}`,
      sm: `1px 1px 0px ${theme('colors.body')}`
    }),
    extend: {
      colors: {
        primary: "hsl(38 97% 55%)",
        body: "hsl(235 52% 15%)",
        background: "hsl(0 0% 100%)",
      },
    },
  },
  plugins: [],
};
