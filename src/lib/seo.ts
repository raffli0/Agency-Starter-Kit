import type { Metadata } from "../types/metadata";
import { siteConfig } from "../config/site";
import { seoConfig } from "../config/seo";

interface ResolvedMeta {
    title: string;
    description: string;
    image: string;
    type: "website" | "article";
    noindex: boolean;
    canonical: string;
}

export function buildMetadata(meta: Metadata = {}, pathname = "/"): ResolvedMeta {
    const title = meta.title
        ? seoConfig.title.template.replace("%s", meta.title)
        : seoConfig.title.default;

    const canonical = new URL(pathname, siteConfig.url).toString();
    const image = new URL(meta.image ?? siteConfig.ogImage, siteConfig.url).toString();

    return {
        title,
        description: meta.description ?? seoConfig.description,
        image,
        type: meta.type ?? "website",
        noindex: meta.noindex ?? !seoConfig.robots.index,
        canonical,
    };
}
