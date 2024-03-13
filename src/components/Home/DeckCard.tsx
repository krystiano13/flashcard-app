import type { FC } from "react";
import React from "react";

interface Props {
    title: string,
    cardsInDeck: number,
    mode: "learn"|"edit"
}

export const DeckCard:FC<Props> = ({ title, cardsInDeck, mode }) => {
    return (
        <button className="w-full glassomorph1 flex flex-col gap-2 rounded-lg border-solid border-[1px] p-2">
            <h2 className="text-txt text-2xl font-semibold">{ title }</h2>
            <p className="text-txt text-lg font-light">{ mode === "edit" ? "Cards In Deck": "Cards To See" }: { cardsInDeck.toString() }</p>
        </button>
    )
}
