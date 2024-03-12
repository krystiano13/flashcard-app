// react-imports
import { useState } from "react";

// components
import { Nav } from '../../components/Nav.jsx';

// assets
import searchIcon from '../../../public/icons/search-icon.svg';

export function Home() {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
            <section id="search" className="w-full bg flex items-center justify-end p-5">
                <button
                    onClick={() => setSearchOpen(prev => !prev)}
                    className={`${searchOpen && 'chosen'} nav-button w-10 p-1.5 rounded-xl`}
                >
                    <img src={searchIcon} alt="search icon" />
                </button>
            </section>
            <section id="content">

            </section>
            <Nav />
        </main>
    )
}