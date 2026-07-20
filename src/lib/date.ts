const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function formatDate(
    value: string | Date,
    locale = "en-US",
    options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" },
): string {
    const date = typeof value === "string" ? new Date(value) : value;
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(locale, options).format(date);
}

export function formatDateShort(value: string | Date): string {
    const date = typeof value === "string" ? new Date(value) : value;
    if (Number.isNaN(date.getTime())) return "";
    return `${MONTHS[date.getMonth()].slice(0, 3)} ${date.getFullYear()}`;
}

export function readingTime(body: string, wordsPerMinute = 200): number {
    const words = body.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / wordsPerMinute));
}
