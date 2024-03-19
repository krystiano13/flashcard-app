import React from "react";

export function Cards() {
    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col gap-4">
            <button
                className="w-full appear2 glassomorph1 flex flex-col gap-2 md:gap-4 rounded-lg border-solid border-[1px] p-2">
                <h2 className="text-txt text-xl md:text-2xl font-medium">Test Card</h2>
                <section id="buttons" className="flex gap-3">
                    <button className="text-white font-semibold p-0.5 pl-4 pr-4 bg-emerald-500">Edit</button>
                    <button className="text-white font-semibold p-0.5 pl-4 pr-4 bg-red-500">Delete</button>
                </section>
            </button>
            <button
                className="w-full appear2 glassomorph1 text-white font-semibold text-lg rounded-lg border-solid border-[1px] p-2">
                +
            </button>
        </section>
    )
}