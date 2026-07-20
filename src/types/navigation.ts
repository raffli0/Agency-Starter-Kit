export interface NavigationItem {
    label: string;
    href: string;
    external?: boolean;
    children?: NavigationItem[];
}

export interface FooterSection {
    title: string;
    items: NavigationItem[];
}
