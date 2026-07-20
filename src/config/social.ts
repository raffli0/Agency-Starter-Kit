import type { SocialLinks } from "../types/social";

export const socialConfig: SocialLinks = {
    twitter: "https://twitter.com/your-twitter",
    instagram: "https://instagram.com/your-instagram",
    facebook: "https://facebook.com/your-facebook",
    linkedin: "https://linkedin.com/in/your-linkedin",
    youtube: "https://youtube.com/your-youtube",
    tiktok: "https://tiktok.com/@your-tiktok",
    github: "https://github.com/your-github",
};

export const socialLabels: Record<keyof SocialLinks, string> = {
    twitter: "Twitter",
    instagram: "Instagram",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    tiktok: "TikTok",
    github: "GitHub",
};
