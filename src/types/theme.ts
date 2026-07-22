export interface ThemeConfig {
    defaultTheme: "system" | "light" | "dark";
    enableSystem: boolean;
    disableTransitionsOnChange: boolean;
    radius: string;
    container: {
        maxWidth: string;
        padding: string;
    };
}
