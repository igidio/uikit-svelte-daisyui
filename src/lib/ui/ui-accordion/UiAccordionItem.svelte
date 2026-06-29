<script lang="ts">
  import { getContext } from 'svelte';

  let {
    value: item_value,
    title,
    class: className = '',
    children,
  }: {
    value: string;
    title: string;
    class?: string;
    children?: import('svelte').Snippet;
  } = $props();

  const ctx = getContext('accordion') as {
    name: string;
    arrow_icon: boolean;
    join: boolean;
    selected_value: string;
    select: (v: string) => void;
  };

  let collapse_class = $derived(
    [
      'collapse',
      'bg-base-100',
      'border',
      'border-base-300',
      ctx.arrow_icon ? 'collapse-arrow' : '',
      ctx.join ? 'join-item' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class={collapse_class}>
  <input
    type="radio"
    name={ctx.name}
    value={item_value}
    checked={ctx.selected_value === item_value}
    onchange={() => ctx.select(item_value)}
    class="h-full"
  />
  <div class="collapse-title font-semibold">{title}</div>
  <div class="collapse-content text-sm">
    {@render children?.()}
  </div>
</div>
