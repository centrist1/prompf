<script lang="ts">
    import type { Component } from "svelte";
    import { menuItems, selectedMenuItem } from ".";
    import Import from "../dynamic/Import.svelte";

    const {
        timestamps,
    }: {
        timestamps: Map<string, Promise<{ default: Component<any> }>[]>;
    } = $props();

    const components = $derived(
        timestamps.get($selectedMenuItem) ??
            timestamps.values().next().value ??
            [],
    );

    $effect(() => {
        $menuItems = Array.from(timestamps.keys());
    });
</script>

{#each components as component}
    <Import {component} />
{/each}
