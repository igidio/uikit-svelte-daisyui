<script lang="ts">
  import { divider_colors, divider_positions, type UiDividerOrientation, type UiDividerPosition, type UiDividerColors } from './ui-divider-properties';

  let {
    orientation = 'horizontal',
    text = null,
    responsive = null,
    color = null,
    position = 'center',
  }: {
    orientation?: UiDividerOrientation;
    text?: string | null;
    responsive?: number | null;
    color?: UiDividerColors | null;
    position?: UiDividerPosition;
  } = $props();

  let is_wide_enough = $state(false);
  let media_query_list: MediaQueryList | null = null;

  $effect(() => {
    const bp = responsive;
    if (media_query_list) {
      media_query_list.removeEventListener('change', handler);
      media_query_list = null;
    }
    if (bp && orientation === 'vertical') {
      media_query_list = window.matchMedia(`(min-width: ${bp}px)`);
      is_wide_enough = media_query_list.matches;
      media_query_list.addEventListener('change', handler);
    } else {
      is_wide_enough = false;
    }

    return () => {
      if (media_query_list) {
        media_query_list.removeEventListener('change', handler);
        media_query_list = null;
      }
    };
  });

  function handler(e: MediaQueryListEvent) {
    is_wide_enough = e.matches;
  }

  let divider_classes = $derived(
    (() => {
      const c: string[] = ['divider'];
      if (orientation === 'vertical' && !is_wide_enough) {
        c.push('divider-horizontal', 'min-h-full');
      }
      if (color) {
        c.push(divider_colors[color]);
      }
      c.push(divider_positions[position]);
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

<div class={divider_classes}>
  {#if text}{text}{/if}
</div>
