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
        <section id="content" className="h-[90vh] p-3 flex flex-col gap-4">
            <NavLink to="/">
                Rename Deck
            </NavLink>
            <button>
                Delete Deck
            </button>
        </section>
    )
}