<script lang="ts">
  import type { UiColors } from '$lib/ui/ui-types';
  import { tooltip_positions, tooltip_colors, type UiTooltipPositions } from './ui-tooltip-properties';

  let {
    tip,
    color = null,
    position = 'top',
    children,
    content: content_snippet,
  }: {
    tip: string;
    color?: UiColors | null;
    position?: UiTooltipPositions;
    children?: import('svelte').Snippet;
    content?: import('svelte').Snippet;
  } = $props();

  let has_content = $derived(content_snippet !== undefined);

  let tooltip_classes = $derived(
    (() => {
      const c: string[] = ['tooltip'];
      if (position !== 'top') {
        c.push(tooltip_positions[position]);
      }
      if (color) {
        c.push(tooltip_colors[color]);
      }
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

<div class={tooltip_classes} data-tip={has_content ? null : tip}>
  {#if has_content}
    <div class="tooltip-content">
      {@render content_snippet!()}
    </div>
  {/if}
  {@render children?.()}
</div>
