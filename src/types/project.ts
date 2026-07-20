import type { CollectionEntry } from "astro:content";

export type ProjectItem = CollectionEntry<"projects">["data"] & {
    slug?: string;
};
