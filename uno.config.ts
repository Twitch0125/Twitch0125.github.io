// uno.config.ts
import { defineConfig, presetIcons, presetTypography, presetWind } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const colors = {
  primary: 'hsl(38 97% 55%)',
  body: 'hsl(235 52% 15%)',
  background: 'hsl(0 0% 100%)',
}

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons(), presetTypography({
    cssExtend: {
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
  theme: {
    fontFamily: {
      body: 'EpilogueVariable',
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
    colors,
    spacing: {
      'layout': '390px',
      'layout-lg': '876px',
    },
  },
  shortcuts: [
    {
      'blurb': 'text-2xl font-body leading-tight tracking-tight',
      'space-y-flow': 'space-y-[var(--flow-space)]',
      'space-x-flow': 'space-x-[var(--flow-space)]',
      'vertical-flow': '[&>*~*]:mt-flow',
      'vertical-flow-deep': '[&_*~*]:mt-flow',
      'gap-flow': 'gap-[var(--flow-space)]',
      'btn': 'bg-background border border-body justify-center gap-2 transition-all duration-75 ease-in-out flex items-center font-bold tracking-tight leading-tight py-3 px-7 text-base active:(bg-primary outline-none)',
      'btn-primary': 'bg-primary shadow outline-none',
      'special-shadow': '',
      'shadowed': 'shadowed-outline bg-transparent relative z-[1] [&:before]:(z-[1] absolute content-[attr(data-shadowed-text)] text-primary -top-[4px] -left-[4px])',
      'border-base': 'border border-solid border-body',
      'p-flow': 'p-[var(--flow-space)]',
      'pt-flow': 'pt-[var(--flow-space)]',
      'pr-flow': 'pr-[var(--flow-space)]',
      'pl-flow': 'pl-[var(--flow-space)]',
      'pb-flow': 'pb-[var(--flow-space)]',
      'm-flow': 'm-[var(--flow-space)]',
      'mt-flow': 'mt-[var(--flow-space)]',
      'mr-flow': 'mr-[var(--flow-space)]',
      'ml-flow': 'ml-[var(--flow-space)]',
      'mb-flow': 'mb-[var(--flow-space)]',
      'ms-flow': 'ms-[var(--flow-space)]',
      'me-flow': 'me-[var(--flow-space)]',
      'flow-xs': '[--flow-space:0.75rem]',
      'flow-sm': '[--flow-space:0.875rem]',
      'flow-base': '[--flow-space:1rem]',
      'flow-lg': '[--flow-space:1.125rem]',
      'flow-xl': '[--flow-space:1.25rem]',
      'divider': 'h-1px bg-body -mx-4 sm:-mx-6',
      'date': 'text-body/70 text-sm font-mono',
    },
    [
      /^flow-([0-9]*)$/, ([, space]) => `[--flow-space:${parseInt(space) * 0.25}rem]`,
    ],
  ],
})
