import React from "react";

export function Review() {
    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <div id="card" className="w-[80%] h-auto min-h-[70vh] relative">
                <section id="oneside" className="w-full p-1 absolute h-auto bg-purple-600 rounded-lg">
                    <p className="text-white text-center text-lg h-full">
                        Lorem Ipsum ?
                    </p>
                </section>
                <section id="secondside" className="w-full p-1 absolute h-full bg-purple-600 rounded-lg">
                    <p className="text-white text-center text-lg">
                        Dolor ...
                    </p>
                </section>
            </div> 
        </section>
    )
}