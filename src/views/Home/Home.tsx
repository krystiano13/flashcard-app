// react imports
import React from "react";

// components
import { DeckCard } from "../../components/Home/DeckCard.js";
import { SearchBar } from "../../components/Home/SearchBar";

export function Home() {
    return (
        <>
            <SearchBar />
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4 appear1">
                <DeckCard mode="edit" title="Default Deck" cardsInDeck={0} />
            </section>
        </>
    )
}