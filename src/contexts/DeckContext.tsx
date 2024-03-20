import React, { createContext, useState, useEffect } from "react";
import { getData, setData } from "../utils/storage";
import type { deck } from "../types/types";

export const DeckContext = createContext<deck[]>([]);
export const DeckSaveContext = createContext<(data:deck[]) => void>(() => {});
export const CardsToSeeContext = createContext<number[]>([]);
export const DecksToSeeContext = createContext<deck[]>([]);

// @ts-ignore
export function DeckContextProvider({ children }) {
    const [decks, setDecks] = useState<deck[]>([]);
    const [decksToSee, setDecksToSee] = useState<deck[]>([]);
    const [cardsToSee, setCardsToSee] = useState<number[]>([]);

    useEffect(() => {
        const decksArray: deck[] = decks;
        setDecksToSee(decksArray.filter(item =>
            item.cards.some(el => el.whenToSee.getTime() - new Date().getTime() <= 0)));

        // calculate cards to see
        const cardsArray: number[] = [];
        decksArray.forEach(item => {
            let cardsAmount: number = 0;
            if(item.cards.length > 0) {
                item.cards.forEach(element => {
                    if(element.whenToSee.getTime() - new Date().getTime() <= 0) {
                        cardsAmount++;
                    }
                });
            }
            cardsArray.unshift(cardsAmount);
        });
        setCardsToSee(cardsArray);

    }, [decks]);

    useEffect(() => {
        getData().then(result => {
            setDecks(result);
        })
    }, []);

    useEffect(() => {
        setData(decks);
    }, [decks]);

    return (
        <DeckContext.Provider value={decks}>
            <DeckSaveContext.Provider value={(data: deck[]) => setDecks(data)}>
                <DecksToSeeContext.Provider value={decksToSee}>
                    <CardsToSeeContext.Provider value={cardsToSee}>
                        { children }
                    </CardsToSeeContext.Provider>
                </DecksToSeeContext.Provider>
            </DeckSaveContext.Provider>
        </DeckContext.Provider>
    )
}