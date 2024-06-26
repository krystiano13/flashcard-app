import React, { useState, useContext } from "react";
import { DeckSaveContext, DeckContext } from "../../contexts/DeckContext";
import { setData } from "../../utils/storage";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { lang } from "../../utils/lang";

export function Settings() {
    const [modal, setModal] = useState<boolean>(false);
    const decks = useContext(DeckContext);
    const setDecks = useContext(DeckSaveContext);
    const lan = useContext(LanguageContext);

    function erase() {
        return new Promise(resolve => {
            setDecks([]);
            setData([]);
            resolve('resolved');
        })
        .then(() => setModal(false))
    }

    return (
        <>
        <section id="content" className="h-[90vh] p-3 flex flex-col items-center justify-center gap-4">
            <button
                onClick={() => setModal(true)}
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                { lang.settings.erase[lan == "english" ? 0 : 1] }
            </button>
            <NavLink
                to="/?help=1"
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                { lang.settings.help[lan == "english" ? 0 : 1] }
            </NavLink>
            <NavLink
                to="/settings/language"
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                { lang.settings.language[lan == "english" ? 0 : 1] }
            </NavLink>
        </section>
        {
            modal &&
            <section id="review-buttons"
                className="appear1 fixed w-full h-full flex flex-col items-center justify-center gap-6 glassomorph1"
            >
                <h2 className="text-white font-semibold text-lg md:text-2xl">
                    { lang.settings.sure[lan == "english" ? 0 : 1] }
                </h2>
                <button onClick={erase} className={`md:text-2xl text-xl bg-emerald-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                    { lang.settings.yes[lan == "english" ? 0 : 1] }
                </button>
                <button onClick={() => setModal(false)} className={`md:text-2xl text-xl bg-red-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                    { lang.settings.no[lan == "english" ? 0 : 1] }
                </button>
            </section>
        }
    </>
    )
}