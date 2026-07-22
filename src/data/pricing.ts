import type { PricingPlan } from "../types/pricing";
import type { Locale } from "../i18n/config";
import { localizePath } from "../i18n/utils";

/** Shared fields — edit once for all languages. */
const plans = [
    {
        id: "starter",
        name: "Starter Website",
        price: "Rp1-2jt",
        highlighted: false,
    },
    {
        id: "business",
        name: "Business Website",
        price: "Rp3-5jt",
        highlighted: true,
    },
    {
        id: "custom",
        name: "Custom System",
        price: "Custom",
        highlighted: false,
    },
] as const;

type PlanId = (typeof plans)[number]["id"];

/** Locale-only copy (period, description, features, CTA). */
const copy: Record<
    Locale,
    Record<PlanId, { period?: string; description: string; features: string[]; cta: string }>
> = {
    en: {
        starter: {
            period: "one-time",
            description: "A focused landing page to validate your idea.",
            features: ["1 landing page", "Brand basics", "2 revision rounds", "2-week delivery"],
            cta: "Choose Plan",
        },
        business: {
            period: "one-time",
            description: "A full marketing site with content and SEO.",
            features: ["Up to 6 pages", "Content & SEO", "Design system", "4-week delivery"],
            cta: "Choose Plan",
        },
        custom: {
            description: "Ongoing design and engineering partnership.",
            features: [
                "Unlimited pages",
                "Dedicated squad",
                "Monthly retainer",
                "Priority support",
            ],
            cta: "Talk to us",
        },
    },
    id: {
        starter: {
            period: "sekali bayar",
            description: "Cocok untuk UMKM, personal brand, usaha baru.",
            features: ["1-2 Halaman", "Responsif", "Pengerjaan 2-5 hari", "Gratis Domain"],
            cta: "Pilih Paket",
        },
        business: {
            period: "sekali bayar",
            description: "Situs marketing lengkap dengan konten dan SEO.",
            features: ["Hingga 6 halaman", "Konten & SEO", "Design system", "Pengiriman 4 minggu"],
            cta: "Pilih Paket",
        },
        custom: {
            description: "Kemitraan desain dan engineering berkelanjutan.",
            features: [
                "Halaman tanpa batas",
                "Tim khusus",
                "Retainer bulanan",
                "Dukungan prioritas",
            ],
            cta: "Konsultasi dengan kami",
        },
    },
};

/** Single source of truth for pricing (EN + ID). */
export function pricingByLocale(locale: Locale): PricingPlan[] {
    const contact = localizePath("/contact", locale);

    return plans.map((plan) => {
        const t = copy[locale][plan.id];
        return {
            name: plan.name,
            price: plan.price,
            period: t.period,
            description: t.description,
            features: t.features,
            highlighted: plan.highlighted || undefined,
            cta: { label: t.cta, href: contact },
        };
    });
}

/** English pricing (default / backward-compatible export). */
export const pricing: PricingPlan[] = pricingByLocale("en");
