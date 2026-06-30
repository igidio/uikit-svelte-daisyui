<script lang="ts">
  import { collapse_icons, type UiCollapseIcons } from './ui-collapse-properties';

  let {
    title,
    click_type = 'again',
    unwrap = false,
    icons = 'arrow',
    icon_position = 'end',
    children,
    ...rest
  }: {
    title: string;
    click_type?: 'again' | 'outside';
    unwrap?: boolean;
    icons?: UiCollapseIcons;
    icon_position?: 'start' | 'end';
    children?: import('svelte').Snippet;
  } & Record<string, unknown> = $props();

  const input_id = `ui-collapse-${Math.random().toString(36).substring(2, 11)}`;

  let collapse_classes = $derived(
    (() => {
      const c: string[] = ['collapse'];
      if (!unwrap) {
        c.push('bg-base-100', 'border', 'border-base-300');
      }
      c.push(collapse_icons[icons]);
      return c.join(' ');
    })(),
  );

  let title_classes = $derived(
    (() => {
      const c: string[] = ['collapse-title', 'font-semibold'];
      if (icon_position === 'start') {
        c.push('after:start-5', 'after:end-auto', 'pe-4', 'ps-12');
      }
      return c.join(' ');
    })(),
  );
</script>

<div class={collapse_classes} {...rest}>
  {#if click_type === 'outside'}
    <input id={input_id} type="checkbox" class="peer" autocomplete="off" />
    <label for={input_id} class="fixed inset-0 hidden peer-checked:block"></label>
  {:else}
    <input type="checkbox" autocomplete="off" />
  {/if}
  <div class={title_classes}>{title}</div>
  <div
    class="collapse-content text-sm"
    class:relative={click_type === 'outside'}
    class:z-1={click_type === 'outside'}
  >
    {@render children?.()}
  </div>
</div>
