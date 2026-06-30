<script lang="ts">
  import { loading_types, loading_sizes, loading_color_classes, type UiLoadingType, type UiLoadingSize } from './ui-loading-properties';
  import type { UiColors } from '$lib/ui/ui-types';

  let {
    type = 'spinner',
    size = 'md',
    color = null,
  }: {
    type?: UiLoadingType;
    size?: UiLoadingSize;
    color?: UiColors | null;
  } = $props();

  let loading_classes = $derived(
    (() => {
      const c: string[] = ['loading'];
      c.push(loading_types[type]);
      c.push(loading_sizes[size]);
      if (color) {
        c.push(loading_color_classes[color]);
      }
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

<span class={loading_classes} aria-label="Loading"></span>
