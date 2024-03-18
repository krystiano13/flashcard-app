import React, { createContext, useState, useEffect } from "react";
import { setData } from "../utils/storage";
import type { deck } from "../types/types";

export const DeckContext = createContext<deck[]>([]);
export const DeckSaveContext = createContext<(data:deck[]) => void>(() => {});

// @ts-ignore
export function DeckContextProvider({ children }) {
    const [decks, setDecks] = useState<deck[]>([
        {
            id: 0,
            title: "Default Deck",
            cardsInDeck: 2,
            cards: [
                {
                    id: 0,
                    oneSide: "one side",
                    secondSide: "second side",
                    whenToSee: new Date(new Date().getTime() - (1000 * 60 * 60 * 24))
                }
            ]
        },
    ]);

    useEffect(() => {
        setData(decks)
    }, [decks]);

    return (
        <DeckContext.Provider value={decks}>
            <DeckSaveContext.Provider value={(data: deck[]) => setDecks(data)}>
                { children }
            </DeckSaveContext.Provider>
        </DeckContext.Provider>
    )
}