import type { ServiceItem } from "../types/service";

export const services: ServiceItem[] = [
    {
        title: "Brand Identity",
        description:
            "Logo, visual systems, and guidelines that make your brand instantly recognizable.",
        icon: "palette",
        highlights: ["Logo design", "Style guides", "Brand strategy"],
        featured: true,
    },
    {
        title: "Web Design & Development",
        description: "Fast, accessible, and beautiful websites built with modern frameworks.",
        icon: "globe",
        highlights: ["Astro", "Tailwind CSS", "Headless CMS"],
        featured: true,
    },
    {
        title: "Product Design",
        description: "End-to-end UX/UI for web and mobile products that convert.",
        icon: "layout",
        highlights: ["UX research", "Prototyping", "Design systems"],
    },
    {
        title: "Marketing & Growth",
        description: "Campaigns and funnels engineered to grow your audience and revenue.",
        icon: "trending-up",
        highlights: ["SEO", "Paid ads", "Analytics"],
    },
];
