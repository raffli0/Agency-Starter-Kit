import type { FAQItem } from "../types/faq";
import type { Locale } from "../i18n/config";

const items = [
    { id: "duration" },
    { id: "copy" },
    { id: "brand" },
    { id: "handoff" },
] as const;

type ItemId = (typeof items)[number]["id"];

const copy: Record<
    Locale,
    Record<ItemId, { question: string; answer: string; category: string }>
> = {
    en: {
        duration: {
            question: "How long does a typical project take?",
            answer: "Landing pages take about two weeks; full sites usually four to six weeks depending on scope.",
            category: "Process",
        },
        copy: {
            question: "Do you provide copywriting and photography?",
            answer: "Yes, we can include copy and stock or sourced photography as part of the engagement.",
            category: "Scope",
        },
        brand: {
            question: "Can you work with our existing brand?",
            answer: "Absolutely. We can extend or refresh your current brand and design system.",
            category: "Scope",
        },
        handoff: {
            question: "What does handoff look like?",
            answer: "You receive clean source files, documentation, and a short onboarding call for your team.",
            category: "Process",
        },
    },
    id: {
        duration: {
            question: "Berapa lama proyek biasanya berlangsung?",
            answer: "Landing page sekitar dua minggu; situs lengkap biasanya empat hingga enam minggu tergantung ruang lingkup.",
            category: "Proses",
        },
        copy: {
            question: "Apakah Anda menyediakan copywriting dan fotografi?",
            answer: "Ya, kami dapat menyertakan copy serta fotografi stok atau yang di-source sebagai bagian dari proyek.",
            category: "Ruang lingkup",
        },
        brand: {
            question: "Bisakah bekerja dengan brand yang sudah ada?",
            answer: "Tentu. Kami dapat memperluas atau menyegarkan brand dan design system Anda saat ini.",
            category: "Ruang lingkup",
        },
        handoff: {
            question: "Bagaimana proses handoff-nya?",
            answer: "Anda menerima source file yang rapi, dokumentasi, dan sesi onboarding singkat untuk tim Anda.",
            category: "Proses",
        },
    },
};

export function faqByLocale(locale: Locale): FAQItem[] {
    return items.map((item) => {
        const t = copy[locale][item.id];
        return {
            question: t.question,
            answer: t.answer,
            category: t.category,
        };
    });
}

export const faq: FAQItem[] = faqByLocale("en");
