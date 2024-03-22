import React, { useEffect } from "react";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";

export function MoreOptions() {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!params.get('deck')) {
            navigate('/');
        }
    },[]);

    return (
        <section id="content" className="h-[90vh] p-3 flex flex-col justify-center items-center gap-4 md:gap-9">
            <NavLink to="/"
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Rename Deck
            </NavLink>
            <button
                className="w-full md:w-[70%] text-center appear2 glassomorph1 text-white font-semibold text-lg md:text-2xl rounded-lg border-solid border-[1px] p-2"
            >
                Delete Deck
            </button>
        </section>
    )
}