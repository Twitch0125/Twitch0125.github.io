// uno.config.ts
import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const colors = {
  primary: 'hsl(38 97% 55%)',
  body: 'hsl(235 52% 15%)',
  background: 'hsl(0 0% 100%)',
  orange: {
    50: '#fff9eb',
    100: '#ffefc6',
    200: '#ffdd88',
    300: '#ffc54a',
    400: '#ffab1a',
    500: '#f98a07',
    600: '#dd6402',
    700: '#b74306',
    800: '#94330c',
    900: '#7a2a0d',
    950: '#461402',
  },
}

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons(), presetTypography({}), presetWebFonts({
    provider: 'fontshare',
    fonts: {
      sans: 'Epilogue',
    },
  })],
  transformers: [transformerVariantGroup()],
  rules: [
    ['shadowed-outline', {
      'text-shadow': `-1px -1px ${colors.body},
          0 -1px ${colors.body},
          1px -1px ${colors.body},
          1px 0 ${colors.body},
          1px 1px ${colors.body},
          0 1px ${colors.body},
          -1px 1px ${colors.body},
          -1px 0 ${colors.body}`,
    }],
  ],
  safelist: ['i-logos-javascript', 'i-logos-vue', 'i-logos-nuxt-icon', 'i-logos-unocss', 'i-logos-linux-tux', 'i-logos-docker-icon', 'i-logos-figma', 'i-logos-tailwindcss-icon'],
  theme: {
    fontFamily: {
      body: 'Epilogue, sans-serif',
      display: 'Epilogue, sans-serif',
    },
    boxShadow: {
      DEFAULT: '4px 4px 0px hsl(235 52% 15%)',
      sm: '1px 1px 0px hsl(235 52% 15%)',
    },
    letterSpacing: {
      tighter: '-0.04rem',
      tight: '-0.03rem',
    },
    colors,
    fontSize: {
      'sm': 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)',
      'base': 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)',
      'md': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
      'lg': 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
      'xl': 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)',
      '2xl': 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)',
      '3xl': 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)',
      '4xl': 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)',
    },
    spacing: {
      '3xs': 'clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)',
      '2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
      'xs': 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
      'sm': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
      'md': 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
      'lg': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
      'xl': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
      '2xl': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
      '3xl': 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)',
      'layout': '390px',
      'layout-lg': '876px',
    },
  },
  shortcuts: [
    {
      'btn': 'bg-background border border-body justify-center gap-2 transition-all duration-75 ease-in-out flex items-center font-bold tracking-tight leading-tight py-3 px-7 text-base active:(bg-primary outline-none)',
      'btn-primary': 'bg-primary shadow outline-none',
      'special-shadow': '',
      'shadowed': 'shadowed-outline bg-transparent relative z-[1] [&:before]:(z-[1] absolute content-[attr(data-shadowed-text)] text-primary -top-[4px] -left-[4px])',
      'border-base': 'border border-solid border-body',
      'divider': 'h-1px bg-body -mx-lg',
      'date': 'text-body/70 text-sm font-mono',
    },
  ],
})
