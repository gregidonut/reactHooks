import { createContext, useContext } from "react";

export type SupportedLang = "en" | "es";
export type LangContextVal = {
    lang: SupportedLang;
    changeLangTo: (l: SupportedLang) => void;
};

const LangContext = createContext<LangContextVal | null>(null);
export default LangContext;

export function useLang(): LangContextVal | null {
    return useContext(LangContext);
}
