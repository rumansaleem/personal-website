import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
        author: z.string(),
        published: z.boolean(),
        readTime: z.number().optional(),
        tags: z.array(z.string()),
        date: z.date(),
      }),
    }),
    about: defineCollection({
      type: 'page',   
      source: 'pages/about/*.md',
      schema: z.object({
        title: z.string(),
        name: z.string(),
        image: z.string(),
        links: z.array(z.object({
          icon: z.string(),
          alt: z.string(),
          target: z.string(),
          color: z.string(),
        })),
      }),
    }),
    work: defineCollection({
      type: 'page',
      source: 'pages/work/**/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        cover: z.string(),
        technologies: z.array(z.string()),
        start: z.date(),
        end: z.date(),
        link: z.string().optional(),
        sourceCode: z.string().optional(),
        snapshots: z.array(z.string()).optional(),
      }),
    }),
    resume: defineCollection({
      type: 'page',
      source: 'pages/resume.md',
      schema: z.object({
        name: z.string(),
        title: z.string(),
        summarize: z.boolean(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
        lastUpdated: z.string(),
        links: z.array(z.object({
          target: z.string(),
          icon: z.string(),
          label: z.string(),
          text: z.string(),
        })),
      })
    })
  }
});
