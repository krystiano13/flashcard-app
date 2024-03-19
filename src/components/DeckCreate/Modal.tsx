import React from "react";

interface Props {
    yes: () => void,
    no: () => void
}

export const Modal:React.FC<Props> = ({ yes, no }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 appear2">
            <h2 className="text-white text-xl md:text-2xl text-center">
                Would you like to add cards to this deck now ?
            </h2>
            <button onClick={yes} className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">Yes
            </button>
            <button onClick={no} className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl">No
            </button>
        </div>
    )
}