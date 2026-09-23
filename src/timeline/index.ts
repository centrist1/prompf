import { writable } from "svelte/store";

export function toFriendlyDateTime(utcInput: string): string {

    const date = new Date(utcInput);
    if (isNaN(date.getTime())) return utcInput;

    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = String(date.getFullYear()).slice(-2);

    const time = date
        .toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

    return `${month} ${day} '${year} at ${time}`;
}


export const menuItems = writable<string[]>([])

export const selectedMenuItem = writable<string>();
