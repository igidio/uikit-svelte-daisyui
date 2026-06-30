<script lang="ts">
  import { getContext } from 'svelte';

  let {
    children,
  }: {
    children?: import('svelte').Snippet;
  } = $props();

  const ctx = getContext('carousel') as {
    snap: string;
    vertical: boolean;
    prevnext: boolean;
    item_count: number;
    register_item: () => number;
  };

  let item_index = $state(ctx.register_item());

  let prev_index = $derived(item_index === 0 ? ctx.item_count - 1 : item_index - 1);
  let next_index = $derived(item_index === ctx.item_count - 1 ? 0 : item_index + 1);

  let item_class = $derived(ctx.prevnext ? 'carousel-item relative w-full' : 'carousel-item');
</script>

<div id="carousel-slide-{item_index}" class={item_class}>
  {@render children?.()}
  {#if ctx.prevnext}
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#carousel-slide-{prev_index}" class="btn btn-circle">❮</a>
      <a href="#carousel-slide-{next_index}" class="btn btn-circle">❯</a>
    </div>
  {/if}
</div>
