import { Preferences } from "@capacitor/preferences";
import type { deck } from "../types/types";

export async function setData(data:deck[]):Promise<void> {
    await Preferences.set({
        key: 'storage',
        value: JSON.stringify(data)
    });
}

export async function getData():Promise<deck[]> {
    const data = await Preferences.get({ key: 'storage' });

    if(!data.value) {
        return [] as deck[];
    }

    return JSON.parse(data.value as string) as deck[];
}

export async function getLanguage():Promise<"polish"|"english"> {
    const data = await Preferences.get({ key: 'lang1' });

    if(!data.value) {
        return "english";
    }

    return data.value as "english"|"polish"
}

export async function setLanguage(lang:"english"|"polish") {
    await Preferences.set({
        key: "lang",
        value: lang
    })
}

export async function getHelpData():Promise<number> {
    const data = await Preferences.get({ key: 'help' });

    if (!data) {
        return 0;
    }

    return Number(data.value);
}

export async function setHelpData():Promise<void> {
    await Preferences.set({
        key: 'help',
        value: String(1)
    });
}