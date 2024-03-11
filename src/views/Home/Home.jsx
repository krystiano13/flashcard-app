// react-imports
import { useState } from "react";

// assets
import searchIcon from '../../../public/icons/search-icon.svg';
import homeIcon from '../../../public/icons/home-icon.svg';
import settingsIcon from '../../../public/icons/settings-icon.svg';
import addIcon from '../../../public/icons/plus-icon.svg';

export function Home() {
    const [iconId, setIconId] = useState(0);
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
            <section id="content"></section>
            <nav className="w-full flex items-center justify-evenly p-3 glassomorph1">
                <button
                    onClick={() => setIconId(0)}
                    className={`${iconId === 0 && 'chosen'} nav-button w-14 p-1.5 rounded-xl`}
                >
                    <img src={homeIcon} alt="home icon" />
                </button>
                <button
                    onClick={() => setIconId(1)}
                    className={`${iconId === 1 && 'chosen'} nav-button w-14 p-1.5 rounded-xl`}
                >
                    <img src={addIcon} alt="plus icon"/>
                </button>
                <button
                    onClick={() => setIconId(2)}
                    className={`${iconId === 2 && 'chosen'} nav-button w-14 p-1.5 rounded-xl`}
                >
                    <img src={settingsIcon} alt="settings icon"/>
                </button>
            </nav>
        </main>
    )
}