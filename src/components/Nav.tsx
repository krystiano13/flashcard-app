// react imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//assets
//@ts-ignore
import homeIcon from "../../public/icons/home-icon.svg";
//@ts-ignore
import addIcon from "../../public/icons/plus-icon.svg";
//@ts-ignore
import settingsIcon from "../../public/icons/settings-icon.svg";
//@ts-ignore
import bookIcon from '../../public/icons/book-icon.svg';

export function Nav() {
    const [iconId, setIconId] = useState<number>(0);
    return (
        <nav
            className="w-full flex h-[10vh] items-center justify-evenly p-5 glassomorph1 rounded-tl-2xl rounded-tr-2xl border-t-[1px] border-solid">
            <NavLink
                to="/"
                className={`nav-button w-14 p-1.5 rounded-xl`}
            >
                <img src={homeIcon} alt="home icon"/>
            </NavLink>
            <NavLink
                to="/learn"
                className={`nav-button w-14 p-1.5 rounded-xl`}
            >
                <img src={bookIcon} alt="book icon"/>
            </NavLink>
            <NavLink
                to="/create"
                className={`nav-button w-14 p-1.5 rounded-xl`}
            >
                <img src={addIcon} alt="plus icon"/>
            </NavLink>
            <button
                className={`nav-button w-14 p-1.5 rounded-xl`}
            >
                <img src={settingsIcon} alt="settings icon"/>
            </button>
        </nav>
    )
}