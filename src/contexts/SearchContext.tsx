import React, { createContext, useState } from "react";

export const SearchContext = createContext<string>("");
export const SearchSetterContext = createContext(
    (value:string) => {}
)

// @ts-ignore
export function SearchContextProvider({ children }) {
    const [search, setSearch] = useState<string>("");

    return (
        <SearchContext.Provider value={search}>
            <SearchSetterContext.Provider value={setSearch}>
                { children }
            </SearchSetterContext.Provider>
        </SearchContext.Provider>
    )
}