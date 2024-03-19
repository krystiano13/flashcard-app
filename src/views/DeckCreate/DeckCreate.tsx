import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";
import { setData } from "../../utils/storage";
import { Spinner } from "../../components/Spinner/Spinner";
import { Modal } from "../../components/DeckCreate/Modal";
import { Form } from "../../components/DeckCreate/Form";

export function DeckCreate() {
    const deckSave = useContext(DeckSaveContext);
    const deckContext = useContext(DeckContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        setLoading(true);

        (
            async() => new Promise(resolve => {
                deckSave([
                    ...deckContext,
                    {
                        id: (deckContext.length > 0 ? deckContext.length - 1 : 0),
                        title: data.get('deck') as string,
                        cardsInDeck: 0,
                        cards: []
                    }
                ]);
                resolve('resolved');
            })
        )().then(() => {
            setData(deckContext);
        }).then(() => {
            setLoading(false);
            setModal(true);
        })
    }

    function goToHome() {
        navigate('/');
    }

    function addCards() {
        // redirect to view that allows to add cards
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            {
                !modal &&
                <>
                    {
                        loading && <Spinner />
                    }
                    {
                        !loading && <Form handleSubmit={handleSubmit} />
                    }
                </>
            }
            {
                modal && <Modal yes={addCards} no={goToHome} />
            }
        </section>
    )
}