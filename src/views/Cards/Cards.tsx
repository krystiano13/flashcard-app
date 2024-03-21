import React, { useContext, useState } from "react";
import { DeckContext, DeckSaveContext } from "../../contexts/DeckContext";
import { Card } from "../../components/Cards/Card";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


export const Cards = () => {
    const deckContext = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    const [params, setParams] = useSearchParams();
    const [deck, setDeck] = useState<number>(Number(params.get("deck")));

    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col gap-4">
            { deck !== undefined &&
              <>
                  {
                      deckContext[deck as number].cards.map(item => (
                          <Card key={item.id} title={item.oneSide} />
                      ))
                  }
              </>
            }
            <NavLink
                to={`/addcard?deck=${deck}`}
                className="w-full text-center appear2 glassomorph1 text-white font-semibold text-lg rounded-lg border-solid border-[1px] p-2">
                +
            </NavLink>
        </section>
    )
}