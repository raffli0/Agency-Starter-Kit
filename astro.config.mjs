// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://agency-starter-kit.example.com',
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), mdx()]
});