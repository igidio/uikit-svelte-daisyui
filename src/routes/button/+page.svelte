<script lang="ts">
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
</script>

<section class="space-y-12">
  <!-- Basic -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Button</h2>
    <p class="text-base-content/70 mb-6">Default button with neutral color.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton label="Button" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">Buttons available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton size="xs" label="Xsmall" />
      <UiButton size="sm" label="Small" />
      <UiButton size="md" label="Medium" />
      <UiButton size="lg" label="Large" />
      <UiButton size="xl" label="Xlarge" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Colors -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Use the <code>variant</code> prop to choose a color.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton variant="neutral" label="Neutral" />
      <UiButton variant="primary" label="Primary" />
      <UiButton variant="secondary" label="Secondary" />
      <UiButton variant="accent" label="Accent" />
      <UiButton variant="info" label="Info" />
      <UiButton variant="success" label="Success" />
      <UiButton variant="warning" label="Warning" />
      <UiButton variant="error" label="Error" />
      <UiButton variant="ghost" label="Ghost" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- style_type: Soft -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Soft Style</h2>
    <p class="text-base-content/70 mb-6">Buttons with a soft background using the <code>style_type</code> prop.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton variant="primary" style_type="soft" label="Primary" />
      <UiButton variant="secondary" style_type="soft" label="Secondary" />
      <UiButton variant="accent" style_type="soft" label="Accent" />
      <UiButton variant="info" style_type="soft" label="Info" />
      <UiButton variant="success" style_type="soft" label="Success" />
      <UiButton variant="warning" style_type="soft" label="Warning" />
      <UiButton variant="error" style_type="soft" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- style_type: Outline -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Outline Style</h2>
    <p class="text-base-content/70 mb-6">Buttons with an outline style using the <code>style_type</code> prop.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton variant="primary" style_type="outline" label="Primary" />
      <UiButton variant="secondary" style_type="outline" label="Secondary" />
      <UiButton variant="accent" style_type="outline" label="Accent" />
      <UiButton variant="info" style_type="outline" label="Info" />
      <UiButton variant="success" style_type="outline" label="Success" />
      <UiButton variant="warning" style_type="outline" label="Warning" />
      <UiButton variant="error" style_type="outline" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- style_type: Dash -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Dash Style</h2>
    <p class="text-base-content/70 mb-6">Buttons with a dashed outline using the <code>style_type</code> prop.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton variant="primary" style_type="dash" label="Primary" />
      <UiButton variant="secondary" style_type="dash" label="Secondary" />
      <UiButton variant="accent" style_type="dash" label="Accent" />
      <UiButton variant="info" style_type="dash" label="Info" />
      <UiButton variant="success" style_type="dash" label="Success" />
      <UiButton variant="warning" style_type="dash" label="Warning" />
      <UiButton variant="error" style_type="dash" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Disabled -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Disabled</h2>
    <p class="text-base-content/70 mb-6">Buttons can be disabled via the <code>disabled</code> prop.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton disabled label="Disabled" />
      <UiButton variant="primary" disabled label="Primary Disabled" />
      <UiButton variant="info" disabled label="Info Disabled" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Block -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Block</h2>
    <p class="text-base-content/70 mb-6">Buttons can be made into a block-level element using the <code>block</code> prop.</p>
    <div>
      <UiButton block label="Block Button" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Shapes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Shapes</h2>
    <p class="text-base-content/70 mb-6">Square and circle shapes with icon-only buttons.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton shape="square" icon="home" />
      <UiButton shape="circle" icon="home" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- With Icon -->
  <div>
    <h2 class="text-2xl font-bold mb-2">With Icon</h2>
    <p class="text-base-content/70 mb-6">Buttons can display an icon before the text.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton icon="home" label="Home" />
      <UiButton variant="primary" icon="success" label="Save" />
      <UiButton variant="warning" icon="warning" label="Warning" />
      <UiButton variant="error" icon="danger" label="Delete" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Icon Only -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Icon Only</h2>
    <p class="text-base-content/70 mb-6">Buttons with only an icon, no label.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton icon="home" />
      <UiButton variant="primary" icon="success" />
      <UiButton variant="warning" icon="warning" />
      <UiButton variant="error" icon="danger" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Spin -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Spin</h2>
    <p class="text-base-content/70 mb-6">Buttons can show a loading spinner using the <code>spin</code> prop.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton spin icon="loader" label="Loading..." />
      <UiButton spin variant="primary" icon="loader" label="Saving..." />
      <UiButton spin variant="warning" icon="loader" label="Please wait..." />
    </div>
  </div>
</section>
