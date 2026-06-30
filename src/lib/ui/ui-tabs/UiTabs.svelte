<script lang="ts">
  import { setContext } from 'svelte';
  import { tab_sizes, tab_styles, type UiTabsStyle, type UiTabsSize, type UiTabsContent } from './ui-tabs-properties';

  let {
    name,
    type = 'default',
    size = 'md',
    content = 'bottom',
    children,
  }: {
    name: string;
    type?: UiTabsStyle;
    size?: UiTabsSize;
    content?: UiTabsContent;
    children?: import('svelte').Snippet;
  } = $props();

  let next_index = $state(0);

  function register_item(): number {
    const idx = next_index;
    next_index += 1;
    return idx;
  }

  setContext('tabs', {
    get name() { return name; },
    register_item,
  });

  let tabs_classes = $derived(
    ['tabs', tab_styles[type], tab_sizes[size], content === 'top' ? 'tabs-bottom' : '']
      .filter(Boolean).join(' ')
  );
</script>

<div class={tabs_classes} role="tablist">
  {@render children?.()}
</div>
