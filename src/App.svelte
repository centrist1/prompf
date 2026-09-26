<script>
    import Import from "./dynamic/Import.svelte";
    import Scroll from "./scroll/Scroll.svelte";
    import Timeline from "./timeline/Timeline.svelte";
</script>

<Import component={import("./timeline/Menu.svelte")} />

<Timeline
    timestamps={new Map([
        ["2026-09-25T19:45:24Z", [import("./prompfs/Prompf.svx")]],
    ])}
/>

<Scroll />
