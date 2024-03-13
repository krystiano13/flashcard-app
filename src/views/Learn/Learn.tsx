import React, { useState, useEffect } from "react";
import { DeckCard } from "../../components/Home/DeckCard";
import type { deck } from "../../types/types";

export function Learn() {
    const [decksToSee, setDecksToSee] = useState<deck[]>([]);
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
        const decksArray: deck[] = decks;
        setDecksToSee(decksArray.filter(item =>
            !item.cards.some(el => el.whenToSee.getTime() - new Date().getTime() >= 0)))
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
                                cardsInDeck={item.cardsInDeck}
                                mode="learn"
                            />
                        ))
                    }
                </>
            }
        </section>
    )
}