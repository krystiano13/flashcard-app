import React, { createContext, useState } from "react";
import type { deck } from "../types/types";

export const DeckContext = createContext<deck[]>([]);

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

    return (
        <DeckContext.Provider value={decks}>
            { children }
        </DeckContext.Provider>
    )
}