import type { debounceFunc } from "../types/types";

export function debounce(callBack: debounceFunc, delay:number) {
    let timeout: string | number | NodeJS.Timeout | undefined;
    // @ts-ignore
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            callBack(...(args as []));
        }, delay)
    }
}