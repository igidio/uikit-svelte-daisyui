<script lang="ts">
  import { setContext } from 'svelte';
  import { carousel_snaps, type UiCarouselSnap } from './ui-carousel-properties';

  let {
    snap = 'start',
    vertical = false,
    indicator = false,
    prevnext = false,
    children,
  }: {
    snap?: UiCarouselSnap;
    vertical?: boolean;
    indicator?: boolean;
    prevnext?: boolean;
    children?: import('svelte').Snippet;
  } = $props();

  let item_count = $state(0);
  let next_index = $state(0);

  function register_item(): number {
    const idx = next_index;
    next_index += 1;
    item_count = next_index;
    return idx;
  }

  setContext('carousel', {
    get snap() { return snap; },
    get vertical() { return vertical; },
    get prevnext() { return prevnext; },
    get item_count() { return item_count; },
    register_item,
  });

  let carousel_classes = $derived(
    ['carousel', carousel_snaps[snap], vertical ? 'carousel-vertical' : '', (indicator || prevnext) ? 'w-full' : '']
      .filter(Boolean).join(' ')
  );
</script>

<div class={carousel_classes}>
  {@render children?.()}
</div>
{#if indicator}
  <div class="flex justify-center w-full py-2 gap-2">
    {#each Array(item_count) as _, i}
      <a href="#carousel-slide-{i}" class="btn btn-xs">{i + 1}</a>
    {/each}
  </div>
{/if}
