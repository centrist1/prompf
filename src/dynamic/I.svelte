<script lang="ts">
  import { i, type ImportPath } from ".";
  import Import from "./Import.svelte";

  const {
    p,
    loadingText,
    ...props
  }: {
    p: ImportPath;
    loadingText?: string;
  } & Record<string, any> = $props();
</script>

<Import component={i.get(p)} componentName={p} {...props} />
