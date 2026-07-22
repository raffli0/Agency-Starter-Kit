import type { TeamMember } from "../types/team";
import type { Locale } from "../i18n/config";

/** Shared fields — edit once for all languages. */
const members = [
    {
        id: "founder",
        name: "Your Name",
        role: "Founder & Creative Director",
        links: {
            twitter: "https://twitter.com/your-twitter",
            linkedin: "https://linkedin.com/in/your-linkedin",
        },
    },
    {
        id: "engineer",
        name: "Alex Chen",
        role: "Lead Engineer",
        links: {
            github: "https://github.com/your-github",
        },
    },
    {
        id: "designer",
        name: "Priya Singh",
        role: "Product Designer",
    },
] as const;

type MemberId = (typeof members)[number]["id"];

const bios: Record<Locale, Record<MemberId, string>> = {
    en: {
        founder: "Leads strategy and creative direction across client engagements.",
        engineer: "Builds fast, accessible front-ends and design systems.",
        designer: "Turns research into clear, usable product experiences.",
    },
    id: {
        founder: "Memimpin strategi dan arah kreatif di seluruh proyek klien.",
        engineer: "Membangun front-end yang cepat, aksesibel, dan design system.",
        designer: "Mengubah riset menjadi pengalaman produk yang jelas dan usable.",
    },
};

export function teamByLocale(locale: Locale): TeamMember[] {
    return members.map((member) => ({
        name: member.name,
        role: member.role,
        bio: bios[locale][member.id],
        ...("links" in member ? { links: member.links } : {}),
    }));
}

export const team: TeamMember[] = teamByLocale("en");
