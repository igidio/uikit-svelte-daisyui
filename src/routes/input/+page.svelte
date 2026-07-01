<script lang="ts">
  import UiInput from "$lib/ui/ui-input/UiInput.svelte";
  import type { InputSize } from "$lib/ui/ui-input/ui-input-properties";
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

  const demos = [
    {
      label: "Text Input",
      type: "text" as const,
      placeholder: "Type here...",
      value: "Hello world",
    },
    {
      label: "Password",
      color: "primary" as UiColors,
      type: "password" as const,
      placeholder: "Enter password...",
    },
    {
      label: "Email",
      color: "secondary" as UiColors,
      type: "email" as const,
      placeholder: "you@example.com",
    },
    {
      label: "Disabled",
      color: "accent" as UiColors,
      type: "text" as const,
      placeholder: "Disabled input",
      disabled: true,
    },
    {
      label: "Read Only",
      color: "info" as UiColors,
      type: "text" as const,
      placeholder: "Read only",
      readonly: true,
      value: "Can't edit me",
    },
  ];

  const color_demos: { label: string; color: UiColors }[] = colors.map((c) => ({
    label: `Color: ${c}`,
    color: c,
  }));

  const sizes: { label: string; size: InputSize }[] = [
    { label: "Extra Small", size: "xs" },
    { label: "Small", size: "sm" },
    { label: "Medium (default)", size: "md" },
    { label: "Large", size: "lg" },
    { label: "Extra Large", size: "xl" },
  ];
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Input Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiInput
            type={demo.type}
            placeholder={demo.placeholder}
            disabled={demo.disabled ?? false}
            readonly={demo.readonly ?? false}
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
          <UiInput type="text" color={demo.color} placeholder={demo.label} />
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
          <UiInput type="text" placeholder="input-{s.size}" size={s.size} />
        </div>
      {/each}
    </div>
  </section>
</div>
