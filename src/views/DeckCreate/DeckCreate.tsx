import React from 'react';
export function DeckCreate() {
    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <form className="w-[90%] p-3 gap-12 rounded-lg flex flex-col justify-center items-center appear2">
                <input
                    className="w-full bg-transparent text-lg md:text-xl pb-2 text-white outline-0 border-b-solid border-b-[1px] border-white"
                    placeholder="Your deck name"
                    name="deck"
                    type="text"
                    required
                    max={64}
                />
                <button
                    className="gradient1 font-semibold w-[90%] text-white p-2 pl-6 pr-6 rounded-xl"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </section>
    )
}