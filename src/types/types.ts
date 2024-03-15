import React from "react";

export type deck = {
    id: number,
    title: string,
    cardsInDeck: number,
    cards: card[]
}

export type card = {
    id: number,
    oneSide: string,
    secondSide: string,
    whenToSee: Date
}

export type search = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}