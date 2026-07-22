export const languages = {
    en: "English",
    id: "Indonesia",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "en";

export const locales = Object.keys(languages) as Locale[];

export const localeLabels: Record<Locale, string> = {
    en: "EN",
    id: "ID",
};

export const localeHtmlLang: Record<Locale, string> = {
    en: "en",
    id: "id",
};

export const localeOg: Record<Locale, string> = {
    en: "en_US",
    id: "id_ID",
};
