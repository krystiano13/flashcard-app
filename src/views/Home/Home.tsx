// react imports
import { useState } from "react";

// components
import { Nav } from '../../components/Nav.js';
import { DeckCard } from "../../components/Home/DeckCard.js";

// assets
// @ts-ignore
import searchIcon from '../../../public/icons/search-icon.svg';

export function Home() {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    return (
        <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
            <section id="search" className="w-full h-[10vh] bg flex items-center justify-end p-5">
                <button
                    onClick={() => setSearchOpen(prev => !prev)}
                    className={`${searchOpen && 'chosen'} nav-button w-10 p-1.5 rounded-xl`}
                >
                    <img src={searchIcon} alt="search icon" />
                </button>
            </section>
            <section id="content" className="h-[80vh] p-3 flex flex-col gap-4">
                <DeckCard title="Default Deck" cardsInDeck={0} />
            </section>
            <Nav />
        </main>
    )
}