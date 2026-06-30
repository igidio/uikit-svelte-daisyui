<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import type { UiStepsItem, UiStepsDirection } from './ui-steps-properties';

  let {
    data,
    direction = 'horizontal',
  }: {
    data: UiStepsItem[];
    direction?: UiStepsDirection;
  } = $props();

  let steps_classes = $derived(
    ['steps', direction === 'vertical' ? 'steps-vertical' : ''].join(' ')
  );

  function step_color_class(color: string | undefined): string {
    return color ? `step-${color}` : '';
  }
</script>

<ul class={steps_classes}>
  {#each data as item}
    <li class="step {step_color_class(item.color)}">
      {#if item.icon}
        <span class="step-icon">
          <UiIcon icon={item.icon} />
        </span>
      {/if}
      {item.label}
    </li>
  {/each}
</ul>
