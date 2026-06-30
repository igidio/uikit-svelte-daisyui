<script lang="ts">
  import { setContext } from 'svelte';

  let {
    children,
  }: {
    children?: import('svelte').Snippet;
  } = $props();

  let next_index = $state(0);

  function register_item(): number {
    const idx = next_index;
    next_index += 1;
    return idx;
  }

  setContext('textrotate', {
    register_item,
  });
</script>

<span class="text-rotate">
  <span>
    {@render children?.()}
  </span>
</span>
