import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Form } from '../../components/DeckCreate/Form';
import { Spinner } from "../../components/Spinner/Spinner";
import { DeckContext, DeckSaveContext, CalculateContext } from "../../contexts/DeckContext";
import { setData } from '../../utils/storage';

export const AddCard = () => {
    const decks = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    const calculate = useContext(CalculateContext);
    const navigate = useNavigate();

    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState<boolean>(false);

    async function saveCard(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const deck = Number(params.get('deck'));

        setLoading(true);

        (async () => new Promise(resolve => {
            let elements = [...decks];
            elements[deck as number].cards.push({
                id:elements[deck as number].cardsInDeck,
                oneSide: data.get('card_one') as string,
                secondSide: data.get('card_two') as string,
                whenToSee: new Date(new Date().getTime() - 1000).getTime()
            });
            elements[deck as number].cardsInDeck++;
            deckSave(elements);
            setData(elements).then(() => calculate());
            resolve('resolved');
        }))().then(() => {
            setLoading(false);
            navigate(`/cards?deck=${deck}`);
        })
    }

    async function editCard(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const deck = Number(params.get('deck'));
        const cardId = Number(params.get('card'));

        setLoading(true);

        (async () => new Promise(resolve => {
            let decksArray = [...decks];
            decksArray[deck].cards[cardId].oneSide = data.get('card_one') as string;
            decksArray[deck].cards[cardId].secondSide = data.get('card_two') as string;
            decksArray[deck].cards[cardId].whenToSee = new Date(new Date().getTime() - 1000).getTime();

            deckSave(decksArray);
            resolve('resolved');
        }))().then(() => {
            setLoading(false);
            navigate(`/cards?deck=${deck}`);
        })

    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            {
                loading ?
                    <Spinner />
                    :
                    <Form
                        handleSubmit={params.get('edit') ? editCard : saveCard}
                        mode="card"
                        cardMode={params.get('edit') ? 'edit' : 'add'}
                        oneSide={params.get('card_one') ? params.get('card_one') : null}
                        secondSide={params.get('card_two') ? params.get('card_two') : null}
                    />
            }
        </section>
    )
}