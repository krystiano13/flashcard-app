import React, { useEffect, useContext, useState } from "react";
import { SearchBar } from "../../components/Home/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { DeckContext } from "../../contexts/DeckContext";
import { DeckCard } from "../../components/Home/DeckCard";
import { useNavigate } from "react-router";
import type { deck } from "../../types/types";

export const Learn = ( ) => {
    const [decksToSee, setDecksToSee] = useState<deck[]>([]);
    const [cardsToSee, setCardsToSee] = useState<number[]>([]);
    const decks = useContext(DeckContext);
    const search = useContext(SearchContext);

    const navigate = useNavigate();

    const calculateCardsToSee = () => {
        const decksArray: deck[] = decks;
        const newDeckArray = decksArray.filter(item =>
            item.cards.some(el => el.whenToSee - (new Date()).getTime() <= 0));
        setDecksToSee(newDeckArray);

        // calculate cards to see
        const cardsArray: number[] = [];
        decksArray.forEach(item => {
            let cardsAmount: number = 0;
            if(item.cards.length > 0) {
                item.cards.forEach(element => {
                    if(element.whenToSee - (new Date()).getTime() <= 0) {
                        cardsAmount++;
                    }
                });
            }
            cardsArray.push(cardsAmount);
        });
        setCardsToSee(cardsArray);

    };

    useEffect(() => {
        calculateCardsToSee();
    },[])

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
                            (decksToSee.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))).map(item => (
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