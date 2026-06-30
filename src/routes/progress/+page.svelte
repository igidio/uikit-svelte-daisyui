<script lang="ts">
  import UiProgress from '$lib/ui/ui-progress/UiProgress.svelte';
</script>

<section class="space-y-12">
  <!-- Basic Progress -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Progress</h2>
    <p class="text-base-content/70 mb-6">Default progress bar with a value of 50.</p>
    <UiProgress value={50} />
  </div>

  <hr class="border-base-300" />

  <!-- Indeterminate -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Indeterminate</h2>
    <p class="text-base-content/70 mb-6">
      Progress bar without a value, showing an indeterminate animation.
    </p>
    <UiProgress indeterminate={true} />
  </div>

  <hr class="border-base-300" />

  <!-- Different Values -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Values</h2>
    <p class="text-base-content/70 mb-6">Progress bars at 0, 25, 50, 75, and 100 percent.</p>
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <span class="w-12 text-sm">0%</span>
        <UiProgress value={0} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-12 text-sm">25%</span>
        <UiProgress value={25} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-12 text-sm">50%</span>
        <UiProgress value={50} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-12 text-sm">75%</span>
        <UiProgress value={75} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-12 text-sm">100%</span>
        <UiProgress value={100} class="w-full" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Colors -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Progress bars in all daisyUI semantic colors.</p>
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">primary</span>
        <UiProgress color="primary" value={45} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">secondary</span>
        <UiProgress color="secondary" value={55} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">accent</span>
        <UiProgress color="accent" value={65} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">neutral</span>
        <UiProgress color="neutral" value={75} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">info</span>
        <UiProgress color="info" value={30} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">success</span>
        <UiProgress color="success" value={85} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">warning</span>
        <UiProgress color="warning" value={60} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">error</span>
        <UiProgress color="error" value={40} class="w-full" />
      </div>
      <div class="flex items-center gap-4">
        <span class="w-24 text-sm">ghost</span>
        <UiProgress color="ghost" value={50} class="w-full" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Colors with Indeterminate -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Indeterminate Colors</h2>
    <p class="text-base-content/70 mb-6">Indeterminate progress bars in different colors.</p>
    <div class="space-y-4">
      <UiProgress color="primary" indeterminate={true} />
      <UiProgress color="secondary" indeterminate={true} />
      <UiProgress color="accent" indeterminate={true} />
      <UiProgress color="info" indeterminate={true} />
      <UiProgress color="success" indeterminate={true} />
      <UiProgress color="warning" indeterminate={true} />
      <UiProgress color="error" indeterminate={true} />
    </div>
  </div>
</section>
