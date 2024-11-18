// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      // Change this to accept either an image() or a string URL
      imgUrl: z.union([
        image(),
        z.string().url()
      ]),
      // ... other fields
    }),
});

export const collections = {
  blog: blogCollection,
};