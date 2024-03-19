import React from "react";

interface Props {
    title: string
}

export const Card:React.FC<Props> = ({ title }) => {
    return (
        <button
            className="w-full appear2 glassomorph1 flex flex-col gap-2 md:gap-4 rounded-lg border-solid border-[1px] p-2">
            <h2 className="text-txt text-left text-xl md:text-2xl font-medium">{ title.slice(0,24) + (title.length > 24 ? "..." : "") }</h2>
            <section id="buttons" className="flex gap-3">
                <button className="text-white font-semibold p-0.5 pl-4 pr-4 bg-emerald-500">Edit</button>
                <button className="text-white font-semibold p-0.5 pl-4 pr-4 bg-red-500">Delete</button>
            </section>
        </button>
    )
}