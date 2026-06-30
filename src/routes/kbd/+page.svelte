<script lang="ts">
  import UiKbd from '$lib/ui/ui-kbd/UiKbd.svelte';
</script>

<section class="space-y-12">
  <!-- Basic Kbd -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Kbd</h2>
    <p class="text-base-content/70 mb-6">Default keyboard key display.</p>
    <div class="flex items-center gap-4">
      <UiKbd value="K" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Kbd Sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Kbd Sizes</h2>
    <p class="text-base-content/70 mb-6">Available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiKbd size="xs" value="Xsmall" />
      <UiKbd size="sm" value="Small" />
      <UiKbd size="md" value="Medium" />
      <UiKbd size="lg" value="Large" />
      <UiKbd size="xl" value="Xlarge" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- In text -->
  <div>
    <h2 class="text-2xl font-bold mb-2">In text</h2>
    <p class="text-base-content/70 mb-6">Keyboard keys inline with text.</p>
    <p class="text-base-content">Press <UiKbd size="sm" value="F" /> to pay respects.</p>
  </div>

  <hr class="border-base-300" />

  <!-- Key combination -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Key Combination</h2>
    <p class="text-base-content/70 mb-6">Multiple keys shown together.</p>
    <div class="flex items-center gap-2">
      <UiKbd value="ctrl" />
      <span class="text-base-content/60">+</span>
      <UiKbd value="shift" />
      <span class="text-base-content/60">+</span>
      <UiKbd value="del" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Function Keys -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Function Keys</h2>
    <p class="text-base-content/70 mb-6">Special modifier keys displayed as kbd.</p>
    <div class="flex flex-wrap items-center gap-2">
      <UiKbd value="⌘" />
      <UiKbd value="⌥" />
      <UiKbd value="⇧" />
      <UiKbd value="⌃" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Arrow Keys -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Arrow Keys</h2>
    <p class="text-base-content/70 mb-6">Directional keys laid out in their natural position.</p>
    <div class="flex flex-col items-center gap-1">
      <UiKbd value="▲" />
      <div class="flex gap-12">
        <UiKbd value="◀︎" />
        <UiKbd value="▶︎" />
      </div>
      <UiKbd value="▼" />
    </div>
  </div>
</section>
