<script lang="ts">
  import UiRadio from "$lib/ui/ui-radio/UiRadio.svelte";
  import UiRadioItem from "$lib/ui/ui-radio/UiRadioItem.svelte";
  import type { UiColors } from "$lib/ui/ui-types";
  import type { RadioSize } from "$lib/ui/ui-radio/ui-radio-properties";

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
    { label: "Default", disabled: false },
    { label: "Disabled", disabled: true },
  ];

  const color_demos = colors.map((c) => ({ label: `Color: ${c}`, color: c }));

  const sizes: { label: string; size: RadioSize }[] = [
    { label: "Extra Small", size: "xs" },
    { label: "Small", size: "sm" },
    { label: "Medium (default)", size: "md" },
    { label: "Large", size: "lg" },
    { label: "Extra Large", size: "xl" },
  ];

  let interactive_value = $state("option1");
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Radio Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each basic_demos as demo}
        <div>
          <p class="text-sm font-medium mb-2">{demo.label}</p>
          <UiRadio name={demo.label} disabled={demo.disabled}>
            {#snippet children()}
              <UiRadioItem value="option1">Option 1</UiRadioItem>
              <UiRadioItem value="option2">Option 2</UiRadioItem>
              <UiRadioItem value="option3">Option 3</UiRadioItem>
            {/snippet}
          </UiRadio>
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
          <UiRadio name={demo.label} color={demo.color}>
            {#snippet children()}
              <UiRadioItem value="option1">Option 1</UiRadioItem>
              <UiRadioItem value="option2">Option 2</UiRadioItem>
              <UiRadioItem value="option3">Option 3</UiRadioItem>
            {/snippet}
          </UiRadio>
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
          <UiRadio name="demo-{s.size}" size={s.size}>
            {#snippet children()}
              <UiRadioItem value="a">A</UiRadioItem>
              <UiRadioItem value="b">B</UiRadioItem>
              <UiRadioItem value="c">C</UiRadioItem>
            {/snippet}
          </UiRadio>
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Interactive</h2>
    <div>
      <p class="text-sm font-medium mb-2">
        Selected value: {interactive_value}
      </p>
      <UiRadio name="interactive" bind:value={interactive_value}>
        {#snippet children()}
          <UiRadioItem value="option1">Option 1</UiRadioItem>
          <UiRadioItem value="option2">Option 2</UiRadioItem>
          <UiRadioItem value="option3">Option 3</UiRadioItem>
        {/snippet}
      </UiRadio>
    </div>
  </section>
</div>
