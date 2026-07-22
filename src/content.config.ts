import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cluster: z.string(),            // напр. "A1. Нейросети в работе"
    hub: z.enum(['dlya-repetitorov', 'dlya-roditelej', 'ege', 'oge']),
    cta: z.enum(['trial', 'report', 'student']).default('trial'),
    author: z.string().default('Редакция Тьютор AI'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
