<script lang="ts">
  import UiSteps from '$lib/ui/ui-steps/UiSteps.svelte';
  import type { UiStepsItem } from '$lib/ui/ui-steps/ui-steps-properties';

  const basic_data: UiStepsItem[] = [
    { label: 'Register' },
    { label: 'Choose plan' },
    { label: 'Purchase' },
    { label: 'Receive Product' },
  ];

  const horizontal_data: UiStepsItem[] = [
    { label: 'Start', color: 'primary' },
    { label: 'In Progress', color: 'primary' },
    { label: 'Review' },
    { label: 'Done' },
  ];

  const colorful_data: UiStepsItem[] = [
    { label: 'Fly to moon', color: 'info' },
    { label: 'Shrink the moon', color: 'info' },
    { label: 'Grab the moon', color: 'info' },
    { label: 'Sit on toilet', color: 'error' },
  ];

  const icon_data: UiStepsItem[] = [
    { label: 'User info', icon: 'home' },
    { label: 'Payment', icon: 'plus' },
    { label: 'Confirmation', icon: 'success' },
    { label: 'Done', icon: 'info' },
  ];

  const mixed_data: UiStepsItem[] = [
    { label: 'Step 1', color: 'primary', icon: 'home' },
    { label: 'Step 2', color: 'primary', icon: 'search' },
    { label: 'Step 3', color: 'accent', icon: 'success' },
    { label: 'Step 4', color: 'accent', icon: 'close' },
  ];
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Steps</h2>
    <p class="text-base-content/70 mb-6">Default horizontal steps with sequential numbering.</p>
    <div class="flex justify-center py-4">
      <UiSteps data={basic_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Horizontal Steps</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>direction="vertical"</code> for a vertical layout.
    </p>
    <div class="flex justify-center py-4">
      <UiSteps data={horizontal_data} direction="vertical" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Colors</h2>
    <p class="text-base-content/70 mb-6">
      Use the <code>color</code> prop to apply a step color modifier.
    </p>
    <div class="flex justify-center py-4">
      <UiSteps data={colorful_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Steps with Icons</h2>
    <p class="text-base-content/70 mb-6">
      Provide an <code>icon</code> to replace the sequential number inside the step circle.
    </p>
    <div class="flex justify-center py-4">
      <UiSteps data={icon_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colorful Steps with Icons</h2>
    <p class="text-base-content/70 mb-6">
      Combine <code>color</code> and <code>icon</code> for a richer visual.
    </p>
    <div class="overflow-x-auto py-4">
      <UiSteps data={mixed_data} direction="horizontal" />
    </div>
  </div>
</section>
