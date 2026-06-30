<script lang="ts">
  import { ui_aura_sizes, ui_aura_types, type UiAuraSize, type UiAuraType } from './ui-aura-properties';

  let {
    type = null,
    size = 'md',
    class: className = '',
    children,
    ...rest
  }: {
    type?: UiAuraType | null;
    size?: UiAuraSize;
    class?: string;
    children?: import('svelte').Snippet;
  } & Record<string, unknown> = $props();

  let aura_classes = $derived(
    (() => {
      const classes: string[] = ['aura'];
      classes.push(ui_aura_sizes[size]);
      if (type) {
        classes.push(ui_aura_types[type]);
      }
      return classes.filter(Boolean).join(' ');
    })(),
  );
</script>

<div class="{aura_classes} {className}" {...rest}>
  {@render children?.()}
</div>
