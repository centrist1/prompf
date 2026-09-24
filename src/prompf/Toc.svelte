<script lang="ts">
  const { list }: { list?: string } = $props();
</script>

{#snippet level(items: Heading[])}
  {#if items.length}
    <ol class="list">
      {#each items as { id, index, text, children = [] }, i (id || i)}
        {@const indent = (index?.length || 1) - 1}
        <li style="--indent:{indent}">
          {#if text && id}
            <a href="/#{id}"
              ><span class="section"></span><span class="index"
                >{index?.join(".")}.</span
              ><span class="label">{text}</span></a
            >
          {/if}
          {@render level(children)}
        </li>
      {/each}
    </ol>
  {/if}
{/snippet}

{#if list}
  {@const toc: Heading[] = JSON.parse(list || "[]")}
  <nav class="toc">
    <h1 class="title">Prompfs</h1>
    {#if toc.length}
      {@render level(toc)}
    {:else}
      <p><small style:color="red">Headings not found</small></p>
    {/if}
  </nav>
{:else}
  <p><small style:color="red">List not found</small></p>
{/if}
