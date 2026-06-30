<script lang="ts">
  import type { IconValue } from '$lib/data/icons';
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import {
    badge_sizes,
    badge_variants,
    badge_types,
    type UiBadgeSize,
    type UiBadgeColor,
    type UiBadgeType,
  } from './ui-badge-properties';

  let {
    size = 'md',
    variant = 'primary',
    type = null,
    icon = null,
    label = null,
    on_dismiss,
    children,
  }: {
    size?: UiBadgeSize;
    variant?: UiBadgeColor;
    type?: UiBadgeType | null;
    icon?: IconValue | null;
    label?: string | null;
    on_dismiss?: () => void;
    children?: import('svelte').Snippet;
  } = $props();

  let badge_classes = $derived(
    (() => {
      const c: string[] = ['badge'];
      const size_class = badge_sizes[size];
      if (size_class) c.push(size_class);
      c.push(badge_variants[variant]);
      if (type) {
        c.push(badge_types[type]);
      }
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

<span class={badge_classes}>
  {#if children}
    {@render children()}
  {:else}
    <div class="flex items-center gap-2">
      {#if icon}
        <UiIcon {icon} />
      {/if}
      {#if label}
        <span>{label}</span>
      {/if}
      {#if on_dismiss}
        <button
          type="button"
          class="inline-flex items-center p-0.5 -me-1 -my-1 rounded-full hover:opacity-70 transition-opacity"
          onclick={on_dismiss}
          aria-label="Remove"
        >
          <UiIcon icon="close" class="text-xs" />
        </button>
      {/if}
    </div>
  {/if}
</span>
