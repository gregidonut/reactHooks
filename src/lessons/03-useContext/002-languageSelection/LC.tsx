import React, { useState } from "react";
import LangContext, { useLang } from "./context.ts";
import type { SupportedLang } from "./context.ts";

function LessonComponent(): React.JSX.Element {
    const [language, setLanguage] = useState<SupportedLang>("en");

    function changeLanguage(lang: SupportedLang): void {
        setLanguage(lang);
    }

    return (
        <LangContext.Provider
            value={{ lang: language, changeLangTo: changeLanguage }}
        >
            <Header />
            <Content />
        </LangContext.Provider>
    );
}

function Header() {
    const { lang, changeLangTo } = useLang()!;
    return (
        <header>
            <h1>{lang === "en" ? "Hello" : "Hola"}</h1>
            <button onClick={() => changeLangTo("en")}>English</button>
            <button onClick={() => changeLangTo("es")}>Español</button>
        </header>
    );
}

function Content(): React.JSX.Element {
    const { lang } = useLang()!;
    return <p>current lang: {lang}</p>;
}

export default LessonComponent;
