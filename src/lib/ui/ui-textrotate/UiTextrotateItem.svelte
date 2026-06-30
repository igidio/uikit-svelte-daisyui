<script lang="ts">
  import { getContext } from 'svelte';

  let {
    children,
  }: {
    children?: import('svelte').Snippet;
  } = $props();

  const ctx = getContext('textrotate') as {
    register_item: () => number;
  };

  let _index = $state(ctx.register_item());
</script>

{@render children?.()}
