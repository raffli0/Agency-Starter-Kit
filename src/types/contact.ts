export interface ContactAddress {
    line1: string;
    line2?: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface ContactFormConfig {
    endpoint: string;
    provider: "none" | "formspree" | "resend" | "custom";
}

export interface BusinessHours {
    days: string;
    hours: string;
}

export interface ContactConfig {
    email: string;
    phone: string;
    address: ContactAddress;
    businessHours: BusinessHours[];
    form: ContactFormConfig;
}
