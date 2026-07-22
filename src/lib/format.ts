export function formatPhone(phone: string): string {
    return phone.replace(/\s+/g, "");
}

export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return `${text.slice(0, length).trimEnd()}…`;
}

export function slugify(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function classNames(...values: Array<string | false | null | undefined>): string {
    return values.filter(Boolean).join(" ");
}
