<script lang="ts">
  import Loading from "../Loading.svelte";
  import type { Component } from "svelte";

  const {
    component,
    componentName,
    loadingText,
    ...props
  }: {
    component?: Promise<{ default: Component<any> }>;
    componentName?: string;
    loadingText?: string;
  } & Record<string, any> = $props();
</script>

{#if component}
  {#await component}
    <Loading text={loadingText} />
  {:then Module}
    {#if typeof props.children === "function"}
      {@const { children, ...rest } = props}
      <Module.default {...rest}>
        {@render children()}
      </Module.default>
    {:else}
      <Module.default {...props} />
    {/if}
  {:catch error}
    <small style:color="red">{error.message}</small>
  {/await}
{:else}
  <code style:color="red">{componentName || "Component"} not found</code>
{/if}
