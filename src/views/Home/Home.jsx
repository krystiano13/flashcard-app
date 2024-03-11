// react-imports
import { useState } from "react";

// assets
import searchIcon from '../../../public/icons/search-icon.svg';
import homeIcon from '../../../public/icons/home-icon.svg';
import settingsIcon from '../../../public/icons/settings-icon.svg';
import addIcon from '../../../public/icons/plus-icon.svg';

export function Home() {
    const [iconId, setIconId] = useState(0);
    return (
        <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
            <section id="search" className="flex justify-end items-center">

            </section>
            <section id="content"></section>
            <nav className="w-full flex items-center justify-evenly p-3 glassomorph1">
                <button onClick={() => setIconId(0)} className={`${iconId === 0 && 'chosen'} w-14 p-1.5 rounded-xl`}>
                    <img src={homeIcon} alt="home icon" />
                </button>
                <button onClick={() => setIconId(1)} className={`${iconId === 1 && 'chosen'} w-14 p-1.5 rounded-xl`}>
                    <img src={addIcon} alt="plus icon"/>
                </button>
                <button onClick={() => setIconId(2)} className={`${iconId === 2 && 'chosen'} w-14 p-1.5 rounded-xl`}>
                    <img src={settingsIcon} alt="settings icon"/>
                </button>
            </nav>
        </main>
    )
}