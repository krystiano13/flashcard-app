import React from "react";

export function Language() {
    return (
        <section className="h-[90vh] p-3 flex flex-col items-center justify-center gap-4">
            <button
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Polski
            </button>
            <button
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                English
            </button>
            <button
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Cancel
            </button>
        </section>
    )
}