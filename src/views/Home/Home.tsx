// react imports
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { SearchContext } from "../../contexts/SearchContext";
import { DeckContext } from "../../contexts/DeckContext";

// components
import { DeckCard } from "../../components/Home/DeckCard.js";
import { SearchBar } from "../../components/Home/SearchBar";

interface Props {
    setDeck: (value:number) => void
}

export const Home:React.FC<Props> = ({ setDeck }) => {
    const decks = useContext(DeckContext);
    const search = useContext(SearchContext);
    const navigate = useNavigate();

    return (
        <>
            <SearchBar />
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4 appear1">
                {
                    (decks.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))).map(item => (
                        <DeckCard
                            onClick={() => {
                                setDeck(item.id);
                                navigate('/cards');
                            }}
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