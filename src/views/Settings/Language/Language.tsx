import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { LanguageContext, LanguageSetContext } from "../../../contexts/LanguageContext";
import { lang } from "../../../utils/lang";
import { setLanguage } from "../../../utils/storage";

export function Language() {
    const lan = useContext(LanguageContext);
    const setLang = useContext(LanguageSetContext);

    const navigate = useNavigate();

    async function changeLanguage(lang:"polish"|"english") {
        (async () => new Promise((resolve, reject) => {
            setLang(lang);
            resolve("resolved");
        }))().then(() => {
            setLanguage(lang);
            return;
        }).then(() => navigate("/settings"))
    }

    return (
        <section className="h-[90vh] p-3 flex flex-col items-center justify-center gap-4">
            <button
                onClick={() => changeLanguage("polish")}
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Polski
            </button>
            <button
                onClick={() => changeLanguage("english")}
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                English
            </button>
            <button
                onClick={() => navigate('/settings')}
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                { lang.language.cancel[lan == "english" ? 0 : 1] }
            </button>
        </section>
    )
}