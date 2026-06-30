<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import type { UiTimelineItem, UiTimelineDisposition } from './ui-timeline-properties';

  let {
    data,
    disposition = 'horizontal',
  }: {
    data: UiTimelineItem[];
    disposition?: UiTimelineDisposition;
  } = $props();

  let timeline_classes = $derived(
    (() => {
      const c: string[] = ['timeline'];
      if (disposition === 'vertical') {
        c.push('timeline-vertical');
      }
      return c.join(' ');
    })(),
  );

  function icon_color_class(color: string | undefined): string {
    return color ? `text-${color}` : '';
  }

  function hr_color_class(color: string | undefined): string {
    return color ? `bg-${color}` : '';
  }

  function is_not_last(index: number): boolean {
    return index < data.length - 1;
  }
</script>

<ul class={timeline_classes}>
  {#each data as item, i}
    <li>
      {#if i > 0}
        <hr class={hr_color_class(item.color)} />
      {/if}
      {#if item.subtitle}
        <div class="timeline-start timeline-box">{item.subtitle}</div>
      {/if}
      <div class="timeline-middle">
        {#if item.icon}
          <UiIcon icon={item.icon} class={icon_color_class(item.color)} />
        {:else}
          <UiIcon icon="success" class={icon_color_class(item.color)} />
        {/if}
      </div>
      {#if item.text}
        <div class="timeline-end timeline-box">
          {item.text}
          {#if item.description}
            <div class="text-sm opacity-70 mt-1">{item.description}</div>
          {/if}
        </div>
      {/if}
      {#if is_not_last(i)}
        <hr class={hr_color_class(item.color)} />
      {/if}
    </li>
  {/each}
</ul>
