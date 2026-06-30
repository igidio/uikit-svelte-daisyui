<script lang="ts">
  import type { UiCountdownLabelPosition } from './ui-countdown-properties';

  let {
    values,
    labels = [],
    colons = false,
    label_position = 'right',
    boxes = false,
    digits = 2,
  }: {
    values: string[];
    labels?: string[];
    colons?: boolean;
    label_position?: UiCountdownLabelPosition;
    boxes?: boolean;
    digits?: number;
  } = $props();

  let item_classes = $derived(
    label_position === 'under'
      ? 'flex flex-col items-center'
      : 'flex items-baseline gap-1',
  );
</script>

{#if boxes}
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    {#each values as value, i}
      <div class="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-5xl">
          <span style="--value: {value}; --digits: {digits}"></span>
        </span>
        {#if labels[i]}
          <span class="text-sm">{labels[i]}</span>
        {/if}
      </div>
    {/each}
  </div>
{:else}
  <div class="flex gap-1">
    {#each values as value, i}
      <div class={item_classes}>
        <span class="countdown font-mono text-2xl">
          <span style="--value: {value}; --digits: {digits}"></span>
        </span>
        {#if labels[i]}
          <span class="text-xs">{labels[i]}</span>
        {/if}
      </div>
      {#if colons && i < values.length - 1}
        <span class="text-2xl">:</span>
      {/if}
    {/each}
  </div>
{/if}
