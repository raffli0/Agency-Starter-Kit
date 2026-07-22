export const themeConfig = {
    defaultTheme: "light",

    enableSystem: true,

    disableTransitionsOnChange: true,

    radius: "0rem",

    container: {
        maxWidth: "1280px",
        padding: "1rem",
    },
} as const;

export type ThemeConfig = typeof themeConfig;
