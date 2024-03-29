import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { lang } from "../../utils/lang";

interface Props {
    yes: () => void,
    no: () => void
}

export const Modal:React.FC<Props> = ({ yes, no }) => {
    const lan = useContext(LanguageContext);
    return (
        <div className="flex flex-col items-center justify-center gap-6 appear2">
            <h2 className="text-white text-xl md:text-2xl text-center">
                { lang.deckCreate.addCards[lan == "english" ? 0 : 1] }
            </h2>
            <button onClick={yes} className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">
                        { lang.deckCreate.yes[lan == "english" ? 0 : 1] }
            </button>
            <button onClick={no} className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">
                        { lang.deckCreate.no[lan == "english" ? 0 : 1] }
            </button>
        </div>
    )
}