import type { Component } from "svelte";

export type ImportPath =
    | "./prompf/Toc.svelte"
    | "./prompf/pronunciation/Pronunciation.svelte"
    | "./timeline/Menu.svelte"
    ;

export const i: Map<ImportPath, Promise<{ default: Component<any> }>> = new Map();

i.set("./prompf/Toc.svelte", import("../prompf/Toc.svelte"));
i.set("./prompf/pronunciation/Pronunciation.svelte", import("../prompf/pronunciation/Pronunciation.svelte"));
i.set("./timeline/Menu.svelte", import("../timeline/Menu.svelte"));
