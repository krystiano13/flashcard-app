import React, { useState } from "react";

export function Learn() {
    const [decks, setDecks] = useState([]);
    return (
        <section className="w-[100vw] h-[90vh] flex flex-col items-center">
            {
                decks.length < 1 &&
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-txt text-center text-xl max-w-[80%] appear1">
                        You have no cards to check for now
                    </p>
                </div>
            }
        </section>
    )
}