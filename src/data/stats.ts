import type { StatsGroup } from "../types/stats";

export const stats: StatsGroup = {
    title: "Numbers that matter",
    description: "A snapshot of the impact we deliver for clients.",
    items: [
        { label: "Projects shipped", value: "120+", icon: "briefcase" },
        { label: "Happy clients", value: "60+", icon: "users" },
        { label: "Avg. performance score", value: "98", icon: "gauge" },
        { label: "Years in business", value: "8", icon: "calendar" },
    ],
};
