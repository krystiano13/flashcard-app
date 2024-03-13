import React, { useState } from "react";
import { DeckCard } from "../../components/Home/DeckCard";
import type { deck } from "../../types/types";

export function Learn() {
    const [decks, setDecks] = useState<deck[]>([
        {
            title: "Default Deck",
            cardsInDeck: 2
        },
    ]);
    return (
        <section className="w-[100vw] overflow-y-auto appear1 h-[90vh] flex flex-col items-center gap-4 p-3">
            {
                decks.length < 1 &&
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-txt text-center text-xl max-w-[80%]">
                        You have no cards to check for now
                    </p>
                </div>
            }
            {
                decks.length >= 1 &&
                <>
                    {
                        decks.map(item => (
                            <DeckCard
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