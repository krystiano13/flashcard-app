import React from "react";

export type debounceFunc = (...args:any) => any|void;

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
    whenToSee: number
}

export type search = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
