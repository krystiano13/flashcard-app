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