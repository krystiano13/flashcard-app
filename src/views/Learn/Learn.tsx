import React, { useState, useEffect, useContext } from "react";
import { SearchBar } from "../../components/Home/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import {CardsToSeeContext, DeckContext, DecksToSeeContext} from "../../contexts/DeckContext";
import { DeckCard } from "../../components/Home/DeckCard";
import type { deck } from "../../types/types";

export const Learn = ( ) => {
    const decksToSee = useContext(DecksToSeeContext);
    const cardsToSee = useContext(CardsToSeeContext);
    const decks = useContext(DeckContext);
    const search = useContext(SearchContext);

    return (
        <>
            <SearchBar />
            <section className="w-[100vw] overflow-y-auto appear1 h-[80vh] flex flex-col items-center gap-4 p-3">
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
                            (decks.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))).map(item => (
                                <DeckCard
                                    onClick={() => {}}
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
        </>

    )
}