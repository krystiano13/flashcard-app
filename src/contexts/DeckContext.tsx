import React, { createContext, useState, useEffect } from "react";
import { setData, getData } from "../utils/storage";
import type { deck } from "../types/types";

export const DeckContext = createContext<deck[]>([]);
export const DeckSaveContext = createContext<(data:deck[]) => void>(() => {});

// @ts-ignore
export function DeckContextProvider({ children }) {
    const [decks, setDecks] = useState<deck[]>([]);

    useEffect(() => {
        getData().then(result => {
            setDecks(result);
        })
    }, []);

    useEffect(() => {
        setData(decks).then(() => console.log('saved'))
    }, [decks]);

    return (
        <DeckContext.Provider value={decks}>
            <DeckSaveContext.Provider value={(data: deck[]) => setDecks(data)}>
                { children }
            </DeckSaveContext.Provider>
        </DeckContext.Provider>
    )
}