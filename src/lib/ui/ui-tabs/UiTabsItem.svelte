<script lang="ts">
  import { getContext } from 'svelte';

  let {
    label,
    children,
  }: {
    label: string;
    children?: import('svelte').Snippet;
  } = $props();

  const ctx = getContext('tabs') as {
    name: string;
    register_item: () => number;
  };

  let index = $state(
    (() => ctx.register_item())()
  );
</script>

<input type="radio" name={ctx.name} class="tab" aria-label={label} checked={index === 0} />
<div class="tab-content bg-base-100 border-base-300 p-6">
  {@render children?.()}
</div>
