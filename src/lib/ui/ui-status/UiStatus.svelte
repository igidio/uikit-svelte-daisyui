<script lang="ts">
  import type { UiColors } from '$lib/ui/ui-types';
  import { status_sizes, status_colors, type UiStatusSizes } from './ui-status-properties';

  let {
    size = 'md',
    color = 'neutral',
  }: {
    size?: UiStatusSizes;
    color?: UiColors;
  } = $props();

  let status_classes = $derived(
    ['status', status_sizes[size], status_colors[color]].filter(Boolean).join(' ')
  );
</script>

<span class={status_classes}></span>
