// uno.config.ts
import { defineConfig, presetIcons, presetWind } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons()],
  transformers: [transformerVariantGroup()],
  theme: {
    fontFamily: {
      body: 'FigtreeVariable',
      display: 'EpilogueVariable',
    },
    boxShadow: {
      DEFAULT: '4px 4px 0px hsl(235 52% 15%)',
      sm: '1px 1px 0px hsl(235 52% 15%)',
    },
    letterSpacing: {
      tighter: '-0.04rem',
      tight: '-0.03rem',
    },
    colors: {
      primary: 'hsl(38 97% 55%)',
      body: 'hsl(235 52% 15%)',
      background: 'hsl(0 0% 100%)',
    },
    spacing: {
      'layout': '390px',
      'layout-lg': '876px',
    },
  },
  shortcuts: [
    {
      'blurb': 'text-2xl font-body leading-7 tracking-tighter',
      'space-y-flow': 'space-y-[var(--flow-space)]',
      'space-x-flow': 'space-x-[var(--flow-space)]',
      'gap-flow': 'gap-[var(--flow-space)]',
      'btn': 'bg-background border border-body justify-center gap-2 transition-all duration-75 ease-in-out flex items-center font-bold tracking-tight leading-tight py-3 px-7 text-base active:(bg-primary outline-none)',
      'btn-primary': 'bg-primary shadow outline-none',
      'special-shadow': '',
      'shadowed': 'bg-transparent relative z-[1] [&:before]:(z-[1] absolute content-[attr(data-shadowed-text)] text-primary -top-[4px] -left-[4px])',
      'border-base': 'border border-solid border-body',
    },
    [
      /^flow-(.*)$/, ([, space], { theme }) => `[--flow-space:${parseInt(space) * 0.25}rem]`,
    ],
  ],
})
