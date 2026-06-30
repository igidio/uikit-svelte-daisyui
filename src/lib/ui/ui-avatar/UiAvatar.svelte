<script lang="ts">
  import {
    avatar_sizes,
    avatar_presence,
    avatar_shapes,
    avatar_placeholder_sizes,
    type UiAvatarSize,
    type UiAvatarPresence,
    type UiAvatarShape,
  } from './ui-avatar-properties';

  let {
    src = null,
    alt = 'avatar',
    size = 'md',
    presence = 'none',
    shape = 'circle',
    ring = false,
    placeholder = null,
    href = null,
  }: {
    src?: string | null;
    alt?: string;
    size?: UiAvatarSize;
    presence?: UiAvatarPresence;
    shape?: UiAvatarShape;
    ring?: boolean;
    placeholder?: string | null;
    href?: string | null;
  } = $props();

  let is_placeholder = $derived(!src && !!placeholder);

  let avatar_classes = $derived(
    (() => {
      const c: string[] = ['avatar'];
      if (presence !== 'none') {
        c.push(avatar_presence[presence]);
      }
      if (is_placeholder) {
        c.push('avatar-placeholder');
      }
      return c.join(' ');
    })(),
  );

  let inner_classes = $derived(
    (() => {
      const c: string[] = [];
      c.push(avatar_sizes[size]);
      c.push(avatar_shapes[shape]);
      if (is_placeholder) {
        c.push('bg-neutral', 'text-neutral-content');
      } else {
        c.push('bg-base-300');
      }
      if (ring) {
        c.push('ring-2', 'ring-primary', 'ring-offset-base-100', 'ring-offset-2');
      }
      return c.join(' ');
    })(),
  );

  let placeholder_size_class = $derived(avatar_placeholder_sizes[size]);
</script>

{#if href}
  <a class={avatar_classes} {href}>
    <div class={inner_classes}>
      {#if src}
        <img {src} {alt} />
      {:else}
        <span class={placeholder_size_class}>{placeholder}</span>
      {/if}
    </div>
  </a>
{:else}
  <div class={avatar_classes}>
    <div class={inner_classes}>
      {#if src}
        <img {src} {alt} />
      {:else}
        <span class={placeholder_size_class}>{placeholder}</span>
      {/if}
    </div>
  </div>
{/if}
