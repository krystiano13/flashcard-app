// react imports
import React, { useState } from "react";

// components
import { Nav } from '../../components/Nav.js';
import { DeckCard } from "../../components/Home/DeckCard.js";
import { SearchBar } from "../../components/Home/SearchBar";

export function Home() {
    return (
        <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
            <SearchBar />
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4">
                <DeckCard title="Default Deck" cardsInDeck={0} />
            </section>
            <Nav />
        </main>
    )
}