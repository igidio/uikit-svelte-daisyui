<script lang="ts">
  import UiDropdown from '$lib/ui/ui-dropdown/UiDropdown.svelte';
  import UiDropdownItem from '$lib/ui/ui-dropdown/UiDropdownItem.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Default Dropdown</h2>
    <p class="text-base-content/70 mb-6">
      Dropdown with default position (bottom) and align (center).
    </p>
    <UiDropdown id="default-dropdown">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>Item 1</UiDropdownItem>
      <UiDropdownItem>Item 2</UiDropdownItem>
      <UiDropdownItem>Item 3</UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Position: Top</h2>
    <p class="text-base-content/70 mb-6">Dropdown opens toward the top.</p>
    <UiDropdown id="top-dropdown" position="top">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>Item 1</UiDropdownItem>
      <UiDropdownItem>Item 2</UiDropdownItem>
      <UiDropdownItem>Item 3</UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Position: Left</h2>
    <p class="text-base-content/70 mb-6">Dropdown opens toward the left.</p>
    <div class="flex justify-center">
      <UiDropdown id="left-dropdown" position="left">
        {#snippet trigger()}
          <UiButton label="Click" variant="primary" />
        {/snippet}
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Position: Right</h2>
    <p class="text-base-content/70 mb-6">Dropdown opens toward the right.</p>
    <div class="flex justify-center">
      <UiDropdown id="right-dropdown" position="right">
        {#snippet trigger()}
          <UiButton label="Click" variant="primary" />
        {/snippet}
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Align: Start</h2>
    <p class="text-base-content/70 mb-6">Dropdown aligns to the start of the trigger button.</p>
    <UiDropdown id="start-dropdown" align="start">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>Item 1</UiDropdownItem>
      <UiDropdownItem>Item 2</UiDropdownItem>
      <UiDropdownItem>Item 3</UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Align: End</h2>
    <p class="text-base-content/70 mb-6">Dropdown aligns to the end of the trigger button.</p>
    <UiDropdown id="end-dropdown" align="end">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>Item 1</UiDropdownItem>
      <UiDropdownItem>Item 2</UiDropdownItem>
      <UiDropdownItem>Item 3</UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Icons</h2>
    <p class="text-base-content/70 mb-6">Dropdown with icons inside items.</p>
    <UiDropdown id="icon-dropdown">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>
        <span class="flex items-center gap-2">✏️ Edit</span>
      </UiDropdownItem>
      <UiDropdownItem>
        <span class="flex items-center gap-2">📋 Copy</span>
      </UiDropdownItem>
      <UiDropdownItem>
        <span class="flex items-center gap-2">🗑️ Delete</span>
      </UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Combined: Top + End</h2>
    <p class="text-base-content/70 mb-6">Dropdown opens top and aligns to the end.</p>
    <UiDropdown id="combined-dropdown" position="top" align="end">
      {#snippet trigger()}
        <UiButton label="Click" variant="primary" />
      {/snippet}
      <UiDropdownItem>Item 1</UiDropdownItem>
      <UiDropdownItem>Item 2</UiDropdownItem>
      <UiDropdownItem>Item 3</UiDropdownItem>
    </UiDropdown>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Complex Content</h2>
    <p class="text-base-content/70 mb-6">
      Dropdown items can contain any HTML content via the default slot.
    </p>
    <UiDropdown id="complex-dropdown">
      {#snippet trigger()}
        <UiButton variant="primary" label="Actions" />
      {/snippet}
      <UiDropdownItem>
        <button type="button">✏️ Edit</button>
      </UiDropdownItem>
      <UiDropdownItem>
        <button type="button">📋 Duplicate</button>
      </UiDropdownItem>
      <UiDropdownItem>
        <button type="button" class="text-error">🗑️ Delete</button>
      </UiDropdownItem>
    </UiDropdown>
  </div>
</section>
