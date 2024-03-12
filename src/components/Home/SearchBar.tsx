// react imports
import React, { useState } from "react";

// assets
// @ts-ignore
import searchIcon from '../../../public/icons/search-icon.svg';

export function SearchBar() {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    return (
        <section id="search" className="w-full h-[10vh] bg flex items-center justify-between p-5">
            <form>
                <input
                    className={`
                         p-2 outline-0 bg-transparent border-b-[1px] border-primary border-solid text-txt
                         ${searchOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} 
                         transition-all origin-right w-[100%]
                        `}
                    name="deck"
                    type="text"
                    placeholder="deck name..."
                />
            </form>
            <button
                onClick={() => setSearchOpen(prev => !prev)}
                className={`${searchOpen && 'chosen'} nav-button w-10 p-1.5 rounded-xl`}
            >
                <img src={searchIcon} alt="search icon"/>
            </button>
        </section>
    )
}