import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        created: z.string(),
        description: z.string(),
        title: z.string(),
        status: z.string().optional().default('published'),
      })
    }),
  },
})
