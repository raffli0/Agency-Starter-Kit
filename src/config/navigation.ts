import type { NavigationItem, FooterSection } from "../types/navigation";

export const navigation: NavigationItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export const footerNavigation: FooterSection[] = [
    {
        title: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        title: "Legal",
        items: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms" },
        ],
    },
];
