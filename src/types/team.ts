export interface TeamMember {
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
    links?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}
