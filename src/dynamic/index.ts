import type { Component } from "svelte";

export type ImportPath =
    | "./Toc.svelte"
    | "./timeline/Menu.svelte"
    ;

export const i: Map<ImportPath, Promise<{ default: Component<any> }>> = new Map();

i.set("./Toc.svelte", import("../prompt/Toc.svelte"));
i.set("./timeline/Menu.svelte", import("../timeline/Menu.svelte"));
