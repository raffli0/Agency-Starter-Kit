import type { StatsGroup } from "../types/stats";
import type { Locale } from "../i18n/config";

/** Shared fields — edit once for all languages. */
const items = [
    { id: "projects", value: "120+", icon: "briefcase" },
    { id: "clients", value: "60+", icon: "users" },
    { id: "performance", value: "98", icon: "gauge" },
    { id: "years", value: "8", icon: "calendar" },
] as const;

type ItemId = (typeof items)[number]["id"];

const copy: Record<
    Locale,
    { title: string; description: string; labels: Record<ItemId, string> }
> = {
    en: {
        title: "Numbers that matter",
        description: "A snapshot of the impact we deliver for clients.",
        labels: {
            projects: "Projects shipped",
            clients: "Happy clients",
            performance: "Avg. performance score",
            years: "Years in business",
        },
    },
    id: {
        title: "Angka yang berarti",
        description: "Cuplikan dampak yang kami berikan untuk klien.",
        labels: {
            projects: "Proyek selesai",
            clients: "Klien puas",
            performance: "Rata-rata skor performa",
            years: "Tahun beroperasi",
        },
    },
};

export function statsByLocale(locale: Locale): StatsGroup {
    const t = copy[locale];
    return {
        title: t.title,
        description: t.description,
        items: items.map((item) => ({
            label: t.labels[item.id],
            value: item.value,
            icon: item.icon,
        })),
    };
}

export const stats: StatsGroup = statsByLocale("en");
