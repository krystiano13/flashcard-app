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

    function startReview() {
        setReviewBtn(false);
        setReviewButtons(true);
    }

    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <div onClick={() => setFlip(true)} id="card" className="w-[80%] h-auto min-h-[70vh] relative">
                <section id="oneside" className={`${flip ? "flip3" : "flip1"} w-full p-5 absolute h-full gradient2 rounded-lg overflow-y-auto`}>
                    <p className="text-white text-center text-lg md:text-2xl">
                        Lorem Ipsum ?
                    </p>
                </section>
                <section id="secondside" className={`${flip ? "flip4" : "flip2"} w-full p-5 absolute gradient2 h-full rounded-lg overflow-y-auto`}>
                    <p className="text-white text-center text-lg md:text-2xl">
                        Dolor ...
                    </p>
                </section>
            </div> 
            <button onClick={startReview} className={`fixed transition md:text-xl bg-primary-dark w-4/5 md:w-3/5 text-white p-2 md:p-3 ${reviewBtn && 'translate-y-[40vh]'} ${!reviewBtn && 'translate-y-[100vh]'}`}>
                Review
            </button>
            {
                reviewButtons &&
                <section id="review-buttons"
                    className="appear1 fixed w-full h-full flex flex-col items-center justify-center gap-6 glassomorph1"
                >
                    <h2 className="text-white font-semibold text-lg md:text-2xl">Did you remember the answer ?</h2>
                    <button className={`md:text-2xl text-xl bg-red-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        No
                    </button>
                    <button className={`md:text-2xl text-xl bg-orange-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        Partially
                    </button>
                    <button className={`md:text-2xl text-xl bg-emerald-700 w-4/5 md:w-3/5 text-white p-2 md:p-3`}>
                        Yes
                    </button>
                </section>
            }
        </section>
    )
}