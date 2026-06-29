<script lang="ts">
  import UiSelect from "$lib/ui/ui-select/UiSelect.svelte";
  import type {
    SelectOption,
    SelectSize,
  } from "$lib/ui/ui-select/ui-select-properties";
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
    "ghost",
  ];

  const default_options: SelectOption[] = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ];

  const demos = [
    {
      label: "Default Select",
      placeholder: "Pick an option...",
      options: default_options,
    },
    {
      label: "Disabled",
      color: "primary" as UiColors,
      placeholder: "Disabled select",
      options: default_options,
      disabled: true,
    },
    {
      label: "With Preselected",
      color: "secondary" as UiColors,
      placeholder: "Choose...",
      options: default_options,
      value: "b",
    },
  ];

  const color_demos = colors.map((c) => ({
    label: `Color: ${c}`,
    color: c,
    placeholder: `select-${c}`,
    options: default_options,
  }));

  const sizes: { label: string; size: SelectSize }[] = [
    { label: "Extra Small", size: "xs" },
    { label: "Small", size: "sm" },
    { label: "Medium (default)", size: "md" },
    { label: "Large", size: "lg" },
    { label: "Extra Large", size: "xl" },
  ];
</script>

<div class="w-full space-y-10">
  <h1 class="text-2xl font-bold">Select Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiSelect
            options={demo.options}
            placeholder={demo.placeholder}
            color={demo.color}
            disabled={demo.disabled ?? false}
            value={demo.value ?? ""}
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
          <UiSelect
            options={demo.options}
            color={demo.color}
            placeholder={demo.placeholder}
          />
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
          <UiSelect
            options={default_options}
            placeholder="select-{s.size}"
            size={s.size}
          />
        </div>
      {/each}
    </div>
  </section>
</div>
