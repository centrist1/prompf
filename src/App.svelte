<script>
    import Scroll from "./scroll/Scroll.svelte";
    import Timeline from "./timeline/Timeline.svelte";
</script>

<Timeline
    timestamps={new Map([
        [
            "2026-09-23T14:04:20Z",
            [import("./timeline/Menu.svelte"),import("./prompt/version/Prompt.svx"),],
        ],
        [
            "2026-09-23T13:28:26Z",
            [import("./timeline/Menu.svelte"),import("./prompt/version/Prompt2.svx"),],
        ],
        [
            "2026-09-22T19:33:44.561Z",
            [import("./timeline/Menu.svelte"),import("./prompt/version/Prompt1.svx"),],
        ],
    ])}
/>

<Scroll />
