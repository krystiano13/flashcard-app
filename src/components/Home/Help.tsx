import React, { useState, useContext } from "react";
import { helpData } from "../../utils/helpData";
import { lang } from "../../utils/lang";
import { LanguageContext } from "../../contexts/LanguageContext";

export function Help() {
    const [page, setPage] = useState<number>(0);
    const lan = useContext(LanguageContext);

    return (
        <section 
            className="appear1 z-50 fixed w-full h-full flex items-center justify-center gap-6 glassomorph1"
        >
            <div className="w-[70%] min-h-[50%] md:w-[70%] appear2 flex flex-col items-start gap-3 md:gap-5 lg:gap-7 glassomorph1 text-white font-semibold rounded-lg border-solid border-[1px] p-2 md:p-4 lg:p-6">
                <h2 className="text-2xl md:text-4xl lg:text-5xl">{ helpData[page].title[lan == "english" ? 0 : 1] }</h2>
                { page > 0 && <img className="w-1/4" src={helpData[page].icon} alt="icon" /> }
                <p className="font-light text-lg md:text-3xl lg:text-4xl">
                    { helpData[page].description[lan == "english" ? 0 : 1] }
                </p>
                {
                    page < helpData.length - 1 &&
                    <button
                        onClick={() => setPage(prev => prev + 1)}
                        className="gradient1 font-semibold w-[90%] md:rounded-lg
                        text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">
                        { lan == "english" ? "Next" : "Dalej" }
                    </button>
                }
                 {
                    page === helpData.length - 1 &&
                    <button
                        className="gradient1 font-semibold w-[90%] md:rounded-lg
                        text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">
                        { lan == "english" ? "Close" : "Zamknij" }
                    </button>
                }
            </div>
        </section>
    )
}