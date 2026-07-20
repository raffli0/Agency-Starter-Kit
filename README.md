# Agency Starter Kit

A fast, production-ready [Astro](https://astro.build) starter kit for agencies and creative teams.

## Features

- Static output with sitemap generation
- Tailwind CSS v4 workflow
- Content collections for blog and projects
- Reusable layouts, sections, and UI components
- Centralized config (`src/config`) and typed data (`src/data`)
- SEO metadata utilities and Open Graph tags
- Dark-mode ready theming

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the build
```

## Project structure

```
src/
├── components/   # ui, layout, sections, cards, navigation, feedback, animation, icons, shared
├── layouts/      # Base, Page, Blog, Project layouts
├── pages/        # file-based routes
├── content/      # blog & projects collections
├── config/       # site, seo, navigation, social, contact, analytics, features, theme
├── data/         # typed static data (services, team, testimonials, faq, stats, timeline, pricing, brands)
├── lib/          # seo, metadata, image, date, format, validation, constants, utils
├── types/        # per-domain TypeScript types + barrel index
├── constants/    # routes, metadata, animation
└── styles/       # globals, theme, prose
```

## Configuration

Edit `src/config/site.ts` and related config files to set your brand, links, and SEO defaults.
Replace placeholder content in `src/data` and `src/content` before going live.

## License

MIT — see [LICENSE](./LICENSE).
