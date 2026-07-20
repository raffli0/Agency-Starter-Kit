import type { PricingPlan } from "../types/pricing";

export const pricing: PricingPlan[] = [
    {
        name: "Starter",
        price: "$2,500",
        period: "one-time",
        description: "A focused landing page to validate your idea.",
        features: ["1 landing page", "Brand basics", "2 revision rounds", "2-week delivery"],
        cta: { label: "Get started", href: "/contact" },
    },
    {
        name: "Growth",
        price: "$6,500",
        period: "one-time",
        description: "A full marketing site with content and SEO.",
        features: ["Up to 6 pages", "Content & SEO", "Design system", "4-week delivery"],
        highlighted: true,
        cta: { label: "Choose Growth", href: "/contact" },
    },
    {
        name: "Scale",
        price: "Custom",
        description: "Ongoing design and engineering partnership.",
        features: ["Unlimited pages", "Dedicated squad", "Monthly retainer", "Priority support"],
        cta: { label: "Talk to us", href: "/contact" },
    },
];
