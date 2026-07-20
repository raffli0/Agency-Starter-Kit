import type { TeamMember } from "../types/team";

export const team: TeamMember[] = [
    {
        name: "Your Name",
        role: "Founder & Creative Director",
        bio: "Leads strategy and creative direction across client engagements.",
        links: {
            twitter: "https://twitter.com/your-twitter",
            linkedin: "https://linkedin.com/in/your-linkedin",
        },
    },
    {
        name: "Alex Chen",
        role: "Lead Engineer",
        bio: "Builds fast, accessible front-ends and design systems.",
        links: {
            github: "https://github.com/your-github",
        },
    },
    {
        name: "Priya Singh",
        role: "Product Designer",
        bio: "Turns research into clear, usable product experiences.",
    },
];
