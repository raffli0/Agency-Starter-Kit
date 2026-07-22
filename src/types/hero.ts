export interface HeroStat {
    label: string;
    value: string;
}

export interface HeroAction {
    label: string;
    href: string;
    variant: "primary" | "secondary";
}

export interface HeroConfig {
    eyebrow: string;
    heading: string;
    subtext: string;
    image?: string;
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
    stats: HeroStat[];
}
