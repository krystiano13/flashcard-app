import React, { useContext } from 'react';
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";

export function DeckCreate() {
    const deckSave = useContext(DeckSaveContext);
    const deckContext = useContext(DeckContext);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        deckSave([
            ...deckContext,
            {
                id: (deckContext.length - 1),
                title: data.get('deck') as string,
                cardsInDeck: 0,
                cards: []
            }
        ]);
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[90%] md:w-[70%] p-3 gap-12 rounded-lg flex flex-col justify-center items-center appear2">
                <input
                    className="
                    w-full bg-transparent text-lg md:text-3xl pb-2 md:pb-4 text-white outline-0
                    border-b-solid border-b-[1px] border-white "
                    placeholder="Your deck name"
                    name="deck"
                    type="text"
                    required
                    max={64}
                />
                <button
                    className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </section>
    )
}