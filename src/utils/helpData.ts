//@ts-ignore
import homeIcon from "../../public/icons/home-icon.svg";
//@ts-ignore
import addIcon from "../../public/icons/plus-icon.svg";
//@ts-ignore
import settingsIcon from "../../public/icons/settings-icon.svg";
//@ts-ignore
import bookIcon from '../../public/icons/book-icon.svg';

export const helpData = [
    {
        title: ["Help", "Pomoc"],
        description: [
            "Welcome to the help section. In next pages we'll show you everything about all sections of the app", 
            "Witamy w sekcji pomocy. Na następnych stronach dowiesz się o wszystkich elementach aplikacji."
        ],
        icon: false
    },
    {
        title: ["Home Section", "Sekcja Domowa"],
        description: [
            "In the home section, you can browse your decks, edit them, and delete them. You can also start custom learning.",
            "W sekcji domowej możesz przeglądać twoje talię, edytować je, oraz usuwać. Możesz także rozpocząć naukę niestandardową"
        ],
        icon: homeIcon
    },
    {
        title: ["Learn Section", "Sekcja Nauki"],
        description: [
            "",
            ""
        ],
        icon: bookIcon
    },
    {
        title: ["Creation Section", "Sekcja Tworzenia"],
        description: [
            "In the learning section, you can browse cards that require a reminder.",
            "W sekcji nauki możesz przeglądać karty, które wymagają przypomnienia"
        ],
        icon: addIcon
    },
    {
        title: ["Settings Section", "Sekcja Ustawień"],
        description: [
            "In the settings section, you can clear the application data, launch the help window again, and change the language",
            "W sekcji ustawień możesz wyczyścić dane aplikacji, odpalić okno pomocy jeszcze raz oraz zmienić język"
        ],
        icon: settingsIcon
    },
]