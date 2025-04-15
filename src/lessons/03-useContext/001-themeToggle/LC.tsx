import React, { useState } from "react";
import { ThemeContext } from "./utils/context.ts";
import type { SupportedTheme } from "./utils/context.ts";
import ThemeToggle from "./themeToggle/ThemeToggle.tsx";

function LessonComponent(): React.JSX.Element {
    const [theme, setTheme] = useState<SupportedTheme>("light");

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <h3>Toolbar</h3>
            <ThemeToggle />
        </div>
    );
}
export default LessonComponent;
