<script lang="ts">
  import UiRadialprogress from '$lib/ui/ui-radialprogress/UiRadialprogress.svelte';

  const colors: Array<import('$lib/ui/ui-radialprogress/ui-radialprogress-properties').UiRadialprogressColors> = [
    'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error',
  ];
</script>

<section class="space-y-12">
  <!-- Basic Radialprogress -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Radialprogress</h2>
    <p class="text-base-content/70 mb-6">Default radial progress at 70%.</p>
    <div class="flex flex-wrap items-center gap-8">
      <UiRadialprogress value={70} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Different Values -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Values</h2>
    <p class="text-base-content/70 mb-6">Radial progress at 0, 20, 60, 80, and 100 percent.</p>
    <div class="flex flex-wrap items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress value={0} />
        <span class="text-sm">0%</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress value={20} />
        <span class="text-sm">20%</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress value={60} />
        <span class="text-sm">60%</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress value={80} />
        <span class="text-sm">80%</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress value={100} />
        <span class="text-sm">100%</span>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Colors -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Radial progress in daisyUI semantic colors at 70%.</p>
    <div class="flex flex-wrap items-center gap-8">
      {#each colors as c}
        <div class="flex flex-col items-center gap-2">
          <UiRadialprogress color={c} value={70} />
          <span class="text-sm">{c}</span>
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- With Background -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With Background Color</h2>
    <p class="text-base-content/70 mb-6">Radial progress with a neutral background.</p>
    <div class="flex flex-wrap items-center gap-8">
      <UiRadialprogress background="secondary" value={70} />
      <UiRadialprogress background="accent" value={70} />
      <UiRadialprogress background="info" value={70} />
      <UiRadialprogress background="success" value={70} />
      <UiRadialprogress background="warning" value={70} />
      <UiRadialprogress background="error" value={70} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Custom Size -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Size</h2>
    <p class="text-base-content/70 mb-6">Radial progress with custom sizes in rem.</p>
    <div class="flex flex-wrap items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={60} size={3} />
        <span class="text-sm">3rem</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={70} size={5} />
        <span class="text-sm">5rem</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={80} size={8} />
        <span class="text-sm">8rem</span>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Custom Thickness -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Thickness</h2>
    <p class="text-base-content/70 mb-6">Radial progress with custom thickness in rem.</p>
    <div class="flex flex-wrap items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={70} thickness={0.2} />
        <span class="text-sm">0.2rem</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={70} thickness={0.5} />
        <span class="text-sm">0.5rem</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={70} thickness={1} />
        <span class="text-sm">1rem</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <UiRadialprogress color="primary" value={70} thickness={2} />
        <span class="text-sm">2rem</span>
      </div>
    </div>
  </div>
</section>
