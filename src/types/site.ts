export interface SiteLink {
    twitter: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    github: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    titleTemplate: string;
    description: string;

    url: string;
    baseUrl: string;

    locale: string;
    lang: string;

    author: string;

    email: string;
    phone: string;

    logo: string;
    favicon: string;

    ogImage: string;

    links: SiteLink;

    copyright: string;
}
