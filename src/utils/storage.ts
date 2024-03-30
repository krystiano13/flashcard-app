import { Preferences } from "@capacitor/preferences";
import type { deck } from "../types/types";

export async function setData(data:deck[]):Promise<void> {
    await Preferences.set({
        key: 'storage',
        value: JSON.stringify(data)
    });
}

export async function getData():Promise<deck[]> {
    if(!Preferences.get({ key: 'storage' })) {
        return [] as deck[];
    }
    
    const data = await Preferences.get({ key: 'storage' });
    return JSON.parse(data.value as string) as deck[];
}

export async function getHelpData():Promise<number> {
    if(!Preferences.get({ key: 'help' })) {
        return 0;
    }

    const data = await Preferences.get({ key: 'help' });
    return Number(JSON.parse(data.value as string));
}

export async function setHelpData():Promise<void> {
    await Preferences.set({
        key: 'help',
        value: JSON.stringify(1)
    });
}