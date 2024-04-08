import React, { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";
import { initialize, loadAd } from "../../utils/admob";
import { setData, getData } from "../../utils/storage";
import type { deck } from "../../types/types";
import { LanguageContext } from "../../contexts/LanguageContext";
import { lang } from "../../utils/lang";
import './Review.css';

interface Props {
    ad: boolean,
    adFunc: () => void
}

export const Review:React.FC<Props> = ({ ad, adFunc }) => {
    const [ flip, setFlip ] = useState<boolean>(false);
    const [ reviewBtn, setReviewBtn ] = useState<boolean>(false);
    const [ reviewButtons, setReviewButtons ] = useState<boolean>(false);
    const [ deck, setDeck ] = useState<deck>();
    const [ cardID, setCardID ] = useState<number>(0);
    const [ customLearning, setCustomLearning ] = useState<boolean>(false);

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const deckContext = useContext(DeckContext);
    const deckSave = useContext(DeckSaveContext);
    const lan = useContext(LanguageContext);

    useEffect(() => {
        if(!params.get('deck')) {
            navigate('/learn');
        }

        if(params.get('custom')) {
            setCustomLearning(true);
        }

        const data:deck = JSON.parse(params.get('deck') as string);
        setDeck(data);
    }, []);

    useEffect(() => {
        if(flip) {
            setTimeout(() => setReviewBtn(true), 1000);
        }
    }, [flip]);

    function startReview() {
        setReviewBtn(false);
        setReviewButtons(true);
    }

    function nextCard(isCardRemembered:boolean|"partially") {
        if(!deck) return;

        if(!isCardRemembered) {
            const newDeck:deck = deck;
            newDeck.cards.push(deck.cards[cardID]);
            setDeck(newDeck);
        }
        else {
            if(!customLearning) {
                let multiplier = 0;

                if(isCardRemembered === true) {
                    multiplier = 2;
                }
                else {
                    multiplier = 1;
                }

                const card = deck.cards[cardID];
                const deckID = deckContext.findIndex(item => deck.id === item.id);
                const cardToChange = deckContext[deckID].cards.findIndex(item => item.id === deck.cards[cardID].id);
                const newDeck = [...deckContext];
                newDeck[deckID].cards[cardToChange].whenToSee = new Date(new Date().getTime() + 86400000 * multiplier).getTime();
                deckSave(newDeck);
                setData(newDeck);
            }
        }

        if(deck?.cards.length > cardID + 1) {
           setCardID(prev => prev + 1);
           setFlip(false);
           setReviewBtn(false);
           setTimeout(() => {
            setReviewButtons(false);
           }, 500)
        }
        else {
            adFunc();

            if(ad) {
                initialize().then(() => loadAd()).then(() => {
                    if(customLearning) {
                        navigate(`/more?deck=${deck.id}`);
                    }
                    else {
                        navigate('/learn');
                    }
                })
            }
            else {
                if(customLearning) {
                    navigate(`/more?deck=${deck.id}`);
                }
                else {
                    navigate('/learn');
                }
            }
        }
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <div onClick={() => setFlip(true)} id="card" className="w-[80%] h-auto min-h-[70vh] relative">
                <section id="oneside" className={`${flip ? "flip3" : "flip1"} w-full p-5 absolute h-full gradient2 rounded-lg overflow-y-auto`}>
                    <p className="text-white text-center text-lg md:text-2xl">
                        { deck?.cards[cardID].oneSide }
                    </p>
                </section>
                <section id="secondside" className={`${flip ? "flip4" : "flip2"} w-full p-5 absolute gradient2 h-full rounded-lg overflow-y-auto`}>
                    <p className="text-white text-center text-lg md:text-2xl">
                        { deck?.cards[cardID].secondSide }
                    </p>
                </section>
            </div> 
            <button onClick={startReview} className={`fixed transition md:text-xl bg-primary-dark w-4/5 md:w-3/5 text-white p-2 md:p-3 ${reviewBtn && 'translate-y-[40vh]'} ${!reviewBtn && 'translate-y-[100vh]'}`}>
                { lang.learn.review[lan == "english" ? 0 : 1] }
            </button>
            {
                reviewButtons &&
                <section id="review-buttons"
                    className="appear1 fixed w-full h-full flex flex-col items-center justify-center gap-6 glassomorph1"
                >
                    <h2 className="text-white font-semibold text-lg md:text-2xl">
                        { lang.learn.remember[lan == "english" ? 0 : 1] }
                    </h2>
                    <button onClick={() => nextCard(false)} className={`md:text-2xl text-xl bg-red-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        { lang.learn.no[lan == "english" ? 0 : 1] }
                    </button>
                    <button onClick={() => nextCard("partially")} className={`md:text-2xl text-xl bg-orange-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        { lang.learn.partially[lan == "english" ? 0 : 1] }
                    </button>
                    <button onClick={() => nextCard(true)} className={`md:text-2xl text-xl bg-emerald-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        { lang.learn.yes[lan == "english" ? 0 : 1] }
                    </button>
                </section>
            }
        </section>
    )
}