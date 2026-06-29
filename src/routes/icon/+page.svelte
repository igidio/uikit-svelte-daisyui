<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import type { IconValue } from '$lib/data/icons';

  const icons: IconValue[] = [
    'home', 'search', 'edit', 'delete', 'plus', 'minus',
    'close', 'menu', 'success', 'info', 'warning', 'danger',
    'sun', 'moon', 'eye', 'eye-off', 'calendar', 'mail',
    'phone', 'location', 'profile', 'notification',
    'arrow_left', 'arrow_right', 'arrow_up', 'arrow_down',
    'chevron_up', 'chevron_down', 'chevron_left', 'chevron_right',
    'loader', 'send', 'save', 'copy', 'key',
  ];

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Icons</h2>
    <p class="text-base-content/70 mb-6">
      All available icons rendered at the default <code>md</code> size.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {#each icons as icon}
        <div class="flex flex-col items-center gap-2 p-3 rounded-box bg-base-200 border border-base-300">
          <UiIcon {icon} size="xl" />
          <span class="text-xs text-base-content/60">{icon}</span>
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">
      Available sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.
    </p>
    <div class="flex flex-wrap items-end gap-6">
      {#each sizes as size}
        <div class="flex flex-col items-center gap-2">
          <UiIcon icon="home" {size} />
          <span class="text-xs text-base-content/60">{size}</span>
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Spinner</h2>
    <p class="text-base-content/70 mb-6">
      The <code>loader</code> icon combined with <code>animate-spin</code> for loading states.
    </p>
    <div class="flex items-center gap-4">
      <UiIcon icon="loader" size="lg" class="animate-spin" />
      <UiIcon icon="loader" size="xl" class="animate-spin" />
      <UiIcon icon="loader" size="xl" class="animate-spin text-primary" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colored Icons</h2>
    <p class="text-base-content/70 mb-6">
      Icons inherit the current text color via Tailwind text utilities.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiIcon icon="home" size="xl" class="text-primary" />
      <UiIcon icon="success" size="xl" class="text-success" />
      <UiIcon icon="warning" size="xl" class="text-warning" />
      <UiIcon icon="danger" size="xl" class="text-error" />
      <UiIcon icon="info" size="xl" class="text-info" />
      <UiIcon icon="search" size="xl" class="text-secondary" />
      <UiIcon icon="delete" size="xl" class="text-accent" />
    </div>
  </div>
</section>
