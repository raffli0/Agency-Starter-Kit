export const themeConfig = {
    defaultTheme: "system",

    enableSystem: true,

    disableTransitionsOnChange: true,

    radius: "0.75rem",

    container: {
        maxWidth: "1280px",
        padding: "1rem",
    },
} as const;

export type ThemeConfig = typeof themeConfig;
