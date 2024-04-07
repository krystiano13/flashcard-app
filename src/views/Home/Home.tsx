// react imports
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { DeckContext } from "../../contexts/DeckContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { setHelpData, getHelpData } from "../../utils/storage";
import { initialize, loadAd } from "../../utils/admob";

// components
import { DeckCard } from "../../components/Home/DeckCard.js";
import { SearchBar } from "../../components/Home/SearchBar";
import { Help } from "../../components/Home/Help";

interface Props {
    setDeck: (value:number) => void
}

export const Home:React.FC<Props> = ({ setDeck }) => {
    const decks = useContext(DeckContext);
    const search = useContext(SearchContext);
    const lang = useContext(LanguageContext);

    const navigate = useNavigate();

    const [params,setParams] = useSearchParams();
    const [help,setHelp] = useState<boolean>(false);

    useEffect(() => {

        initialize().then(() => loadAd())

        if(params.get("help") === "1") {
            setHelp(true);
            setHelpData();
        }
        else {
            getHelpData().then(value => {
                if(value === 0) {
                    setHelp(true);
                   setHelpData();
                }
                if(value === 1) {
                   setHelp(false);
                }
           })
        }
    }, []);

    return (
        <>
            <SearchBar />
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4 appear1">
                {
                    (decks.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))).map(item => (
                        <DeckCard
                            onClick={() => {
                                setDeck(item.id);
                                navigate(`/cards?deck=${item.id}`);
                            }}
                            key={item.id}
                            title={item.title}
                            cardsInDeck={item.cardsInDeck}
                            mode="edit"
                        />
                    ))
                }
            </section>
            {
                help && <Help close={() => setHelp(false)} />
            }
        </>
    )
}