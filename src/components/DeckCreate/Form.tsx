import React from "react";

interface Props {
    handleSubmit: (e: React.FormEvent) => Promise<void>,
    mode: 'deck'|'card',
    defaultDeckValue: string|undefined,
    cardMode: 'edit'|'add',
    oneSide?: string|null,
    secondSide?: string|null
}

export const Form:React.FC<Props> = ({ handleSubmit, mode, cardMode, oneSide, secondSide, defaultDeckValue }) => {
    return (
        <form onSubmit={handleSubmit}
              className="w-[90%] md:w-[70%] p-3 gap-12 md:gap-24 rounded-lg flex flex-col justify-center items-center appear2">
            {
                mode === "deck" &&
                <input
                    className="
                    w-full bg-transparent text-lg md:text-3xl pb-2 md:pb-4 text-white outline-0
                    border-b-solid border-b-[1px] border-white "
                    placeholder="Your deck name"
                    defaultValue={defaultDeckValue ? defaultDeckValue : ""}
                    name="deck"
                    type="text"
                    required
                    max={64}
                />
            }
            {
                mode === "card" &&
                <>
                    <textarea
                        className="
                        w-full bg-transparent text-lg md:text-3xl pb-2 md:pb-4 text-white outline-0
                        border-b-solid border-b-[1px] border-white max-h-32 min-h-32 md:max-h-48 md:min-h-48"
                        placeholder="Card's first side"
                        name="card_one"
                        required
                    >{ (oneSide && cardMode === "edit") && oneSide }</textarea>
                    <textarea
                        className="
                        w-full bg-transparent text-lg md:text-3xl pb-2 md:pb-4 text-white outline-0
                        border-b-solid border-b-[1px] border-white min-h-32 max-h-32 md:max-h-48 md:min-h-48"
                        placeholder="Card's second side"
                        name="card_two"
                        required
                    >{ (secondSide && cardMode === "edit") && secondSide }</textarea>
                </>
            }
            <button
                className="gradient1 font-semibold w-[90%] md:rounded-lg
                    text-white md:text-xl p-2 md:p-3 pl-6 md:pl-9 pr-6 md:pr-9 rounded-xl"
                type="submit"
            >
                { cardMode === "edit" ? "Edit" : "Create" }
            </button>
        </form>
    )
}