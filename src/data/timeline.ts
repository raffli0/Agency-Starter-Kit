import type { TimelineEntry } from "../types/timeline";
import type { Locale } from "../i18n/config";

/** Shared fields — edit once for all languages. */
const entries = [
    { id: "founded", year: "2017" },
    { id: "expanded", year: "2020" },
    { id: "scaled", year: "2023" },
    { id: "oss", year: "2025" },
] as const;

type EntryId = (typeof entries)[number]["id"];

const copy: Record<Locale, Record<EntryId, { title: string; description: string }>> = {
    en: {
        founded: {
            title: "Founded",
            description: "Started as a two-person studio focused on brand and web.",
        },
        expanded: {
            title: "Expanded",
            description: "Grew the team and added product design and engineering.",
        },
        scaled: {
            title: "Scaled",
            description: "Launched a reusable design system used across all client work.",
        },
        oss: {
            title: "Open source",
            description: "Released the Agency Starter Kit to help teams ship faster.",
        },
    },
    id: {
        founded: {
            title: "Didirikan",
            description: "Dimulai sebagai studio dua orang yang fokus pada brand dan web.",
        },
        expanded: {
            title: "Berkembang",
            description: "Memperbesar tim dan menambahkan product design serta engineering.",
        },
        scaled: {
            title: "Menskalakan",
            description: "Meluncurkan design system yang dipakai di seluruh karya klien.",
        },
        oss: {
            title: "Open source",
            description: "Merilis Agency Starter Kit untuk membantu tim ship lebih cepat.",
        },
    },
};

export function timelineByLocale(locale: Locale): TimelineEntry[] {
    return entries.map((entry) => {
        const t = copy[locale][entry.id];
        return {
            year: entry.year,
            title: t.title,
            description: t.description,
        };
    });
}

export const timeline: TimelineEntry[] = timelineByLocale("en");
