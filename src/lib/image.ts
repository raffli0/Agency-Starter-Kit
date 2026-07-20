export function getImageUrl(src: string, base = ""): string {
    if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
    return base ? `${base.replace(/\/$/, "")}/${src.replace(/^\//, "")}` : src;
}

export function placeholderImage(width: number, height: number, label = ""): string {
    return `https://placehold.co/${width}x${height}/1e293b/38bdf8?text=${encodeURIComponent(label)}`;
}
