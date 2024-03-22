import React, { useEffect, useContext } from "react";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";
import { setData } from "../../utils/storage";

export function MoreOptions() {
    const [params, setParams] = useSearchParams();

    const navigate = useNavigate();
    const deckSave = useContext(DeckSaveContext);
    const decks = useContext(DeckContext);

    useEffect(() => {
        if(!params.get('deck')) {
            navigate('/');
        }
    },[]);

    async function deleteDeck() {
        const deckID:number = Number(params.get('deck'));

        return new Promise(resolve => {
            const decksArray = decks.filter(item => item.id !== deckID);
            deckSave(decksArray);
            setData(decksArray);
            resolve('resolved');
        });
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col justify-center items-center gap-4 md:gap-9">
            <NavLink to="/"
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Rename Deck
            </NavLink>
            <button
                onClick={() => {deleteDeck().then(() => navigate(`/`))}}
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Delete Deck
            </button>
        </section>
    )
}