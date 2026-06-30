<script lang="ts">
  import { getContext } from 'svelte';

  let {
    value: item_value,
    children,
  }: {
    value: string;
    children?: import('svelte').Snippet;
  } = $props();

  const ctx = getContext('swap') as {
    register_item: (v: string) => number;
  };

  let _index = $state(
    (() => ctx.register_item(item_value))()
  );
</script>

<div class={_index === 0 ? 'swap-off' : 'swap-on'}>
  {@render children?.()}
</div>
