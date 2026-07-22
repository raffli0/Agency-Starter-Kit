import type { Testimonial } from "../types/testimonial";
import type { Locale } from "../i18n/config";

/** Shared fields — edit once for all languages. */
const items = [
    {
        id: "umam",
        author: "Khoirul Umam",
        role: "Founder",
        company: "Flintflow",
    },
    {
        id: "raffly",
        author: "Raffly",
        role: "CEO",
        company: "Fakie",
    },
    {
        id: "maya",
        author: "Maya Rahman",
        role: "Head of Product",
        company: "Atlas",
    },
] as const;

type ItemId = (typeof items)[number]["id"];

const quotes: Record<Locale, Record<ItemId, string>> = {
    en: {
        umam: "They transformed our brand and tripled our inbound leads in three months.",
        raffly: "The new site is fast, beautiful, and easy for our team to manage.",
        maya: "A rare agency that truly understands both design and engineering.",
    },
    id: {
        umam: "Mereka mentransformasi brand kami dan melipatgandakan lead inbound dalam tiga bulan.",
        raffly: "Situs baru kami cepat, indah, dan mudah dikelola tim.",
        maya: "Agency langka yang benar-benar memahami desain dan engineering.",
    },
};

export function testimonialsByLocale(locale: Locale): Testimonial[] {
    return items.map((item) => ({
        quote: quotes[locale][item.id],
        author: item.author,
        role: item.role,
        company: item.company,
    }));
}

export const testimonials: Testimonial[] = testimonialsByLocale("en");
