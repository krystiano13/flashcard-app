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
    return JSON.parse(data.value as string) as deck[];
}