export interface NavLink {
    label: string;
    href: string;
}

export interface NavigationConfig {
    links: NavLink[];
    ctaButton: {
        label: string;
        href: string;
    };
}

export const navigation: NavigationConfig = {
    links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ],
    ctaButton: {
        label: "Plan My Trip",
        href: "/contact",
    },
};
