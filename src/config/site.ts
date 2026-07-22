export const siteConfig = {
    name: "Agency Starter Kit",

    title: "Modern agency landing page built with Astro",
    titleTemplate: "%s | Agency Starter Kit",

    description: "A fast, production-ready Astro starter kit for agencies and creative teams.",

    url: "https://agency-starter-kit.example.com",
    baseUrl: "https://agency-starter-kit.example.com",

    locale: "en",
    lang: "en-US",

    author: "Your Name",

    email: "your@email.com",
    phone: "+62 812-3456-7890",

    logo: "/logo.svg",
    favicon: "/favicon.svg",

    ogImage: "/og-image.webp",

    links: {
        twitter: "https://twitter.com/your-twitter",
        instagram: "https://instagram.com/your-instagram",
        facebook: "https://facebook.com/your-facebook",
        linkedin: "https://linkedin.com/in/your-linkedin",
        youtube: "https://youtube.com/your-youtube",
        tiktok: "https://tiktok.com/@your-tiktok",
        github: "https://github.com/your-github",
    },

    copyright: `© ${new Date().getFullYear()} Agency Starter Kit by Flintflow`,
} as const;

export type SiteConfig = typeof siteConfig;
