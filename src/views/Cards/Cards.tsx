import React, {useContext} from "react";
import { DeckContext, DeckSaveContext } from "../../contexts/DeckContext";
import { Card } from "../../components/Cards/Card";

interface Props {
    deck: number|undefined
}

export const Cards:React.FC<Props> = ({ deck }) => {
    const deckContext = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col gap-4">
            {
                deck && deckContext[deck].cards.map(item => (
                    <Card key={item.id} title={item.oneSide} />
                ))
            }
            <button
                className="w-full appear2 glassomorph1 text-white font-semibold text-lg rounded-lg border-solid border-[1px] p-2">
                +
            </button>
        </section>
    )
}