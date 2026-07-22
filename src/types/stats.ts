export interface StatItem {
    label: string;
    value: string;
    icon?: string;
}

export interface StatsGroup {
    title?: string;
    description?: string;
    items: StatItem[];
}
