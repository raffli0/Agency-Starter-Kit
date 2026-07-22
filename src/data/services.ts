import type { ServiceItem } from "../types/service";
import type { Locale } from "../i18n/config";

/** Shared fields — edit once for all languages. */
const items = [
    {
        id: "brand",
        icon: "palette",
        featured: true,
        highlights: {
            en: ["Logo design", "Style guides", "Brand strategy"],
            id: ["Desain logo", "Style guide", "Strategi brand"],
        },
    },
    {
        id: "web",
        icon: "globe",
        featured: true,
        highlights: {
            en: ["Astro", "Tailwind CSS", "Headless CMS"],
            id: ["Astro", "Tailwind CSS", "Headless CMS"],
        },
    },
    {
        id: "product",
        icon: "layout",
        featured: false,
        highlights: {
            en: ["UX research", "Prototyping", "Design systems"],
            id: ["Riset UX", "Prototyping", "Design system"],
        },
    },
    {
        id: "growth",
        icon: "trending-up",
        featured: false,
        highlights: {
            en: ["SEO", "Paid ads", "Analytics"],
            id: ["SEO", "Iklan berbayar", "Analitik"],
        },
    },
] as const;

type ItemId = (typeof items)[number]["id"];

const copy: Record<Locale, Record<ItemId, { title: string; description: string }>> = {
    en: {
        brand: {
            title: "Brand Identity",
            description:
                "Logo, visual systems, and guidelines that make your brand instantly recognizable.",
        },
        web: {
            title: "Web Design & Development",
            description: "Fast, accessible, and beautiful websites built with modern frameworks.",
        },
        product: {
            title: "Product Design",
            description: "End-to-end UX/UI for web and mobile products that convert.",
        },
        growth: {
            title: "Marketing & Growth",
            description: "Campaigns and funnels engineered to grow your audience and revenue.",
        },
    },
    id: {
        brand: {
            title: "Identitas Brand",
            description:
                "Logo, sistem visual, dan panduan yang membuat brand Anda langsung dikenali.",
        },
        web: {
            title: "Desain & Pengembangan Web",
            description: "Situs web yang cepat, aksesibel, dan indah dengan framework modern.",
        },
        product: {
            title: "Desain Produk",
            description: "UX/UI end-to-end untuk produk web dan mobile yang mengonversi.",
        },
        growth: {
            title: "Marketing & Growth",
            description:
                "Kampanye dan funnel yang dirancang untuk menumbuhkan audiens dan revenue.",
        },
    },
};

export function servicesByLocale(locale: Locale): ServiceItem[] {
    return items.map((item) => {
        const t = copy[locale][item.id];
        return {
            title: t.title,
            description: t.description,
            icon: item.icon,
            highlights: [...item.highlights[locale]],
            featured: item.featured || undefined,
        };
    });
}

export const services: ServiceItem[] = servicesByLocale("en");
