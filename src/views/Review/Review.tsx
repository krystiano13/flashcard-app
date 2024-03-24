import React, { useState } from "react";
import './Review.css';

export function Review() {
    const [ flip, setFlip ] = useState<boolean>(false);

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <div onClick={() => setFlip(true)} id="card" className="w-[80%] h-auto min-h-[70vh] relative">
                <section id="oneside" className={`${flip ? "flip3" : "flip1"} w-full p-1 absolute h-full bg-purple-600 rounded-lg`}>
                    <p className="text-white text-center text-lg h-full">
                        Lorem Ipsum ?
                    </p>
                </section>
                <section id="secondside" className={`${flip ? "flip4" : "flip2"} w-full p-1 absolute h-full bg-purple-600 rounded-lg`}>
                    <p className="text-white text-center text-lg">
                        Dolor ...
                    </p>
                </section>
            </div> 
        </section>
    )
}