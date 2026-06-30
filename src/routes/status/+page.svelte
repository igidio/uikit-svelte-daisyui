<script lang="ts">
  import UiStatus from '$lib/ui/ui-status/UiStatus.svelte';
  import type { UiColors } from '$lib/ui/ui-types';

  const colors: UiColors[] = [
    'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error', 'ghost',
  ];
</script>

<section class="space-y-12">
  <!-- Default -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Status</h2>
    <p class="text-base-content/70 mb-6">
      The <code>UiStatus</code> component is a small visual indicator that shows the current
      state of an element: online, offline, error, etc.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiStatus color="primary" />
      <span class="text-sm text-base-content/70">Online</span>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Colors -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Status colors</h2>
    <p class="text-base-content/70 mb-6">
      Use the <code>color</code> prop to switch between available colors.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      {#each colors as c}
        <div class="flex items-center gap-1.5">
          <UiStatus color={c} />
          <span class="text-xs text-base-content/60 capitalize">{c}</span>
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Status sizes</h2>
    <p class="text-base-content/70 mb-6">
      Five sizes available: <code>xs</code>, <code>sm</code>, <code>md</code>,
      <code>lg</code> and <code>xl</code>.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2">
        <UiStatus size="xs" color="primary" />
        <span class="text-xs text-base-content/60">xs</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus size="sm" color="primary" />
        <span class="text-xs text-base-content/60">sm</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus size="md" color="primary" />
        <span class="text-xs text-base-content/60">md</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus size="lg" color="primary" />
        <span class="text-xs text-base-content/60">lg</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus size="xl" color="primary" />
        <span class="text-xs text-base-content/60">xl</span>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- With labels -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Status with labels</h2>
    <p class="text-base-content/70 mb-6">
      Combine <code>UiStatus</code> with text to represent readable states.
    </p>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <UiStatus color="success" />
        <span class="font-medium">Online</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus color="warning" />
        <span class="font-medium">Away</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus color="error" />
        <span class="font-medium">Offline</span>
      </div>
      <div class="flex items-center gap-2">
        <UiStatus color="info" />
        <span class="font-medium">Idle</span>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- In context -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Status in context</h2>
    <p class="text-base-content/70 mb-6">
      Typical usage inside a user list or profile card.
    </p>
    <div class="card bg-base-100 w-full max-w-md border border-base-300">
      <div class="card-body p-6">
        <h3 class="card-title text-lg">Team members</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <UiStatus color="success" size="sm" />
            <span>Salva - Online</span>
          </div>
          <div class="flex items-center gap-3">
            <UiStatus color="warning" size="sm" />
            <span>Maria - Away</span>
          </div>
          <div class="flex items-center gap-3">
            <UiStatus color="error" size="sm" />
            <span>Carlos - Offline</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
