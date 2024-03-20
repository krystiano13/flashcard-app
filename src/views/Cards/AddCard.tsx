import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { Form } from '../../components/DeckCreate/Form';
import { Spinner } from "../../components/Spinner/Spinner";
import { DeckContext, DeckSaveContext } from "../../contexts/DeckContext";

interface Props {
    deck: number|undefined
}

export const AddCard:React.FC<Props> = ({ deck }) => {
    const decks = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    async function saveCard(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        setLoading(true);

        (async () => new Promise(resolve => {
            let elements = [...decks];
            elements[deck as number].cards.unshift({
                id:elements[deck as number].cardsInDeck,
                oneSide: data.get('card_one') as string,
                secondSide: data.get('card_two') as string,
                whenToSee: new Date(new Date().getTime() - 1000)
            });
            elements[deck as number].cardsInDeck++;
            deckSave(elements);
            resolve('resolved');
        }))().then(() => {
            setLoading(false);
            navigate('/cards');
        })
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            {
                loading ?
                    <Spinner />
                    :
                    <Form handleSubmit={saveCard} mode="card" />
            }
        </section>
    )
}