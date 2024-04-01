import React, { ReactNode, createContext, useState } from "react";
import { useEffect } from "react";
import { getLanguage } from "../utils/storage";
import { setLanguage as setLang } from "../utils/storage";

export const LanguageContext = createContext("english");
export const LanguageSetContext = createContext((lang:string) => {});

interface Props {
    children: ReactNode
}

export const LanguageContextProvider:React.FC<Props> = ({ children }) => {
    const [language, setLanguage] = useState("english");

    useEffect(() => {
        getLanguage().then(value => setLanguage(value));
    }, []);

    useEffect(() => {
        setLang(language as "polish"|"english");
    }, [language]);

    return (
        <LanguageContext.Provider value={language}>
            <LanguageSetContext.Provider value={(lang:string) => setLanguage(lang)}>
                { children }
            </LanguageSetContext.Provider>
        </LanguageContext.Provider>
    )
}