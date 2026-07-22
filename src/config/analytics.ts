import type { AnalyticsConfig } from "../types/common";

export const analyticsConfig: AnalyticsConfig = {
    enabled: false,
    providers: {
        googleAnalytics: {
            id: "",
            enabled: false,
        },
        plausible: {
            id: "",
            domain: "",
            enabled: false,
        },
        umami: {
            id: "",
            src: "",
            enabled: false,
        },
    },
};
