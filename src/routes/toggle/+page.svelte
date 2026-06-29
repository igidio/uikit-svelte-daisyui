<script lang="ts">
  import UiToggle from "$lib/ui/ui-toggle/UiToggle.svelte";
  import type { UiColors } from "$lib/ui/ui-types";

  const colors: UiColors[] = [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ];

  const demos: {
    label: string;
    color?: UiColors;
    checked?: boolean;
    disabled?: boolean;
  }[] = [
    { label: "Default Toggle" },
    { label: "Checked", checked: true },
    { label: "Disabled", disabled: true },
    { label: "Disabled Checked", disabled: true, checked: true },
  ];

  const color_demos = colors.map((c) => ({
    label: `Color: ${c}`,
    color: c,
    checked: true,
  }));

  let active_value = $state(false);
</script>

<div class="p-8 w-full space-y-10">
  <h1 class="text-2xl font-bold">Toggle Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiToggle
            color={demo.color}
            disabled={demo.disabled ?? false}
            checked={demo.checked ?? false}
          />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each color_demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiToggle color={demo.color} checked={demo.checked} />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Sizes</h2>
    <div class="flex flex-wrap items-center gap-6">
      <div>
        <p class="text-sm font-medium mb-2">Extra Small</p>
        <UiToggle checked={true} size="xs" />
      </div>
      <div>
        <p class="text-sm font-medium mb-2">Small</p>
        <UiToggle checked={true} size="sm" />
      </div>
      <div>
        <p class="text-sm font-medium mb-2">Medium (default)</p>
        <UiToggle checked={true} size="md" />
      </div>
      <div>
        <p class="text-sm font-medium mb-2">Large</p>
        <UiToggle checked={true} size="lg" />
      </div>
      <div>
        <p class="text-sm font-medium mb-2">Extra Large</p>
        <UiToggle checked={true} size="xl" />
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Interactive</h2>
    <div class="flex items-center gap-4">
      <div>
        <p class="text-sm font-medium mb-2">Toggle me</p>
        <UiToggle color="primary" bind:checked={active_value} />
      </div>
      <span class="text-sm"
        >Value: <strong>{active_value ? "ON" : "OFF"}</strong></span
      >
    </div>
  </section>
</div>
