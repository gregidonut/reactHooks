import { createContext } from "react";

export type SupportedTheme = "light" | "dark";
export type ThemeContextVal = {
    theme: SupportedTheme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextVal | null>(null);
