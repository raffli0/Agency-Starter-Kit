import { defaultLocale, locales, type Locale } from "./config";
import { ui, type UIKey } from "./ui";

export function isLocale(value: string): value is Locale {
    return (locales as string[]).includes(value);
}

export function getLangFromUrl(url: URL): Locale {
    const [, first] = url.pathname.split("/");
    if (first && isLocale(first) && first !== defaultLocale) {
        return first;
    }
    return defaultLocale;
}

export function getLangFromPathname(pathname: string): Locale {
    const [, first] = pathname.split("/");
    if (first && isLocale(first) && first !== defaultLocale) {
        return first;
    }
    return defaultLocale;
}

/** Strip locale prefix from a pathname. */
export function stripLocale(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] && isLocale(segments[0]) && segments[0] !== defaultLocale) {
        const rest = segments.slice(1).join("/");
        return rest ? `/${rest}` : "/";
    }
    return pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) || "/" : pathname || "/";
}

/** Build a localized path for a given locale. */
export function localizePath(path: string, locale: Locale = defaultLocale): string {
    const clean = path.startsWith("/") ? path : `/${path}`;
    const base = stripLocale(clean);

    if (locale === defaultLocale) {
        return base === "" ? "/" : base;
    }

    if (base === "/") return `/${locale}`;
    return `/${locale}${base}`;
}

/** Switch current path to another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
    const base = stripLocale(pathname);
    return localizePath(base, target);
}

export function useTranslations(locale: Locale) {
    return function t(key: UIKey): string {
        return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
    };
}

export function getLocalizedHref(href: string, locale: Locale): string {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
        return href;
    }
    return localizePath(href, locale);
}
