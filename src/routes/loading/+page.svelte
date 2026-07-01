<script lang="ts">
  import UiLoading from '$lib/ui/ui-loading/UiLoading.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Loading</h2>
    <p class="text-base-content/70 mb-6">Default loading spinner.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiLoading />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Types</h2>
    <p class="text-base-content/70 mb-6">Loading animations available in different styles.</p>
    <div class="flex flex-wrap items-end gap-6">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">spinner</span>
        <UiLoading type="spinner" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">dots</span>
        <UiLoading type="dots" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">ring</span>
        <UiLoading type="ring" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">ball</span>
        <UiLoading type="ball" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">bars</span>
        <UiLoading type="bars" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">infinity</span>
        <UiLoading type="infinity" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">Loading available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-end gap-6">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">xs</span>
        <UiLoading size="xs" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">sm</span>
        <UiLoading size="sm" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">md</span>
        <UiLoading size="md" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">lg</span>
        <UiLoading size="lg" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">xl</span>
        <UiLoading size="xl" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Loading indicators can use daisyUI semantic colors.</p>
    <div class="flex flex-wrap items-end gap-6">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">primary</span>
        <UiLoading color="primary" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">secondary</span>
        <UiLoading color="secondary" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">accent</span>
        <UiLoading color="accent" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">neutral</span>
        <UiLoading color="neutral" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">info</span>
        <UiLoading color="info" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">success</span>
        <UiLoading color="success" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">warning</span>
        <UiLoading color="warning" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">error</span>
        <UiLoading color="error" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">ghost</span>
        <UiLoading color="ghost" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Combined</h2>
    <p class="text-base-content/70 mb-6">Mix type, size, and color together.</p>
    <div class="flex flex-wrap items-end gap-6">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">spinner lg primary</span>
        <UiLoading type="spinner" size="lg" color="primary" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">dots xl success</span>
        <UiLoading type="dots" size="xl" color="success" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">ring lg warning</span>
        <UiLoading type="ring" size="lg" color="warning" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">bars xl error</span>
        <UiLoading type="bars" size="xl" color="error" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm">infinity lg info</span>
        <UiLoading type="infinity" size="lg" color="info" />
      </div>
    </div>
  </div>
</section>
