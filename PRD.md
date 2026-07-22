# Product Requirements Document — Agency Starter Kit

| Metadata | |
|---|---|
| **Dokumen** | PRD — Agency Starter Kit v1.0 |
| **Status** | Draft |
| **Penulis** | Tim Produk |

---

## 1. Executive Summary

Seorang frontend developer freelance mendapat proyek website company profile untuk UMKM, startup, atau agency. Setiap proyek baru, ia memulai dari template kosong atau menyalin proyek sebelumnya, lalu membangun ulang struktur folder, komponen, SEO, konten, dan identitas brand secara manual. Pekerjaan ini berulang di setiap proyek — mengganti teks hero, mengatur ulang navigasi, memasang meta tags, menulis ulang halaman layanan — tanpa ada fondasi yang bisa dipakai lagi.

Akibatnya: waktu pengerjaan molor, struktur proyek tidak konsisten antar klien, dan kesalahan teknis (SEO kelewat, broken link, meta tags ketinggalan) sering terulang.

**Agency Starter Kit** hadir untuk menghentikan siklus ini. Template ini menyediakan 11 halaman pra-bangun, sistem desain gelap, koleksi konten, SEO tooling, dan arsitektur yang dapat dikustomisasi — semuanya dengan data placeholder. Pengguna cukup mengganti konten dan identitas brand tanpa membangun ulang dari awal.

Dibangun dengan Astro 7, Tailwind CSS 4, dan TypeScript strict, starter kit ini menghasilkan situs statis dengan performa tinggi (Lighthouse ≥ 95) tanpa JavaScript bawaan di halaman konten.

---

## 2. Product Vision

Menjadi *starter kit* pilihan utama bagi agency digital dan pengembang lepas di seluruh dunia untuk meluncurkan situs perusahaan yang cepat, indah, dapat dikustomisasi, dan siap-produksi — tanpa kerumitan membangun dari awal.

---

## 3. Product Goals

1. **Kecepatan Peluncuran** — Pengguna dapat memiliki situs live dalam < 30 menit setelah *clone* dan mengganti < 5 file konfigurasi.
2. **Kinerja Maksimal** — Lighthouse score ≥ 95 untuk semua metrik (Performance, Accessibility, SEO, Best Practices).
3. **Kustomisasi Tanpa Coding** — Semua konten dapat diubah melalui file konfigurasi dan data — tanpa perlu menyentuh komponen.
4. **Maintainability** — Kode terstruktur, tertulis rapi, dan mengikuti *best practices* Astro + TypeScript.
5. **Developer Experience** — Hot reload, type checking, linting, dan formatting terintegrasi.

---

## 4. Non Goals (Out of Scope)

| # | Item | Alasan |
|---|---|---|
| NG-01 | **Server-side rendering (SSR)** | Produk ini adalah static site generator; SSR akan menambah kompleksitas dan biaya hosting. |
| NG-02 | **CMS terintegrasi penuh** | Content Collections berbasis file sudah cukup untuk fase awal; integrasi CMS akan dieksplorasi di fase Enterprise. |
| NG-03 | **E-commerce / payment** | Di luar lingkup company profile. |
| NG-04 | **User authentication** | Tidak diperlukan untuk situs company profile statis. |
| NG-05 | **Database / API backend** | Semua konten berasal dari file lokal. |
| NG-06 | **Multi-language (i18n)** | Akan dipertimbangkan di fase Enhancement. |
| NG-07 | **Drag-and-drop page builder** | Terlalu kompleks dan di luar visi "starter kit berbasis kode". |
| NG-08 | **Mobile app** | Produk khusus web. |

---

## 5. Success Metrics

| Metrik | Target | Cara Ukur |
|---|---|---|
| Lighthouse Performance | ≥ 95 | Lighthouse CI / PageSpeed Insights |
| Lighthouse Accessibility | ≥ 95 | Lighthouse CI |
| Lighthouse SEO | ≥ 95 | Lighthouse CI |
| Lighthouse Best Practices | ≥ 95 | Lighthouse CI |
| Waktu setup pertama | ≤ 30 menit | Manual testing |
| Jumlah file yang perlu diedit untuk go-live | ≤ 5 file | Dokumentasi |
| Build time | ≤ 10 detik | `npm run build` |
| Ukuran output | ≤ 500 KB per halaman (tanpa gambar) | `npm run build` + du |
| Zero JS di halaman konten | Ya | Bundle analyzer |

---

## 6. Target Audience

1. **Creative & Digital Agencies** — Butuh company profile cepat untuk diri sendiri atau klien.
2. **Frontend Developers Freelance** — Ingin template bersih untuk ditawarkan ke klien.
3. **Startup Founders** — Butuh landing page profesional tanpa tim engineering.
4. **Design Agencies** — Ingin fokus pada desain dan konten, bukan infrastruktur web.

---

## 7. User Personas

### Persona 1: Creative Agency Owner
- **Usia**: 28–45 tahun
- **Pekerjaan**: Founder / Creative Director
- **Tujuan**: Meluncurkan website company profile dengan cepat
- **Pain Point**: Tidak punya waktu coding dari nol, butuh hasil profesional
- **Kebutuhan**: Halaman portofolio, testimonial, tim, harga, blog
- **Skill Teknis**: HTML/CSS dasar

### Persona 2: Frontend Developer Freelance
- **Usia**: 22–35 tahun
- **Pekerjaan**: Freelance Web Developer
- **Saat Ini**: Setiap mendapat proyek company profile baru, ia menyalin proyek sebelumnya atau memulai dari template kosong, lalu membangun ulang struktur folder, komponen, SEO, konten, dan identitas brand secara manual dari awal.
- **Pain Point**: Pekerjaan berulang di setiap proyek — ganti hero, atur ulang navigasi, pasang meta tags, tulis ulang halaman layanan — tanpa fondasi yang bisa dipakai lagi.
- **Dampak**: Waktu pengerjaan molor, struktur proyek tidak konsisten antar klien, kesalahan teknis (SEO kelewat, broken link, meta tags ketinggalan) sering terulang.
- **Kebutuhan**: Starter kit yang sudah memiliki halaman, komponen, konfigurasi, dan SEO siap pakai sehingga cukup mengganti konten dan identitas brand tanpa membangun ulang dari awal.
- **Skill Teknis**: Mahir JavaScript/TypeScript, Astro/React

### Persona 3: Startup Founder
- **Usia**: 24–40 tahun
- **Pekerjaan**: Founder / CEO
- **Tujuan**: Landing page untuk produk/jasa baru
- **Pain Point**: Anggaran terbatas, perlu rilis cepat
- **Kebutuhan**: Harga terjangkau, cepat rilis, SEO-friendly, mobile-first
- **Skill Teknis**: Minimal

---

## 8. User Stories

### US-01: Mengubah Hero Section
Sebagai pemilik agency, saya ingin mengubah teks dan tombol di hero section agar sesuai dengan brand saya, dengan cukup mengedit file data.

### US-02: Menambah Blog Post
Sebagai content writer, saya ingin menambahkan blog post baru dengan membuat file `.md` di folder yang tepat, dan post otomatis muncul di halaman blog.

### US-03: Menonaktifkan Fitur
Sebagai developer, saya ingin mematikan fitur pricing dari situs dengan mengubah satu nilai boolean, tanpa harus menghapus komponen.

### US-04: Mengganti Warna Tema
Sebagai desainer, saya ingin mengubah warna aksen dan skema warna situs melalui file CSS yang terpusat.

### US-05: SEO Siap Pakai
Sebagai pemilik bisnis, saya ingin situs saya muncul di hasil pencarian Google tanpa perlu konfigurasi SEO tambahan.

### US-06: Mobile Responsive
Sebagai pengunjung, saya ingin situs terlihat baik di perangkat mobile maupun desktop.

### US-07: Custom Domain
Sebagai developer, saya ingin mengganti URL situs di satu tempat dan semua canonical/sitemap menyesuaikan.

### US-08: Analytics
Sebagai pemilik agency, saya ingin memasang Google Analytics atau Plausible dengan mengaktifkan di konfigurasi.

---

## 9. Functional Requirements

### 9.1 Pages

| ID | Halaman | Rute | Prioritas |
|---|---|---|---|
| FR-P01 | Home | `/` | P0 |
| FR-P02 | About | `/about` | P0 |
| FR-P03 | Services | `/services` | P0 |
| FR-P04 | Contact | `/contact` | P0 |
| FR-P05 | Blog Listing | `/blog` | P1 |
| FR-P06 | Blog Detail | `/blog/[slug]` | P1 |
| FR-P07 | Projects Listing | `/projects` | P1 |
| FR-P08 | Project Detail | `/projects/[slug]` | P1 |
| FR-P09 | Privacy Policy | `/privacy-policy` | P2 |
| FR-P10 | Terms of Service | `/terms` | P2 |
| FR-P11 | 404 Not Found | `/*` | P0 |

**Detail Halaman:**

| Halaman | Konten |
|---|---|
| **Home** | Hero (eyebrow, heading, subtext, 2 CTA, stats), Services, Testimonials, Brands, CTA |
| **About** | Stats, Team, Timeline, CTA |
| **Services** | Service list lengkap, Pricing (3 tier), FAQ, CTA |
| **Contact** | Info kontak (alamat, email, telepon), form area placeholder, CTA |
| **Blog Listing** | Grid kartu blog, sorted by publishedAt descending |
| **Blog Detail** | Artikel penuh dengan prose styling, back link, CTA |
| **Projects Listing** | Grid kartu proyek |
| **Project Detail** | Case study write-up |
| **Privacy / Terms** | Template teks legal dengan placeholder |
| **404** | Pesan tidak ditemukan dengan link kembali ke home |

### 9.2 Components

| ID | Komponen | Varian | Prioritas |
|---|---|---|---|
| FR-C01 | **Button** | Primary, Secondary, Ghost | P0 |
| FR-C02 | **Container** | Responsive wrapper | P0 |
| FR-C03 | **Section** | Spaced section wrapper dengan background | P0 |
| FR-C04 | **Header** | Sticky navigation dari config | P0 |
| FR-C05 | **Footer** | Multi-column: nav sections, contact, social, copyright | P0 |
| FR-C06 | **Hero** | Eyebrow + heading + subtext + CTA + stats | P0 |
| FR-C07 | **ServiceCard** | Icon + title + description | P0 |
| FR-C08 | **TestimonialCard** | Quote + author + avatar + role | P0 |
| FR-C09 | **ProjectCard** | Image + title + category + link | P1 |
| FR-C10 | **PostCard** | Title + excerpt + date + tag + link | P1 |
| FR-C11 | **PricingCard** | Tier name + price + features + CTA | P1 |
| FR-C12 | **Faq** | Details/summary accordion | P1 |
| FR-C13 | **TeamCard** | Avatar + name + role + social | P1 |
| FR-C14 | **Timeline** | Vertical timeline | P1 |
| FR-C15 | **Stats** | Number grid | P1 |
| FR-C16 | **Brands** | Logo bar horizontal | P1 |
| FR-C17 | **Cta** | Call-to-action section | P0 |
| FR-C18 | **SocialLinks** | Semua social media links dari config | P1 |
| FR-C19 | **Icon** | SVG wrapper, configurable name/size/class | P1 |
| FR-C20 | **Reveal** | Scroll-based opacity+translate animation | P1 |
| FR-C21 | **Alert** | Info, Success, Warning, Error | P2 |
| FR-C22 | **SeoHead** | Meta tags, OG, Twitter Card, canonical | P0 |

### 9.3 Content Management

| ID | Requirement | Prioritas |
|---|---|---|
| FR-CM01 | Blog posts via Astro Content Collections (MD files) | P0 |
| FR-CM02 | Projects via Astro Content Collections (MD files) | P0 |
| FR-CM03 | Schema terdefinisi: title, description, author, publishedAt, tags, cover untuk blog | P0 |
| FR-CM04 | Schema terdefinisi: title, description, category, client, role, year, url, image untuk project | P0 |
| FR-CM05 | Data statis services via `src/data/services.ts` | P0 |
| FR-CM06 | Data statis team via `src/data/team.ts` | P0 |
| FR-CM07 | Data statis testimonials via `src/data/testimonials.ts` | P0 |
| FR-CM08 | Data statis pricing via `src/data/pricing.ts` | P0 |
| FR-CM09 | Data statis FAQ via `src/data/faq.ts` | P0 |
| FR-CM10 | Data statis brands via `src/data/brands.ts` | P0 |
| FR-CM11 | Data statis stats via `src/data/stats.ts` | P0 |
| FR-CM12 | Data statis timeline via `src/data/timeline.ts` | P0 |

### 9.4 SEO

| ID | Requirement | Prioritas |
|---|---|---|
| FR-SEO01 | Meta charset, viewport, title, description pada setiap halaman | P0 |
| FR-SEO02 | Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:site_name) | P0 |
| FR-SEO03 | Twitter Card tags (summary_large_image) | P0 |
| FR-SEO04 | Canonical URL pada setiap halaman | P0 |
| FR-SEO05 | Sitemap.xml otomatis via @astrojs/sitemap | P0 |
| FR-SEO06 | Robots meta tag (index/follow) | P0 |
| FR-SEO07 | Author meta tag | P0 |
| FR-SEO08 | Generator meta tag | P0 |
| FR-SEO09 | Semantic HTML (heading hierarchy, landmark elements) | P0 |
| FR-SEO10 | Title template (\"Page Title — Site Name\") | P0 |

### 9.5 Accessibility

| ID | Requirement | Prioritas |
|---|---|---|
| FR-A01 | Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) | P0 |
| FR-A02 | Skip link / keyboard navigation support via default Astro | P0 |
| FR-A03 | Alt text pada semua gambar | P0 |
| FR-A04 | ARIA labels pada icon-only buttons | P1 |
| FR-A05 | Color contrast rasio ≥ 4.5:1 untuk text normal | P0 |
| FR-A06 | Focus visible styles | P1 |
| FR-A07 | Motion-reduce media query untuk animasi | P1 |
| FR-A08 | Form labels dan error states | P1 |

### 9.6 Theme

| ID | Requirement | Prioritas |
|---|---|---|
| FR-T01 | Dark theme sebagai default (slate-950 background, slate-100 text) | P0 |
| FR-T02 | Color system via CSS custom properties: bg, surface, border, text, muted, accent | P0 |
| FR-T03 | Border radius variabel via CSS custom property | P0 |
| FR-T04 | Container max-width variabel via CSS custom property | P0 |
| FR-T05 | Inter variable font via @fontsource-variable/inter | P0 |
| FR-T06 | Tailwind CSS v4 utility classes | P0 |
| FR-T07 | Prose styles untuk artikel/blog | P0 |
| FR-T08 | Feature flag untuk dark mode (siap toggle di masa depan) | P1 |

### 9.7 Feature Flags

| ID | Flag | Default | Deskripsi | Prioritas |
|---|---|---|---|---|
| FR-FF01 | `blog` | true | Tampilkan/sembunyikan halaman blog | P1 |
| FR-FF02 | `projects` | true | Tampilkan/sembunyikan halaman proyek | P1 |
| FR-FF03 | `testimonials` | true | Tampilkan/sembunyikan section testimonial | P1 |
| FR-FF04 | `team` | true | Tampilkan/sembunyikan section team | P1 |
| FR-FF05 | `pricing` | true | Tampilkan/sembunyikan section pricing | P1 |
| FR-FF06 | `faq` | true | Tampilkan/sembunyikan section FAQ | P1 |
| FR-FF07 | `darkMode` | true | Aktifkan dark mode theme | P1 |
| FR-FF08 | `newsletter` | false | Tampilkan/sembunyikan newsletter section | P2 |
| FR-FF09 | `search` | false | Aktifkan fitur pencarian blog | P2 |

### 9.8 Analytics

| ID | Requirement | Prioritas |
|---|---|---|
| FR-AN01 | Konfigurasi multi-provider (Google Analytics, Plausible, Umami) | P2 |
| FR-AN02 | Semua provider non-aktif secara default | P2 |
| FR-AN03 | Provider diaktifkan via environment variables | P2 |
| FR-AN04 | Script analytics hanya dimuat saat provider aktif | P2 |

### 9.9 Developer Experience

| ID | Requirement | Prioritas |
|---|---|---|
| FR-DX01 | Hot reload development server (`astro dev`) | P0 |
| FR-DX02 | TypeScript strict mode | P0 |
| FR-DX03 | ESLint dengan astro plugin | P1 |
| FR-DX04 | Biome linter | P1 |
| FR-DX05 | Prettier dengan astro + tailwind plugins | P1 |
| FR-DX06 | Production build command (`astro build`) | P0 |
| FR-DX07 | Preview production build | P1 |
| FR-DX08 | Type checking command (`astro check`) | P1 |
| FR-DX09 | Environment variable template (.env.example) | P1 |
| FR-DX10 | VS Code configuration (extensions, settings, launch) | P1 |

---

## 10. Non Functional Requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-01 | **Performance** | Lighthouse Performance ≥ 95 |
| NFR-02 | **Accessibility** | Lighthouse Accessibility ≥ 95 |
| NFR-03 | **SEO** | Lighthouse SEO ≥ 95 |
| NFR-04 | **Best Practices** | Lighthouse Best Practices ≥ 95 |
| NFR-05 | **Build Time** | Full build < 10 detik |
| NFR-06 | **Bundle Size** | Zero JavaScript di halaman statis (kecuali animasi opsional) |
| NFR-07 | **Responsive** | Mobile-first, semua halaman responsif di semua viewport |
| NFR-08 | **Type Safety** | TypeScript strict mode, semua props memiliki tipe eksplisit |
| NFR-09 | **Code Quality** | Zero ESLint errors, Zero Biome errors |
| NFR-10 | **Cross-browser** | Mendukung semua browser modern (last 2 versions) |
| NFR-11 | **SEO Baseline** | Semantic HTML, heading hierarchy, meta tags lengkap |
| NFR-12 | **Static Output** | 100% static HTML/CSS, no runtime server required |

---

## 11. Design Principles

1. **Dark First** — Sistem desain dibangun dengan dark theme sebagai default, memanfaatkan slate-950 sebagai latar belakang dan sky sebagai aksen.
2. **Typography-First** — Inter variable font sebagai satu-satunya typeface, dengan skala tipografi yang konsisten.
3. **Konsistensi Visual** — Semua spacing, border radius, dan warna dikontrol via CSS custom properties.
4. **Mobile-First** — Semua layout dirancang untuk mobile terlebih dahulu, diperluas ke desktop.
5. **Kinerja sebagai Fitur** — Tidak ada JavaScript yang tidak perlu; animasi menggunakan CSS dan library ringan (`motion`).
6. **Content Over Chrome** — Desain mendukung konten, bukan mendominasinya. Whitespace yang cukup, tipografi yang jelas.

---

## 12. Technical Architecture

```
┌──────────────────────────────────────────────────────────┐
│                      Astro Framework                      │
│             Static Site Generation (SSG)                  │
├──────────────────────────────────────────────────────────┤
│                      Pages (Routes)                       │
│  /  /about  /services  /contact  /blog  /blog/[slug]     │
│  /projects  /projects/[slug]  /privacy  /terms  404      │
├──────────────────────────────────────────────────────────┤
│                        Layouts                            │
│  BaseLayout (html shell, css, header, footer, seo)       │
│    └── PageLayout (metadata merging)                     │
│          └── ArticleLayout (prose width constraint)      │
├──────────────────────────────────────────────────────────┤
│                    Sections & Components                   │
│  Hero / Services / Testimonials / Brands / Cta           │
│  Stats / Team / Timeline / Pricing / Faq                 │
│  ServiceCard / TestimonialCard / ProjectCard / PostCard  │
│  Button / Container / Section / Icon / Reveal / Alert    │
├──────────────────────────────────────────────────────────┤
│                     Data Layer                             │
│  src/config/   → Global configuration (site, nav, seo)   │
│  src/data/     → Static data arrays (services, team, dll)│
│  src/content/  → Content Collections (blog, projects)    │
├──────────────────────────────────────────────────────────┤
│                 Build Output (dist/)                       │
│  static HTML files + CSS + assets                         │
└──────────────────────────────────────────────────────────┘
```

**Tech Stack:**

| Layer | Teknologi |
|---|---|
| Framework | Astro 7 |
| CSS | Tailwind CSS 4 + Custom Properties |
| Typography | Inter Variable (Fontsource) |
| Icons | Lucide Astro |
| Animation | motion 12 |
| Content | Astro Content Collections (MD) |
| SEO | @astrojs/sitemap, custom SeoHead |
| Language | TypeScript strict |

---

## 13. Folder Architecture

```
/
├── public/                   # Static assets (favicons, fonts, images, robots.txt)
├── src/
│   ├── components/
│   │   ├── animation/        # Reveal.astro
│   │   ├── cards/            # ServiceCard, TestimonialCard, ProjectCard, PostCard
│   │   ├── feedback/         # Alert.astro
│   │   ├── icons/            # Icon.astro
│   │   ├── layout/           # Header.astro, Footer.astro
│   │   ├── navigation/       # SocialLinks.astro
│   │   ├── sections/         # Hero, Services, Testimonials, Cta, Brands, Pricing, Faq, Team, Timeline, Stats
│   │   ├── shared/           # SeoHead.astro
│   │   └── ui/               # Container, Section, Button
│   ├── config/               # Terpusat: site, navigation, seo, analytics, contact, features, social, theme
│   ├── constants/            # animation, metadata, routes
│   ├── content/              # Astro Content Collections (blog/, projects/)
│   ├── content.config.ts     # Content collection schema
│   ├── data/                 # Static data: brands, faq, pricing, services, stats, team, testimonials, timeline
│   ├── layouts/              # BaseLayout, PageLayout, ArticleLayout
│   ├── lib/                  # Utilities: date, format, image, seo, utils, validation, constants
│   ├── pages/                # File-based routing
│   ├── styles/               # globals.css, theme.css, prose.css
│   ├── types/                # TypeScript type definitions
│   ├── hooks/                # (future)
│   └── utils/                # (future)
├── astro.config.mjs
├── tailwind.config.*
├── tsconfig.json
├── package.json
└── ...
```

---

## 14. Configuration Philosophy

**Satu sumber kebenaran** — Semua aspek situs yang dapat dikonfigurasi dipusatkan di `src/config/`. Pengguna cukup mengedit file-file ini untuk menyesuaikan situs tanpa perlu memahami struktur komponen.

| File Config | Fungsi |
|---|---|
| `site.ts` | Nama, URL, locale, author, copyright, logo, social links |
| `seo.ts` | Default title template, description, OG image, robots |
| `navigation.ts` | Header nav items, footer link sections |
| `features.ts` | Feature flags (blog, projects, testimonials, dll) |
| `analytics.ts` | Provider config (GA, Plausible, Umami) |
| `contact.ts` | Email, phone, address, form config |
| `social.ts` | Social media URLs + display labels |
| `theme.ts` | Default theme, container width, border radius |

---

## 15. Data Flow

```
1. Config (src/config/*.ts)
   ↓ imports
2. Data (src/data/*.ts) + Content (src/content/*/)
   ↓ imported/melalui getCollection()
3. Pages (src/pages/*.astro)
   ↓ passing data sebagai props
4. Layouts (src/layouts/*.astro)
   ↓ rendering dengan slot
5. Components (src/components/**/*.astro)
   ↓ render
6. Static HTML (dist/*.html)
```

**Aliran Data per Halaman:**

- **Home**: Config → Data (services, testimonials, brands, stats) → Sections
- **About**: Config → Data (stats, team, timeline)
- **Services**: Config → Data (services, pricing, faq)
- **Contact**: Config (contact.ts)
- **Blog**: Config → Content Collections (getCollection)
- **Blog Detail**: Config → Content Collections (getEntry via slug)
- **Projects**: Config → Content Collections (getCollection)
- **Project Detail**: Config → Content Collections (getEntry via slug)

---

## 16. Rendering Strategy

| Strategy | Detail |
|---|---|
| **Tipe Rendering** | Static Site Generation (SSG) — semua halaman di-pre-render saat build time |
| **Dynamic Routes** | Blog `[slug]` dan Projects `[slug]` menggunakan `getStaticPaths()` untuk generate semua halaman saat build |
| **JavaScript** | Zero JS default; animasi scroll-reveal menggunakan library `motion` (hanya dimuat jika diperlukan) |
| **CSS** | Tailwind CSS diproses saat build, output file CSS tunggal yang sudah di-purging |
| **Islands** | Tidak ada interaktivitas client-side di MVP; arsitektur Astro islands siap digunakan jika diperlukan |
| **Image Optimization** | Static images via `public/`; Astro `<Image />` dapat ditambahkan |

---

## 17. Content Strategy

### 17.1 Blog Content
- **Format**: Markdown (.md) files
- **Frontmatter**: title, description, author, publishedAt, updatedAt, tags, cover, draft
- **Routing**: `/blog/[slug]` dengan slug dari filename
- **Fitur**: Draft mode untuk post yang belum siap publikasi, tag-based filtering (future)

### 17.2 Project Content
- **Format**: Markdown (.md) files
- **Frontmatter**: title, description, category, client, role, year, url, image, featured
- **Routing**: `/projects/[slug]` dengan slug dari filename
- **Fitur**: Featured flag untuk project unggulan

### 17.3 Static Data
- **Format**: TypeScript arrays dengan tipe eksplisit
- **Lokasi**: `src/data/*.ts`
- **Data**: services, team, testimonials, pricing, FAQ, brands, stats, timeline
- **Kelebihan**: Type checking, autocompletion, refactoring mudah

---

## 18. SEO Strategy

| Aspek | Implementasi |
|---|---|
| **Title & Meta** | Setiap halaman memiliki title unik + meta description via `buildMetadata()` |
| **Open Graph** | og:title, og:description, og:image, og:url, og:type, og:site_name |
| **Twitter Card** | twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image |
| **Canonical** | Setiap halaman memiliki canonical URL |
| **Sitemap** | Auto-generated via @astrojs/sitemap |
| **Robots** | Meta robots tag; robots.txt di public/ |
| **Semantic HTML** | `<article>`, `<nav>`, `<main>`, `<section>`, heading hierarchy (h1 → h2 → h3) |
| **Performance** | Fast load times = SEO ranking factor |
| **Mobile** | Responsive design = SEO ranking factor |

---

## 19. Performance Strategy

| Strategi | Implementasi |
|---|---|
| **Zero JS by Default** | Tidak ada JavaScript framework di runtime; halaman murni HTML + CSS |
| **CSS Purge** | Tailwind CSS purge menghilangkan utility classes yang tidak digunakan |
| **Font Optimization** | Inter variable font via CDN (Fontsource) dengan swap display |
| **Asset Optimization** | SVG icons inline via lucide-astro, tidak ada HTTP request tambahan |
| **Preconnect** | External resource hints jika diperlukan |
| **Lightweight Animation** | Library `motion` hanya dimuat saat scroll reveal aktif |
| **Static Generation** | Semua halaman di-pre-render, zero server processing |
| **Responsive Images** | (Future) Astro Image component untuk optimasi gambar |

---

## 20. Accessibility Strategy

| Prinsip | Implementasi |
|---|---|
| **Semantic HTML** | Landmark elements (`<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`) |
| **Heading Hierarchy** | Satu `<h1>` per halaman, heading berurutan tanpa lompatan |
| **Color Contrast** | Dark theme: teks putih (slate-100) di bg gelap (slate-950) — rasio kontras tinggi |
| **Focus Styles** | Visible focus indicators untuk keyboard navigation |
| **Motion Respect** | `prefers-reduced-motion` media query — animasi dinonaktifkan |
| **Alt Text** | Semua gambar (img) memiliki alt text |
| **ARIA** | Label pada icon-only elements; landmark roles |
| **Form Accessibility** | Labels, error states, focus management pada form |

---

## 21. Security Considerations

| Area | Pertimbangan |
|---|---|
| **Dependency** | Semua dependency di-update via npm audit; lockfile di-commit |
| **Build** | Static site = tidak ada attack surface di sisi server |
| **Form** | Form kontak placeholder — implementasi nyata harus memvalidasi input, menggunakan HTTPS, proteksi CSRF |
| **Analytics** | Script analytics dari third-party (GA/Plausible/Umami) — pastikan menggunakan HTTPS |
| **CSP** | (Future) Content Security Policy headers |
| **Images** | Sanitasi input jika user-generated content di masa depan |
| **Environment** | `.env` tidak di-commit; template `.env.example` disediakan |
| **Dependencies** | Pemindaian kerentanan via `npm audit` secara berkala |

---

## 22. Customization Workflow

**Langkah-langkah minimal untuk go-live:**

```
1. Clone repository
2. Edit src/config/site.ts       → ganti nama, URL, deskripsi, copyright
3. Edit src/config/navigation.ts → sesuaikan menu navigasi
4. Edit src/config/contact.ts    → ganti email, telepon, alamat
5. Edit src/config/seo.ts        → ganti default SEO metadata
6. Edit public/                  → ganti favicon, logo, OG image
7. Edit src/data/*.ts            → ganti konten placeholder
8. Edit src/content/             → ganti blog & project placeholder
9. Edit src/styles/theme.css     → (opsional) ganti warna tema
10. npm run build                → production build ke dist/
11. Deploy dist/ ke hosting      → Netlify, Vercel, Cloudflare Pages, dll
```

**Tanpa menyentuh komponen sama sekali.** Semua perubahan konten melalui data/config files.

---

## 23. Go Live Checklist

| # | Item | Status |
|---|---|---|
| 1 | Ganti semua konten placeholder di `src/data/` | ☐ |
| 2 | Ganti blog & project posts di `src/content/` | ☐ |
| 3 | Update `src/config/site.ts` (nama, URL, deskripsi, copyright) | ☐ |
| 4 | Update `src/config/seo.ts` (OG image, keywords) | ☐ |
| 5 | Update `src/config/navigation.ts` (menu items) | ☐ |
| 6 | Update `src/config/contact.ts` (email, telepon, alamat) | ☐ |
| 7 | Update `src/config/social.ts` (social media links) | ☐ |
| 8 | Update `public/` assets (favicon, logo, og-image.jpg) | ☐ |
| 9 | Atur warna tema di `src/styles/theme.css` | ☐ |
| 10 | Set `PUBLIC_SITE_URL` di `.env` | ☐ |
| 11 | Set analytics provider & ID di `.env` | ☐ |
| 12 | Matikan fitur tidak diperlukan di `features.ts` | ☐ |
| 13 | Ganti teks legal di halaman Privacy & Terms | ☐ |
| 14 | Tambahkan halaman custom jika diperlukan | ☐ |
| 15 | Jalankan `npm run build` → verifikasi output | ☐ |
| 16 | Lighthouse audit → target ≥ 95 semua metrik | ☐ |
| 17 | Test di mobile, tablet, desktop | ☐ |
| 18 | Test semua link internal & external | ☐ |
| 19 | Deploy ke production | ☐ |
| 20 | Verifikasi sitemap.xml dan robots.txt | ☐ |
| 21 | Test OG preview (Facebook Sharing Debugger, Twitter Card Validator) | ☐ |

---

## 24. Acceptance Criteria

### AC-01: Home Page
- [ ] Hero section menampilkan heading, subtext, dan 2 CTA buttons
- [ ] Stats grid menampilkan 3–4 angka
- [ ] Services section menampilkan daftar services
- [ ] Testimonials section menampilkan client testimonials
- [ ] Brands section menampilkan logo bar
- [ ] CTA section dengan heading dan button

### AC-02: SEO
- [ ] Setiap halaman memiliki `<title>` unik
- [ ] Setiap halaman memiliki `<meta name="description">`
- [ ] OG tags lengkap (title, description, image, url, type, site_name)
- [ ] Twitter Card tags lengkap
- [ ] Canonical URL di setiap halaman
- [ ] `/sitemap-index.xml` dapat diakses dan valid

### AC-03: Responsive Design
- [ ] Semua halaman responsif di viewport 320px, 768px, 1024px, 1440px
- [ ] Navigasi berfungsi di mobile (hamburger menu atau dropdown)
- [ ] Grid layout beradaptasi (1 kolom mobile, 2–3 kolom desktop)

### AC-04: Performance
- [ ] Lighthouse Performance ≥ 95
- [ ] Build selesai dalam < 10 detik
- [ ] Tidak ada JavaScript di halaman konten murni

### AC-05: Feature Flags
- [ ] Set `blog: false` → halaman blog tidak muncul di navigasi
- [ ] Set `pricing: false` → pricing section tidak dirender

### AC-06: Build & Deploy
- [ ] `npm run build` selesai tanpa error
- [ ] `npm run check` selesai tanpa error type
- [ ] `npm run lint` selesai tanpa error
- [ ] Semua halaman di-render ke file HTML statis di `dist/`

---

## 25. Testing Strategy

| Level | Tools | Cakupan |
|---|---|---|
| **Type Checking** | `astro check`, `tsc` | Semua file TypeScript |
| **Linting** | ESLint, Biome | Semua file `.ts`, `.astro` |
| **Formatting** | Prettier | Semua file `.ts`, `.astro`, `.css`, `.json` |
| **Build** | `astro build` | Pastikan build sukses |
| **Performance** | Lighthouse CI | Setiap halaman |
| **Accessibility** | Lighthouse CI, axe-core | Setiap halaman |
| **SEO** | Lighthouse CI, validator | Setiap halaman, sitemap |
| **Responsive** | Manual (Chrome DevTools) | 320px, 768px, 1024px, 1440px |
| **E2E** | (Future) Playwright | Critical paths |
| **A11y** | (Future) axe-core automated | Full audit |

**Perintah Testing:**

```bash
npm run check       # Type checking
npm run lint        # ESLint
npm run format:check # Prettier check
npm run build       # Build verification
```

---

## 26. Release Strategy

| Fase | Target | Durasi | Status |
|---|---|---|---|
| **Alpha** | Internal testing | — | ✅ Selesai |
| **Beta** | Limited external users | — | ✅ Selesai |
| **v1.0 (MVP)** | Public release | — | ✅ Selesai |
| **v1.1** | Enhancement: light mode, search, RSS | Q3 2026 | 📅 Planned |
| **v2.0** | CMS integration, i18n | Q1 2027 | 📅 Planned |

**Release Process:**
1. Feature development di branch `develop`
2. Code review + type checking + linting
3. Build dan Lighthouse audit
4. Merge ke `main`
5. Tag version (`v1.0.0`)
6. Deploy ke production

---

## 27. Roadmap

### Fase 1 — MVP ✅ (Selesai)
- [x] 11 halaman (Home, About, Services, Contact, Blog, Projects, Legal, 404)
- [x] Sistem desain dark theme dengan Tailwind CSS
- [x] SEO metadata lengkap
- [x] Content Collections untuk blog & proyek
- [x] Sistem konfigurasi terpusat
- [x] Animasi scroll reveal
- [x] TypeScript strict
- [x] ESLint + Biome + Prettier
- [x] Sitemap otomatis

### Fase 2 — Enhancement 📅 (Q3 2026)
- [ ] Modus terang (light mode) toggle
- [ ] Dark/light mode switch interaktif
- [ ] Integrasi form kontak nyata (Resend / Formspree)
- [ ] Search blog (client-side)
- [ ] RSS feed
- [ ] i18n / multi-language support
- [ ] Newsletter integration
- [ ] Cookie consent banner
- [ ] Optimasi gambar (Astro Image)

### Fase 3 — Enterprise 📅 (Q1 2027)
- [ ] CMS integration (Decap CMS / Tina CMS)
- [ ] Component library (Storybook)
- [ ] E2E tests (Playwright)
- [ ] Performance budgets CI
- [ ] Accessibility audit CI (axe-core)
- [ ] Content Security Policy
- [ ] Automated Lighthouse CI
- [ ] Drag-and-drop section ordering

---

## 28. Risks

| Risiko | Dampak | Probabilitas | Mitigasi |
|---|---|---|---|
| **Breaking changes di Astro 7** | Tinggi — migrasi kode | Rendah | Pantau changelog, pin version |
| **Tailwind CSS v4 API changes** | Sedang — utility classes berubah | Rendah | Pin version, test build |
| **Dependency vulnerabilities** | Sedang — security risk | Rendah | `npm audit` rutin, Dependabot |
| **Pengguna tidak paham struktur** | Sedang — onboarding lambat | Sedang | Dokumentasi jelas, go-live checklist |
| **Placeholder tidak diganti** | Rendah — situs go-live dengan konten dummy | Sedang | Checklist, inline notes di file |
| **Browser compatibility** | Rendah — CSS tidak didukung | Rendah | Target modern browsers, test |
| **Performance regression** | Sedang — Lighthouse turun | Rendah | Lighthouse CI, performance budget |

---

## 29. Future Enhancements

| ID | Enhancement | Fase | Prioritas |
|---|---|---|---|
| FE-01 | **Light Mode Toggle** | Switch dark/light dengan persistensi localStorage | Fase 2 | High |
| FE-02 | **Form Kontak Nyata** | Integrasi Resend API atau Formspree | Fase 2 | High |
| FE-03 | **Blog Search** | Client-side search dengan Fuse.js | Fase 2 | Medium |
| FE-04 | **RSS Feed** | RSS/Atom feed untuk blog | Fase 2 | Medium |
| FE-05 | **i18n** | Multi-language dengan astro-i18n | Fase 2 | Medium |
| FE-06 | **Newsletter** | Integrasi dengan ConvertKit / Mailchimp | Fase 2 | Low |
| FE-07 | **Cookie Consent** | Cookie consent banner dengan config | Fase 2 | Low |
| FE-08 | **CMS Integration** | Decap CMS / Tina CMS untuk non-developer | Fase 3 | High |
| FE-09 | **Storybook** | Component library documentation | Fase 3 | Medium |
| FE-10 | **E2E Tests** | Playwright untuk critical paths | Fase 3 | Medium |
| FE-11 | **CI/CD** | GitHub Actions untuk lint, typecheck, build, deploy | Fase 3 | High |
| FE-12 | **Image Optimization** | Astro `<Image />`, responsive images | Fase 2 | Medium |
| FE-13 | **Section Reordering** | Drag-and-drop section ordering via config | Fase 3 | Low |
| FE-14 | **CSP Headers** | Content Security Policy untuk security | Fase 3 | Low |
| FE-15 | **Pagination** | Blog pagination untuk banyak post | Fase 2 | Medium |

---

## 30. Glossary

| Istilah | Definisi |
|---|---|
| **Astro** | Static site framework dengan arsitektur island untuk performa tinggi |
| **Content Collections** | API Astro untuk mengelola konten berbasis file (Markdown/MDX) dengan validasi skema |
| **Feature Flags** | Konfigurasi boolean di `src/config/features.ts` untuk mengaktifkan/menonaktifkan fitur |
| **Island Architecture** | Pola render komponen interaktif secara terisolasi; sisanya static HTML |
| **SSG (Static Site Generator)** | Pendekatan di mana semua halaman di-pre-render menjadi HTML statis saat build |
| **Tailwind CSS** | Utility-first CSS framework untuk styling cepat dan konsisten |
| **Lighthouse** | Alat audit otomatis dari Google untuk performa, aksesibilitas, SEO, dan best practices |
| **CSS Custom Properties** | Variabel CSS (--property-name) untuk nilai yang dapat diubah secara terpusat |
| **Open Graph (OG)** | Protokol metadata untuk kontrol tampilan saat link dibagikan di social media |
| **Canonical URL** | URL resmi yang digunakan untuk mengatasi konten duplikat di search engine |
| **clsx / tailwind-merge / CVA** | Utility library untuk manajemen className di komponen |
| **motion** | Library animasi JavaScript ringan untuk scroll-based reveal |
| **Lucide** | Library SVG icon open-source dengan dukungan Astro |
| **Inter Font** | Font sans-serif open-source karya Rasmus Andersson, dioptimalkan untuk layar |

---

## Appendix A: Configuration File Reference

### `src/config/site.ts`
```typescript
name: string           // Nama situs
title: string          // Default title
description: string    // Default meta description
url: string            // Situs URL (production)
locale: string         // Bahasa (default: "en")
author: string         // Nama author/agency
contact: { email: string; phone: string }
logo: { src: string; alt: string }
social: Record<string, string>
copyright: string      // Copyright text
```

### `src/config/features.ts`
```typescript
{
  blog: boolean
  projects: boolean
  testimonials: boolean
  team: boolean
  pricing: boolean
  faq: boolean
  darkMode: boolean
  newsletter: boolean
  search: boolean
}
```

### `src/config/navigation.ts`
```typescript
header: { label: string; href: string }[]
footer: { title: string; links: { label: string; href: string }[] }[]
```

## Appendix B: Component Hierarchy

```
BaseLayout
└── PageLayout
    ├── Hero
    ├── Services (feature flag)
    │   └── ServiceCard[]
    ├── Testimonials (feature flag)
    │   └── TestimonialCard[]
    ├── Brands
    ├── Cta
    ├── Stats
    ├── Team (feature flag)
    │   └── TeamCard[]
    ├── Timeline
    ├── Pricing (feature flag)
    │   └── PricingCard[]
    └── Faq (feature flag)
```

## Appendix C: Environment Variables

| Variable | Required | Default | Deskripsi |
|---|---|---|---|
| `PUBLIC_SITE_URL` | Ya | — | Production site URL |
| `PUBLIC_GA_ID` | No | — | Google Analytics ID |
| `PUBLIC_PLAUSIBLE_DOMAIN` | No | — | Plausible domain |
| `PUBLIC_UMAMI_ID` | No | — | Umami site ID |
| `PUBLIC_CONTACT_PROVIDER` | No | — | Contact form provider |

---

*Dokumen ini adalah living document dan akan diperbarui seiring perkembangan produk.*
