<script lang="ts">
  import UiRange from "$lib/ui/ui-range/UiRange.svelte";
  import type { UiColors } from "$lib/ui/ui-types";
  import type { RangeSize } from "$lib/ui/ui-range/ui-range-properties";

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

  const basic_demos = [
    {
      label: "Default Range",
      color: undefined as UiColors | undefined,
      value: 40,
      disabled: false,
    },
    {
      label: "Disabled",
      color: "primary" as UiColors,
      value: 60,
      disabled: true,
    },
  ];

  const color_demos = colors.map((c) => ({
    label: `Color: ${c}`,
    color: c as UiColors,
    value: 50,
    disabled: false,
  }));

  const sizes: { label: string; size: RangeSize }[] = [
    { label: "Extra Small", size: "xs" },
    { label: "Small", size: "sm" },
    { label: "Medium (default)", size: "md" },
    { label: "Large", size: "lg" },
    { label: "Extra Large", size: "xl" },
  ];

  let interactive_value = $state(50);
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Range Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each basic_demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiRange
            value={demo.value}
            color={demo.color}
            disabled={demo.disabled}
          />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each color_demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiRange value={demo.value} color={demo.color} />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Sizes</h2>
    <div class="flex flex-col gap-4">
      {#each sizes as s}
        <div>
          <p class="text-sm font-medium mb-2">{s.label}</p>
          <UiRange value={50} size={s.size} />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Interactive</h2>
    <div>
      <p class="text-sm font-medium mb-2">
        Value: <strong>{interactive_value}</strong>
      </p>
      <UiRange bind:value={interactive_value} color="primary" />
    </div>
  </section>
</div>
