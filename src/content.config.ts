import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        cover: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        client: z.string().optional(),
        role: z.string().optional(),
        year: z.number().optional(),
        url: z.string().url().optional(),
        image: z.string().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
