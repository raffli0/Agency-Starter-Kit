export interface BlogPostFrontmatter {
    title: string;
    description: string;
    author: string;
    publishedAt: string;
    updatedAt?: string;
    tags?: string[];
    cover?: string;
    draft?: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
    slug: string;
    body?: string;
}
