# Graph Report - . (2026-07-22)

## Corpus Check

- Corpus is ~14,596 words - fits in a single context window. You may not need a graph.

## Summary

- 452 nodes · 571 edges · 42 communities (34 shown, 8 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)

- Layout SEO Imports
- UI Sections Data
- Biome Config
- Dev Dependencies
- Site Config Data
- Runtime Dependencies
- Contact Form SEO
- Client Case Studies
- Contact Footer Utils
- TypeScript Config
- SEO Layout Stack
- Astro Docs Roadmap
- Product Vision Goals
- Analytics Feature Flags
- Performance SSG
- Brand Visual Assets
- Tailwind Theme System
- Blog Date Utils
- Config Data Pipeline
- Routes Constants
- Content Collections
- Button Utils CN
- Design System Tokens
- Content Collections Schema
- Breakpoints Locales
- Graphify Plugin
- Social Links
- A11y Mobile First
- Typography Inter Font
- Alert Variants
- Theme Config
- Content Over Chrome

## God Nodes (most connected - your core abstractions)

1. `Agency Starter Kit` - 16 edges
2. `../layouts/PageLayout.astro` - 14 edges
3. `ignore` - 12 edges
4. `../components/shared/SeoHead.astro` - 12 edges
5. `../components/ui/Container.astro` - 10 edges
6. `Agency Starter Kit` - 10 edges
7. `scripts` - 9 edges
8. `../components/layout/Header.astro` - 9 edges
9. `SiteConfig` - 9 edges
10. `../layouts/BaseLayout.astro` - 9 edges

## Surprising Connections (you probably didn't know these)

- `Astro Content Collections Guide` --semantically_similar_to--> `Astro Content Collections` [INFERRED] [semantically similar]
  AGENTS.md → PRD.md
- `Agency Starter Kit` --semantically_similar_to--> `Agency Starter Kit` [INFERRED] [semantically similar]
  README.md → PRD.md
- `Static Output with Sitemap Generation` --semantically_similar_to--> `Static Site Generation (SSG)` [INFERRED] [semantically similar]
  README.md → PRD.md
- `Content Collections for Blog and Projects` --semantically_similar_to--> `Astro Content Collections` [INFERRED] [semantically similar]
  README.md → PRD.md
- `Centralized Config src/config` --semantically_similar_to--> `src/config Configuration Layer` [INFERRED] [semantically similar]
  README.md → PRD.md

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Agency Starter Kit Tech Stack** — prd_astro_7, prd_tailwind_css_4, prd_typescript_strict, prd_inter_variable_font, prd_lucide_astro, prd_motion_12, prd_astrojs_sitemap [EXTRACTED 1.00]
- **Config Data Content to Static HTML Flow** — prd_src_config, prd_src_data, prd_src_content, prd_data_flow, prd_ssg [EXTRACTED 1.00]
- **Layout Nesting Hierarchy** — prd_base_layout, prd_page_layout, prd_article_layout [EXTRACTED 1.00]
- **Contact form integration options across templates** — src_content_blog_contact_form_contact_form, src_content_blog_contact_form_php_contact_form, src_content_blog_contact_form_formbold, src_content_blog_contact_form_bootstrap_templates, src_content_blog_contact_form_tailwind_css_templates [EXTRACTED 1.00]
- **Design system composition from tokens to variants** — src_content_blog_designing_a_flexible_design_system_design_tokens, src_content_blog_designing_a_flexible_design_system_component_library, src_content_blog_designing_a_flexible_design_system_component_variants, src_content_blog_designing_a_flexible_design_system_design_system [EXTRACTED 1.00]
- **Agency technical SEO readiness checklist** — src_content_blog_seo_fundamentals_for_agencies_technical_seo, src_content_blog_seo_fundamentals_for_agencies_sitemap, src_content_blog_seo_fundamentals_for_agencies_open_graph_tags, src_content_blog_seo_fundamentals_for_agencies_canonical_urls, src_content_blog_seo_fundamentals_for_agencies_metadata [EXTRACTED 1.00]
- **Agency portfolio project case studies** — src_content_projects_atlas_ecommerce_atlas_ecommerce, src_content_projects_lumen_studio_lumen_studio, src_content_projects_nova_finance_nova_finance [INFERRED 0.95]
- **Featured 2025 web and brand projects** — src_content_projects_lumen_studio_lumen_studio, src_content_projects_nova_finance_nova_finance, src_content_projects_lumen_studio_web_category, src_content_projects_nova_finance_branding_category [INFERRED 0.75]

## Communities (42 total, 8 thin omitted)

### Community 0 - "Layout SEO Imports"

Cohesion: 0.08
Nodes (35): ../../config/seo, ../config/site, ../data/stats, ../data/team, ../data/timeline, ../../lib/seo, ../styles/globals.css, ../types/metadata (+27 more)

### Community 1 - "UI Sections Data"

Cohesion: 0.06
Nodes (32): ../data/brands, ../data/faq, ../data/pricing, ../data/services, ../data/testimonials, ../../types/common, ../../types/faq, ../types/hero (+24 more)

### Community 2 - "Biome Config"

Cohesion: 0.06
Nodes (34): files, ignore, formatter, enabled, quoteStyle, trailingCommas, javascript, formatter (+26 more)

### Community 3 - "Dev Dependencies"

Cohesion: 0.06
Nodes (33): @astrojs/check, @biomejs/biome, eslint, eslint-plugin-astro, devDependencies, @astrojs/check, @biomejs/biome, eslint (+25 more)

### Community 4 - "Site Config Data"

Cohesion: 0.07
Nodes (20): footerNavigation, navigation, socialConfig, socialLabels, stats, team, BlogPost, BlogPostFrontmatter (+12 more)

### Community 5 - "Runtime Dependencies"

Cohesion: 0.07
Nodes (27): @astrojs/mdx, @astrojs/sitemap, class-variance-authority, clsx, @fontsource-variable/inter, dependencies, astro, @astrojs/mdx (+19 more)

### Community 6 - "Contact Form SEO"

Cohesion: 0.16
Nodes (20): Configuring Contact Form, Bootstrap Templates, Contact Form, FormBold, PHP Contact Form, PHPMailer, Prefer Serverless Form Endpoints, Serverless Form Backend (+12 more)

### Community 7 - "Client Case Studies"

Cohesion: 0.14
Nodes (20): Atlas, Atlas E-commerce, Design system, Headless storefront, Product, Product Design, Lightweight booking flow, Fakie (+12 more)

### Community 8 - "Contact Footer Utils"

Cohesion: 0.15
Nodes (10): ../config/contact, ../../config/navigation, ../lib/format, ../components/layout/Footer.astro, contactConfig, formatPhone(), BusinessHours, ContactAddress (+2 more)

### Community 9 - "TypeScript Config"

Cohesion: 0.12
Nodes (15): **/*, astro/tsconfigs/strict, .astro/types.d.ts, compilerOptions, baseUrl, ignoreDeprecations, paths, exclude (+7 more)

### Community 10 - "SEO Layout Stack"

Cohesion: 0.17
Nodes (12): ArticleLayout, @astrojs/sitemap, BaseLayout, buildMetadata SEO Helper, Component Hierarchy, Feature Flags, PageLayout, Robots Meta and robots.txt SEO (+4 more)

### Community 11 - "Astro Docs Roadmap"

Cohesion: 0.17
Nodes (12): Astro Official Documentation, Astro Components Guide, Astro Background Dev Server Workflow, Astro Framework Components Guide, Astro Internationalization Guide, Astro Routing Guide, Astro Official Documentation, Astro Background Dev Server Workflow (+4 more)

### Community 12 - "Product Vision Goals"

Cohesion: 0.20
Nodes (12): Agency Starter Kit, Multi-Provider Analytics, Configuration Philosophy Single Source of Truth, Kecepatan Peluncuran Goal, Kustomisasi Tanpa Coding Goal, Lucide Astro Icons, Eleven Prebuilt Pages, Creative Agency Owner Persona (+4 more)

### Community 13 - "Analytics Feature Flags"

Cohesion: 0.21
Nodes (8): analyticsConfig, featuresConfig, brands, AnalyticsConfig, AnalyticsProvider, FeatureFlags, ImageAsset, Locale

### Community 14 - "Performance SSG"

Cohesion: 0.20
Nodes (10): getStaticPaths Dynamic Route Generation, Kinerja Maksimal Goal, Kinerja sebagai Fitur Principle, Lighthouse Score Targets >= 95, motion 12 Animation Library, Non-Goal Server-Side Rendering, Performance Strategy, Static Site Generation (SSG) (+2 more)

### Community 15 - "Brand Visual Assets"

Cohesion: 0.24
Nodes (10): Astro favicon mark (adaptive black/white), Browser tab brand identity, Dark-mode adaptive path fill, Dark A-shaped stroke glyph, Agency Starter Kit brand, Agency Starter Kit logo mark, Sky-blue rounded square tile (#0ea5e9, rx=8), Open Graph social preview image (+2 more)

### Community 16 - "Tailwind Theme System"

Cohesion: 0.22
Nodes (9): Astro Styling and Tailwind Guide, CSS Custom Properties Theme System, Dark First Design Principle, Tailwind CSS 4, Agency Starter Kit, Dark-Mode Ready Theming, MIT License, Project Structure (+1 more)

### Community 17 - "Blog Date Utils"

Cohesion: 0.29
Nodes (5): ../../lib/date, ../../types/blog, ../../components/cards/PostCard.astro, formatDate(), MONTHS

### Community 18 - "Config Data Pipeline"

Cohesion: 0.29
Nodes (8): Customization Workflow, Data Flow Pipeline, Go Live Checklist, src/config Configuration Layer, src/content Content Layer, src/data Static Data Layer, Centralized Config src/config, Typed Static Data src/data

### Community 19 - "Routes Constants"

Cohesion: 0.25
Nodes (4): ANIMATION, METADATA_DEFAULTS, RouteKey, ROUTES

### Community 20 - "Content Collections"

Cohesion: 0.33
Nodes (6): Astro Content Collections Guide, Astro 7, Astro Content Collections, Island Architecture, Non-Goal Full CMS Integration, Content Collections for Blog and Projects

### Community 22 - "Design System Tokens"

Cohesion: 0.70
Nodes (5): Designing a flexible design system, Component Library, Component Variants, Design System, Design Tokens

### Community 23 - "Content Collections Schema"

Cohesion: 0.50
Nodes (3): blog, collections, projects

### Community 24 - "Breakpoints Locales"

Cohesion: 0.50
Nodes (3): BREAKPOINTS, DEFAULT_OG_SIZE, LOCALES

## Ambiguous Edges - Review These

- `Open Graph social preview image` → `OG image visual content (vision unavailable)` [AMBIGUOUS]
  public/og-image.webp · relation: references

## Knowledge Gaps

- **145 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `dist` (+140 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Open Graph social preview image` and `OG image visual content (vision unavailable)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `../layouts/PageLayout.astro` connect `Layout SEO Imports` to `Contact Footer Utils`, `UI Sections Data`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `../components/ui/Container.astro` connect `Layout SEO Imports` to `Contact Footer Utils`, `UI Sections Data`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `../components/layout/Header.astro` connect `Layout SEO Imports` to `Contact Footer Utils`, `Site Config Data`, `Button Utils CN`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _145 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout SEO Imports` be split into smaller, more focused modules?**
  _Cohesion score 0.07686274509803921 - nodes in this community are weakly interconnected._
- **Should `UI Sections Data` be split into smaller, more focused modules?**
  _Cohesion score 0.06423034330011074 - nodes in this community are weakly interconnected._
