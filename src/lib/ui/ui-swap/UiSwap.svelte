<script lang="ts">
  import { setContext } from 'svelte';
  import type { UiSwapEffect } from './ui-swap-properties';

  let {
    value = $bindable(''),
    rotate = false,
    flip = false,
    children,
  }: {
    value?: string;
    rotate?: boolean;
    flip?: boolean;
    children?: import('svelte').Snippet;
  } = $props();

  let items = $state<{ value: string }[]>([]);

  function register_item(item_value: string): number {
    const idx = items.length;
    items = [...items, { value: item_value }];
    return idx;
  }

  setContext('swap', {
    register_item,
  });

  let off_value = $derived(items[0]?.value ?? '');
  let on_value = $derived(items[1]?.value ?? '');

  let checked = $derived(value === on_value);

  function toggle(): void {
    if (items.length < 2) return;
    value = checked ? off_value : on_value;
  }

  let swap_classes = $derived(
    ['swap', rotate ? 'swap-rotate' : '', flip ? 'swap-flip' : '']
      .filter(Boolean)
      .join(' ')
  );
</script>

<label class={swap_classes}>
  <input type="checkbox" {checked} onchange={toggle} />
  {@render children?.()}
</label>
