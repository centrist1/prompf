<script lang="ts">
    import mp3 from "./audio/prompf.mp3";
    import ogg from "./audio/prompf.ogg";

    let audioEl: HTMLAudioElement | null = $state(null);

    let errMsg: string | null = $state(null);

    async function play() {
        if (!audioEl) return;
        try {
            audioEl.currentTime = 0;
            await audioEl.play();
        } catch (err) {
            console.warn("Audio playback failed:", err);
            errMsg = err instanceof Error ? err.message : String(err);
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            play();
        }
    }
</script>

<span
    id="prompf-ipa"
    role="button"
    tabindex="0"
    aria-label="Play pronunciation of prompf"
    title="Click to hear pronunciation"
    onclick={play}
    onkeydown={handleKeydown}>/prɒm(p)f/</span
>
{#if errMsg}
    <pre style="color:#d32f2f;display:inline-block;">{errMsg}</pre>
{/if}

<audio id="prompf-audio" preload="auto" bind:this={audioEl}>
    <source src={mp3} type="audio/mpeg" />
    <source src={ogg} type="audio/ogg" />
</audio>

<style>
    #prompf-ipa {
        user-select: none;
        cursor: pointer;
        color: #0b5fff;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
