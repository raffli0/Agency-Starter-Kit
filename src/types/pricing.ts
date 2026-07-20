export interface PricingPlan {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    cta: {
        label: string;
        href: string;
    };
}
