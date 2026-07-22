import { siteConfig } from "./site";

export const seoConfig = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    robots: {
        index: true,
        follow: true,
    },

    keywords: ["agency", "company profile", "astro", "landing page", "business"],

    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
} as const;

export type SEOConfig = typeof seoConfig;
