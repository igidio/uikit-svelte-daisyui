<script lang="ts">
  import { dropdown_positions, type UiDropdownPosition, type UiDropdownAlign } from './ui-dropdown-properties';

  let {
    id,
    position = 'bottom',
    align = 'center',
    trigger,
    children,
    ...rest
  }: {
    id: string;
    position?: UiDropdownPosition;
    align?: UiDropdownAlign;
    trigger?: import('svelte').Snippet;
    children?: import('svelte').Snippet;
  } & Record<string, unknown> = $props();

  let content_classes = $derived(
    (() => {
      const c: string[] = ['dropdown', 'menu', 'p-2', 'shadow-sm', 'bg-base-100', 'rounded-box'];
      c.push(dropdown_positions[position]);
      if (align !== 'center') {
        c.push(`dropdown-${align}`);
      }
      return c.join(' ');
    })(),
  );
</script>

<div class="inline-block" {...rest}>
  <button
    type="button"
    tabindex="0"
    style="anchor-name: --anchor-{id}"
    popovertarget="popover-{id}"
  >
    {@render trigger?.()}
  </button>
  <ul
    id="popover-{id}"
    popover="auto"
    style="position-anchor: --anchor-{id}"
    class={content_classes}
  >
    {@render children?.()}
  </ul>
</div>
