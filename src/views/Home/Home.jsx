import searchIcon from '../../../public/icons/search-icon.svg';
import homeIcon from '../../../public/icons/home-icon.svg';
import settingsIcon from '../../../public/icons/settings-icon.svg';
import addIcon from '../../../public/icons/plus-icon.svg';
export function Home() {
    return (
        <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between p-2">
            <section id="search">

            </section>
            <section id="content"></section>
            <nav className="w-full flex items-center justify-evenly p-3 glassomorph1">
                <button className="w-14 choosen p-1.5 rounded-xl">
                    <img src={homeIcon} alt="home icon" />
                </button>
                <button className="w-14 p-1.5">
                    <img src={addIcon} alt="plus icon"/>
                </button>
                <button className="w-14 p-1.5">
                    <img src={settingsIcon} alt="settings icon"/>
                </button>
            </nav>
        </main>
    )
}