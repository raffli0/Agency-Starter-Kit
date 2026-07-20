export const ROUTES = {
    home: "/",
    about: "/about",
    services: "/services",
    projects: "/projects",
    blog: "/blog",
    contact: "/contact",
    privacy: "/privacy-policy",
    terms: "/terms",
    notFound: "/404",
} as const;

export type RouteKey = keyof typeof ROUTES;
