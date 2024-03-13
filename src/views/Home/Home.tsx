// react imports
import React, { useContext } from "react";
import { DeckContext } from "../../App";

// components
import { DeckCard } from "../../components/Home/DeckCard.js";
import { SearchBar } from "../../components/Home/SearchBar";

export function Home() {
    const decks = useContext(DeckContext);
    return (
        <>
            <SearchBar />
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4 appear1">
                {
                    decks.map(item => (
                        <DeckCard
                            key={item.id}
                            title={item.title}
                            cardsInDeck={item.cardsInDeck}
                            mode="edit"
                        />
                    ))
                }
            </section>
        </>
    )
}