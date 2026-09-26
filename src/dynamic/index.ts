import type { Component } from "svelte";

export type ImportPath =
    | "./svx/Toc.svelte"
    | "./pronunciation/Pronunciation.svelte"
    | "./timeline/Menu.svelte"
    ;

export const i: Map<ImportPath, Promise<{ default: Component<any> }>> = new Map();

i.set("./svx/Toc.svelte", import("../svx/Toc.svelte"));
i.set("./pronunciation/Pronunciation.svelte", import("../pronunciation/Pronunciation.svelte"));
i.set("./timeline/Menu.svelte", import("../timeline/Menu.svelte"));
