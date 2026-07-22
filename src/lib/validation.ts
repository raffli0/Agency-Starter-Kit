export function isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isUrl(value: string): boolean {
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}

export function required<T>(value: T | null | undefined, field = "value"): T {
    if (value === null || value === undefined || value === "") {
        throw new Error(`Missing required ${field}`);
    }
    return value;
}
