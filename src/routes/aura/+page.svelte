<script lang="ts">
  import UiAlert from '$lib/ui/ui-alert/UiAlert.svelte';
  import UiAura from '$lib/ui/ui-aura/UiAura.svelte';
  import UiBadge from '$lib/ui/ui-badge/UiBadge.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Aura</h2>
    <p class="text-base-content/70 mb-6">Default aura effect wrapping a button.</p>
    <div class="flex flex-wrap items-center gap-8">
      <UiAura>
        <UiButton label="Button with aura" />
      </UiAura>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Types</h2>
    <p class="text-base-content/70 mb-6">
      Different aura light effects: dual, rainbow, holo, glow, gold, and silver.
    </p>
    <div class="flex flex-wrap items-center gap-8">
      <UiAura type="dual">
        <UiButton variant="neutral" label="Dual" />
      </UiAura>
      <UiAura type="rainbow">
        <UiButton variant="neutral" label="Rainbow" />
      </UiAura>
      <UiAura type="holo">
        <UiButton variant="neutral" label="Holo" />
      </UiAura>
      <UiAura type="glow">
        <UiButton variant="neutral" label="Glow" />
      </UiAura>
      <UiAura type="gold">
        <UiButton variant="neutral" label="Gold" />
      </UiAura>
      <UiAura type="silver">
        <UiButton variant="neutral" label="Silver" />
      </UiAura>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">Aura available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-center gap-8">
      <UiAura size="xs">
        <UiButton size="xs" label="XSmall" />
      </UiAura>
      <UiAura size="sm">
        <UiButton size="sm" label="Small" />
      </UiAura>
      <UiAura size="md">
        <UiButton size="md" label="Medium" />
      </UiAura>
      <UiAura size="lg">
        <UiButton size="lg" label="Large" />
      </UiAura>
      <UiAura size="xl">
        <UiButton size="xl" label="XLarge" />
      </UiAura>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Aura with Badge</h2>
    <p class="text-base-content/70 mb-6">Aura wrapping a badge component.</p>
    <div class="flex flex-wrap items-center gap-8">
      <UiAura type="rainbow">
        <UiBadge variant="neutral" label="New" size="lg" />
      </UiAura>
      <UiAura type="gold">
        <UiBadge variant="neutral" label="Premium" size="lg" />
      </UiAura>
      <UiAura type="silver">
        <UiBadge variant="neutral" label="Featured" size="lg" />
      </UiAura>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Aura with Alert</h2>
    <p class="text-base-content/70 mb-6">Aura wrapping alert components for extra emphasis.</p>
    <div class="space-y-4">
      <UiAura type="glow">
        <UiAlert icon="info" label="This is an informational message with an aura effect." />
      </UiAura>
      <UiAura type="dual">
        <UiAlert icon="success" label="Success! Your action was completed with an aura." />
      </UiAura>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Class</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>class</code> to add custom Tailwind utilities or custom animation duration.
    </p>
    <div class="flex flex-wrap items-center gap-8">
      <UiAura type="rainbow" class="[--aura-duration:2000ms]">
        <UiButton variant="neutral" label="Slow aura (2s)" />
      </UiAura>
      <UiAura type="rainbow" class="[--aura-duration:500ms]">
        <UiButton variant="neutral" label="Fast aura (0.5s)" />
      </UiAura>
    </div>
  </div>
</section>
