import PropTypes from "prop-types";
export function DeckCard({ title, cardsInDeck }) {
    return (
        <button className="w-full glassomorph1 flex flex-col gap-2 rounded-lg border-solid border-[1px] p-2">
            <h2 className="text-txt text-2xl font-semibold">{ title }</h2>
            <p className="text-txt text-lg font-light">Cards In Deck: { cardsInDeck }</p>
        </button>
    )
}

DeckCard.propTypes = {
    title: PropTypes.string,
    cardsInDeck: PropTypes.number
}