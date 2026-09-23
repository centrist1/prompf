<script lang="ts">
    import { menuItems, selectedMenuItem, toFriendlyDateTime } from ".";
</script>

{#if $menuItems.length > 1}
    <div class="center">
        Timeline: <select
            name="timeline"
            aria-label="Timeline"
            bind:value={$selectedMenuItem}
        >
            {#each $menuItems as item}
                <option value={item}>
                    {toFriendlyDateTime(item)}
                </option>
            {/each}
        </select>
    </div>
    <style>
        .center {
            text-align: center;
            margin: 1em 0;
        }
    </style>
{/if}
