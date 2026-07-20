export interface AnalyticsProvider {
    id: string;
    enabled: boolean;
    src?: string;
    domain?: string;
}

export interface AnalyticsConfig {
    enabled: boolean;
    providers: {
        googleAnalytics: AnalyticsProvider;
        plausible: AnalyticsProvider;
        umami: AnalyticsProvider;
    };
}

export interface FeatureFlags {
    blog: boolean;
    projects: boolean;
    testimonials: boolean;
    team: boolean;
    pricing: boolean;
    faq: boolean;
    darkMode: boolean;
    newsletter: boolean;
    search: boolean;
}

export type Locale = "en" | "id";

export interface ImageAsset {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}
