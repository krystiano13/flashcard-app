// react imports
import { useState } from "react";

//assets
import homeIcon from "../../public/icons/home-icon.svg";
import addIcon from "../../public/icons/plus-icon.svg";
import settingsIcon from "../../public/icons/settings-icon.svg";

export function Nav() {
    const [iconId, setIconId] = useState(0);
    return (
        <nav className="w-full flex h-[10vh] items-center justify-evenly p-5 glassomorph1 rounded-tl-2xl rounded-tr-2xl border-t-[1px] border-solid">
            <button
                onClick={() => setIconId(0)}
                className={`${iconId === 0 && 'chosen'} nav-button w-14 p-1.5 rounded-xl`}
            >
                <img src={homeIcon} alt="home icon"/>
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
    )
}