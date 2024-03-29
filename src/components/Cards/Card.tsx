import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { lang } from "../../utils/lang";

interface Props {
    title: string,
    deleteFunc: () => void,
    editFunc: () => void
}

export const Card:React.FC<Props> = ({ title, deleteFunc, editFunc }) => {
    const lan = useContext(LanguageContext);
    return (
        <button
            className="w-full appear2 glassomorph1 flex flex-col gap-2 md:gap-4 rounded-lg border-solid border-[1px] p-2">
            <h2 className="text-txt text-left text-xl md:text-2xl font-medium">{ title.slice(0,24) + (title.length > 24 ? "..." : "") }</h2>
            <section id="buttons" className="flex gap-3">
                <button onClick={editFunc} className="text-white font-semibold p-0.5 pl-4 pr-4 bg-emerald-500">{lang.cards.edit[lan == "english" ? 0 : 1]}</button>
                <button onClick={deleteFunc} className="text-white font-semibold p-0.5 pl-4 pr-4 bg-red-500">{lang.cards.delete[lan == "english" ? 0 : 1]}</button>
            </section>
        </button>
    )
}