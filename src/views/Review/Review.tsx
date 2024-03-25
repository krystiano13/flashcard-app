import React, { useState, useEffect } from "react";
import './Review.css';

export function Review() {
    const [ flip, setFlip ] = useState<boolean>(false);
    const [ reviewBtn, setReviewBtn ] = useState<boolean>(false);
    const [ reviewButtons, setReviewButtons ] = useState<boolean>(false);

    useEffect(() => {
        if(flip) {
            setTimeout(() => setReviewBtn(true), 1000);
        }
    }, [flip]);

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <div onClick={() => setFlip(true)} id="card" className="w-[80%] h-auto min-h-[70vh] relative">
                <section id="oneside" className={`${flip ? "flip3" : "flip1"} w-full p-5 absolute h-full gradient2 rounded-lg overflow-y-scroll`}>
                    <p className="text-white text-center text-lg">
                        Lorem Ipsum ?
                    </p>
                </section>
                <section id="secondside" className={`${flip ? "flip4" : "flip2"} w-full p-5 absolute gradient2 h-full rounded-lg`}>
                    <p className="text-white text-center text-lg">
                        Dolor ...
                    </p>
                </section>
            </div> 
            <div id="review" className={`fixed w-[100vw] flex flex-col items-center justify-end h-[85vh] pointer-events-none`}>
                <button className={`transition bg-primary-dark w-4/5 text-white p-2 ${!reviewBtn && 'translate-y-[100vh]'}`}>Review</button>
            </div>
        </section>
    )
}