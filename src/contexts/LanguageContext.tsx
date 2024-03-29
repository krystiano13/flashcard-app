import React, { ReactNode, createContext, useState } from "react";

export const LanguageContext = createContext("english");
export const LanguageSetContext = createContext((lang:string) => {});

interface Props {
    children: ReactNode
}

export const LanguageContextProvider:React.FC<Props> = ({ children }) => {
    const [language, setLanguage] = useState("polish");

    return (
        <LanguageContext.Provider value={language}>
            <LanguageSetContext.Provider value={(lang:string) => setLanguage(lang)}>
                { children }
            </LanguageSetContext.Provider>
        </LanguageContext.Provider>
    )
}