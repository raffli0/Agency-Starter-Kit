import type { ContactConfig } from "../types/contact";

export const contactConfig: ContactConfig = {
    email: "your@email.com",
    phone: "+62 812-3456-7890",
    address: {
        line1: "Jl. Sudirman No. 1",
        city: "Jakarta",
        country: "Indonesia",
        postalCode: "10220",
    },
    businessHours: [
        { days: "Monday – Friday", hours: "09:00 – 18:00" },
        { days: "Saturday", hours: "10:00 – 14:00" },
    ],
    form: {
        endpoint: "/api/contact",
        provider: "none",
    },
};
