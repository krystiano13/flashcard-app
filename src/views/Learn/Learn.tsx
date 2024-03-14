import React, { useState, useEffect, useContext } from "react";
import { DeckContext } from "../../App";
import { DeckCard } from "../../components/Home/DeckCard";
import type { deck } from "../../types/types";

export const Learn = ( ) => {
    const [decksToSee, setDecksToSee] = useState<deck[]>([]);
    const [cardsToSee, setCardsToSee] = useState<number[]>([]);
    const decks = useContext(DeckContext);

    useEffect(() => {
        const decksArray: deck[] = decks;
        setDecksToSee(decksArray.filter(item =>
            !item.cards.some(el => el.whenToSee.getTime() - new Date().getTime() >= 0)));

        // calculate cards to see
        const cardsArray: number[] = [];
        decksArray.forEach(item => {
            let cardsAmount: number = 0;
            item.cards.forEach(element => {
                if(element.whenToSee.getTime() - new Date().getTime() <= 0) {
                    cardsAmount++;
                }
            });
            cardsArray.unshift(cardsAmount);
        });
        setCardsToSee(cardsArray);
    }, []);

    return (
        <section className="w-[100vw] overflow-y-auto appear1 h-[90vh] flex flex-col items-center gap-4 p-3">
            {
                decksToSee.length < 1 &&
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-txt text-center text-xl max-w-[80%]">
                        You have no cards to check for now
                    </p>
                </div>
            }
            {
                decksToSee.length >= 1 &&
                <>
                    {
                        decks.map(item => (
                            <DeckCard
                                key={item.id}
                                title={item.title}
                                cardsInDeck={cardsToSee[item.id]}
                                mode="learn"
                            />
                        ))
                    }
                </>
            }
        </section>
    )
}