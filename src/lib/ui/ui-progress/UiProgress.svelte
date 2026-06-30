<script lang="ts">
  import type { UiColors } from '$lib/ui/ui-types';
  import { progress_colors } from './ui-progress-properties';

  let {
    value = null,
    indeterminate = false,
    color = null,
    class: className = '',
    ...rest
  }: {
    value?: number | null;
    indeterminate?: boolean;
    color?: UiColors | null;
    class?: string;
  } & Record<string, unknown> = $props();

  let progress_classes = $derived(
    (() => {
      const c: string[] = ['progress'];
      if (color) {
        c.push(progress_colors[color]);
      }
      if (className) c.push(className);
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

{#if indeterminate}
  <progress class={progress_classes} {...rest}></progress>
{:else}
  <progress class={progress_classes} value={value ?? undefined} max="100" {...rest}></progress>
{/if}
