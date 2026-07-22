export interface SEOImage {
    url: string;
    width: number;
    height: number;
    alt: string;
}

export interface SEOConfig {
    metadataBase: URL;

    title: {
        default: string;
        template: string;
    };

    description: string;

    robots: {
        index: boolean;
        follow: boolean;
    };

    keywords: string[];

    openGraph: {
        type: string;
        locale: string;
        url: string;
        title: string;
        description: string;
        siteName: string;
        images: SEOImage[];
    };
}
