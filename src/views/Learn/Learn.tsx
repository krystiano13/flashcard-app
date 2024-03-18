import React, { useState, useEffect, useContext } from "react";
import { SearchBar } from "../../components/Home/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { DeckContext } from "../../contexts/DeckContext";
import { DeckCard } from "../../components/Home/DeckCard";
import type { deck } from "../../types/types";

export const Learn = ( ) => {
    const [decksToSee, setDecksToSee] = useState<deck[]>([]);
    const [cardsToSee, setCardsToSee] = useState<number[]>([]);
    const decks = useContext(DeckContext);
    const search = useContext(SearchContext);

    useEffect(() => {
        const decksArray: deck[] = decks;
        console.log(decksArray);
        setDecksToSee(decksArray.filter(item =>
            item.cards.length <= 0 && !item.cards.some(el => el.whenToSee.getTime() - new Date().getTime() >= 0)));

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
            else {
                cardsAmount = 0;
            }
            console.log(cardsAmount);
            cardsArray.unshift(cardsAmount);
        });
        setCardsToSee(cardsArray);
    }, []);

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