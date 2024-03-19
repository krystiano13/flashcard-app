import type { FC } from "react";
import React from "react";

interface Props {
    title: string,
    cardsInDeck: number,
    mode: "learn"|"edit",
    onClick: () => void
}

export const DeckCard:FC<Props> = ({ title, cardsInDeck, mode, onClick }) => {
    return (
        <button onClick={onClick} className="w-full appear2 glassomorph1 flex flex-col gap-2 md:gap-4 rounded-lg border-solid border-[1px] p-2">
            <h2 className="text-txt text-2xl md:text-4xl font-semibold">{ title }</h2>
            <p className="text-txt text-lg md:text-2xl font-light">{ mode === "edit" ? "Cards In Deck": "Cards To See" }: { String(cardsInDeck) }</p>
        </button>
    )
}
