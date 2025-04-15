import React, { useContext } from "react";
import { ThemeContext } from "../utils/context.ts";

export default function ThemeToggle(): React.JSX.Element {
    const { theme, toggleTheme } = useContext(ThemeContext)!;

    return (
        <>
            <h4>themeToggle</h4>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}
