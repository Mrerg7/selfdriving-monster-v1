import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    period: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

const stats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stats' }),
  schema: z.object({
    value: z.string(),
    unit: z.string().optional(),
    label: z.string(),
    order: z.number(),
  }),
});

export const collections = { faq, timeline, stats };
