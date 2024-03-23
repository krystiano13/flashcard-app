import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { useSearchParams } from 'react-router-dom';
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";
import { Spinner } from "../../components/Spinner/Spinner";
import { Modal } from "../../components/DeckCreate/Modal";
import { Form } from "../../components/DeckCreate/Form";

interface Props {
    setDeck: (id:number) => void,
}

export const DeckCreate:React.FC<Props> = ({ setDeck }) => {
    const deckSave = useContext(DeckSaveContext);
    const deckContext = useContext(DeckContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [newDeck, setNewDeck] = useState<number>(0);
    const [params, setParams] = useSearchParams();

    const navigate = useNavigate();

    async function editDeck(e: React.FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        if(!params.get('deck')) return;

        setLoading(true);

        (
            async () => new Promise(resolve => {
                const decks = [...deckContext];
                decks[Number(params.get('deck'))].title = data.get('deck') as string;
                deckSave(decks);
                resolve('resolved');
            })
        )().then(() => {
            setLoading(false);
            setModal(true);
        })
    }

    async function addDeck(e: React.FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        setLoading(true);

        (
            async() => new Promise(resolve => {
                deckSave([
                    ...deckContext,
                    {
                        id: deckContext.length,
                        title: data.get('deck') as string,
                        cardsInDeck: 0,
                        cards: []
                    }
                ]);
                resolve('resolved');
            })
        )().then(() => {
            setLoading(false);
            setModal(true);
        })
    }

    function goToHome() {
        navigate('/');
    }

    function addCards() {
        setDeck(deckContext.length - 1);
        navigate('/cards');
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
                        !loading && 
                        <Form 
                            cardMode={params.get('deck') ? "edit" : "add"}
                            mode="deck" 
                            handleSubmit={params.get('deck') ? editDeck : addDeck} 
                        />
                    }
                </>
            }
            {
                modal && <Modal yes={addCards} no={goToHome} />
            }
        </section>
    )
}