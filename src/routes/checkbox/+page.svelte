<script lang="ts">
  import UiCheckbox from "$lib/ui/ui-checkbox/UiCheckbox.svelte";
  import type {
    CheckboxOption,
    CheckboxSize,
  } from "$lib/ui/ui-checkbox/ui-checkbox-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let selected_values = $state<any[]>(["option1"]);

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
      label: "Default",
      data: [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
        { label: "Option C", value: "c" },
      ] as CheckboxOption[],
    },
    {
      label: "Disabled",
      disabled: true,
      data: [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
      ] as CheckboxOption[],
    },
  ];

  const color_demos = colors.map((c) => ({
    label: `Color: ${c}`,
    color: c,
    data: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ] as CheckboxOption[],
  }));

  const sizes: { label: string; size: CheckboxSize }[] = [
    { label: "Extra Small", size: "xs" },
    { label: "Small", size: "sm" },
    { label: "Medium (default)", size: "md" },
    { label: "Large", size: "lg" },
    { label: "Extra Large", size: "xl" },
  ];

  const size_data: CheckboxOption[] = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
  ];
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Checkbox Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each basic_demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiCheckbox
            name={demo.label}
            data={demo.data}
            disabled={demo.disabled ?? false}
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
          <UiCheckbox name={demo.label} color={demo.color} data={demo.data} />
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
          <UiCheckbox name="demo" size={s.size} data={size_data} />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Interactive</h2>
    <div>
      <p class="text-sm font-medium mb-2">
        Selected: {selected_values.join(", ") || "none"}
      </p>
      <UiCheckbox
        name="interactive"
        bind:value={selected_values}
        data={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
      />
    </div>
  </section>
</div>
