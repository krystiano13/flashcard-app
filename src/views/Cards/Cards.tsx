import React, { useContext, useState } from "react";
import { DeckContext, DeckSaveContext, CalculateContext } from "../../contexts/DeckContext";
import { Card } from "../../components/Cards/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { setData } from "../../utils/storage";


export const Cards = () => {
    const deckContext = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    const calculate = useContext(CalculateContext);
    const [params, setParams] = useSearchParams();
    const [deck, setDeck] = useState<number>(Number(params.get("deck")));
    const navigate = useNavigate();

    async function deleteCard(id:number) {
        const data = deckContext;
        const defaultLength = data[deck].cards.length;

        (async () => new Promise(resolve => {
            const newData = data[deck].cards.filter(item => item.id !== id);

            if(defaultLength !== newData.length) {
                data[deck].cardsInDeck--;
                data[deck].cards = newData;
            }

            deckSave(data);
            setData(data).then(() => calculate());
            resolve('resolved');
        }))().then(() => {
            navigate(`/cards?deck=${deck}`)
        })
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col gap-4">
             <NavLink
                to={`/addcard?deck=${deck}`}
                className="w-full text-center appear2 glassomorph1 text-white font-semibold text-lg rounded-lg border-solid border-[1px] p-2">
                +
            </NavLink>
            <NavLink
                to={`/more?deck=${deck}`}
                className="w-full text-center appear2 glassomorph1 text-white font-semibold text-lg rounded-lg border-solid border-[1px] p-2">
                More Options
            </NavLink>
            { deck !== undefined &&
              <>
                  {
                      deckContext[deck as number].cards.map(item => (
                          <Card
                              deleteFunc={() => deleteCard(item.id)}
                              editFunc={() => navigate(`/addcard?deck=${deck}&card=${item.id}&edit=1&card_one=${item.oneSide}&card_two=${item.secondSide}`)}
                              key={item.id}
                              title={item.oneSide}
                          />
                      ))
                  }
              </>
            }
        </section>
    )
}